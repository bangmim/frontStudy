const {Comment, FavoriteComment} = require("../models/model")

// 댓글 작성
exports.create = async (req, res, next)=>{
    try{
        const loginUser = req.user;
        const id = req.params.id;

        // 댓글 내용을 content라는 변수에 담는다 >> body에 작성
        const content = req.body.content;

        const comment = new Comment({
            article: id,
            content: content,
            user: loginUser._id
        })

        await comment.save();

        res.json(await comment.populate("user"));

    }catch(error){
        next(error)
    }
}

// 댓글 리스트
exports.comment_list = async (req, res, next)=>{
    try{
        const loginUser = req.user;
        const id = req.params.id;

        // 쿼리
        const comments = await Comment
        .find({article : id})
        .populate("user")
        .sort([["created","descending"]])
        .limit(req.query.limit)
        .skip(req.query.skip)
        .lean();

        // comment 데이터에 isFavorite 속성을 추가한다
        // 한개의 게시물에 여러개의 댓글이 달릴 수 있으므로 반복문을 사용한다.
        for(let comment of comments){
            const favoriteComment = await FavoriteComment
            .findOne({user: loginUser._id, comment: comment._id})

            comment.isFavorite = favoriteComment ? true: false;
        }

        res.json(comments);

    }catch(error){
        next(error)
    }
}

// 댓글 삭제
exports.delete = async (req, res, next)=>{
    try{
        const loginUser = req.user;
        const id = req.params.id;

        // 쿼리 
        // 게시글의 id를 통해 해당 게시글의 댓글을 찾아 변수에 담는다
        // 삭제되는 경우 comment -> null
        const comment = await Comment.findById(id);

        // 삭제를 요청한 유저와 댓글 작성자가 일치하지 않는 경우
        if(loginUser._id.toString() !== comment.user.toString()){
            const err = new Error("User not match")
            err.staus = 400;
            return next(err);
        }

        await comment.delete();

        res.end();

    }catch(error){
        next(error)
    }
}

// 댓글 좋아요
exports.favorite = async (req, res, next)=>{
    try{
        const loginUser = req.user;
        const id = req.params.id;

        // 쿼리
        const comment = await Comment.findById(id);
        const favoriteComment = await FavoriteComment
        .findOne({user : loginUser._id, comment : comment._id});

        // 이미 좋아요를 누른 게시물일 때
        if(favoriteComment){
            const err= new Error("Already favorite comment");
            err.status = 400;
            return next(err)
        }

        // 새로운 favoriteComment 데이터를 저장한다.
        // 데이터 저장하는 방법 : (1) 새로운 인스턴스 모델을 만든다
        const newFavoriteComment = new FavoriteComment({
            user: loginUser._id,
            comment: comment._id
        })
        // (2) save()메서드를 이용한다
        await newFavoriteComment.save();

        comment.favoriteCount++;
        await comment.save();

        res.end();

    }catch(error){
        next(error)
    }
}

// 댓글 좋아요 취소
exports.unfavorite = async (req, res, next)=>{
    try{
        const loginUser = req.user;
        const id = req.params.id;

        // 쿼리
        const comment = await Comment.findById(id)
        const favoriteComment = await FavoriteComment
        .findOne({user : loginUser._id, comment : comment._id});


        if(!favoriteComment){
            const err = new Error("No comment to unfavorite");
            err.status = 400;
            return next(err)
        }

        await favoriteComment.delete();

        comment.favoriteCount--;
        await comment.save();

        res.end();

    }catch(error){
        next(error)
    }
}