const {Follow, Article, Favorite}= require("../models/model");
const formidable = require("formidable");
const fs = require("fs");

// 게시물 등록
exports.create = async (req, res, next)=>{
    const form = formidable({multiples: true});     // 파일이 여러개인 경우 속성을 multiple: true로 설정한다 

    form.parse(req, async(err, fields, files)=>{
        try{
            const loginUser = req.user;

            if(err){
                return next(err);
            }

            const images = files.images instanceof Array ? files.images : new Array(files.images);

            // 이미지가 업로드 되지 않았을 때
            if(!images[0].originalFilename){
                const err = new Error ("image must be specified");
                err.status = 400;
                return next(err);
            }

            // 이미지를 data/articles 경로에 저장한다.
            // 이미지가 여러개인 경우 >> map() 메서드를 이용한다
            const photos = images.map(photo =>{
                const oldPath = photo.filepath;
                const ext = photo.originalFilename.split(".")[1]
                const newName = photo.newFilename+"."+ext;
                const newPath = `${__dirname}/../data/articles/${newName}`;
                fs.renameSync(oldPath, newPath);

                return newName;     // array
            })

            // 데이터베이스 쿼리
            const article = new Article({
                description : fields.description,
                photos,
                user: loginUser._id
            })
            await article.save();

            res.json(article);

        }catch(error){
            next(error)
        }
    })
}

exports.article_list = async (req, res, next)=>{
    try{
        const articles = await Article.find()
        .sort([["create", "descending"]])
        .populate("user")
        .skip(req.query.skip)
        .limit(req.query.limit);

        res.json(articles);

    }catch(error){
        next (error)
    }
}

// 게시물 한개 가져오기
exports.article = async (req, res, next)=>{
    try{
        const loginUser = req.user;

        // url로 전달된 parameter로부터 id를 구한다     // :userid 필요
        const id = req.params.id;

        // 데이터베이스 쿼리
        const article = await Article
        .findById(id)
        .populate("user")
        .lean();            // mongoose 모델의 인스턴스를 일반 자바 오브젝트의 형태로 변환

        // id에 일치하는 게시물이 없는 경우
        if(!article){
            const err= new Error("Article not found");
            err.status = 404;
            return next(err);
        }

        // article 데이터에 isFavorite 속성을 추가한다
        // isFavorite : 로그인한 유저가 좋아하는 게시물이면 true, 아니면 false
        const favorite = await Favorite
        .findOne({uer: loginUser._id, article: article._id});
        
        // !! : 삼항 연산자를 간단하게 표현할 수 있다.
        // favorite을 가지고 있으면 true를 반환
        article.isFavorite = !!favorite;    

        res.json(article);

    }catch(error){
        next(error)
    }
}

// 게시물 삭제
exports.delete = async (req, res, next)=>{
    try{

        // 요청 url에 담긴 id값
        const id = req.params.id;

        // 데이터베이스 쿼리 >> id로 특정 게시물을 찾는다
        const article = await Article
        .findById(id);

        // id에 일치하는 게시물이 없을 때
        if(!article){
            const err = new Error("Article not found")
            err.status=404;
            return next(err);
        }

        // 데이터베이스 쿼리
        await article.delete();

        res.end();

    }catch(error){
        next(error)
    }
}

// 좋아요 
exports.favorite = async (req, res, next)=>{
    try{
        const loginUser=req.user;
        // 특정 게시물에 적용해야하는 부분이기 때문에 요청url에 특정 게시물의 id를 담아야한다
        const id = req.params.id;

        const article = await Article.findById(id);

        const favorite = await Favorite
        .findOne({user : loginUser._id, article: article._id})

        // 이미 좋아요를 누른 게시물일 때
        // 프론트엔드에서도 대비를 해두었겠지만, server에서도 대비를 하면 더 좋을 것이다.
        if(favorite){
            const err = new Error("Already favorite article");
            err.status = 400;
            return next(err)
        }

        // 데이터베이스 쿼리
        const newFavorite = new Favorite({
            user: loginUser._id,
            article: article._id
        })
        await newFavorite.save();   // Favorite 컬렉션에 데이터 저장

        // 게시물의 좋아요 수 (favoriteCount)를 1 증가시킨다
        article.favoriteCount++;
        await article.save();

        res.end();

    }catch(error){
        next(error)
    }
}

// 좋아요 취소
exports.unfavorite = async (req, res, next)=>{
    try{
        const loginUser = req.user;
        const id = req.params.id;

        const article = await Article.findById(id)

        const favorite = await Favorite
        .findOne({user : loginUser._id, article : article._id});

        // 좋아요한 게시물이 아닐 때
        if(!favorite){
            const err = new Error("No article to unfavorite");
            err.status=400;
            return next(err);
        }

        // favorite 데이터를 삭제한다
        await favorite.delete();

        article.favoriteCount--;
        await article.save();

        res.end();

    }catch(error){
        next(error)
    }
}

// 피드
exports.feed = async (req, res, next)=>{
    try{
        const loginUser = req.user;
        
        const follows = await Follow.find({follower : loginUser._id})
        const users = [...follows.map(follow=>follow.following), loginUser._id];

        // 유저 자신의 게시물과 유저가 팔로우하는 유저의 게시물
        const articles = await Article
        .find({user: {$in: users}})
        .sort([["created","descending"]])
        .populate("user")
        .skip(req.query.skip)
        .limit(req.query.limit)
        .lean();

        // article 데이터에 isFavorite 속성을 추가한다
        // 반복문을 사용하는 이유 : articles가 여러개이며 article마다 속성을 추가해야하기 때문에
        for(let article of articles){
            const favorite = await Favorite
            .findOne({user: loginUser._id, article: article._id});

            article.isFavorite = !!favorite;
        }

        res.json(articles)

    }catch(error){
        next(error)
    }
}