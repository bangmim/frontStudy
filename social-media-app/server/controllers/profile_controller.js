const { User, Follow, Article } = require("../models/model");

// 프로필 정보
exports.profile = async (req, res, next)=>{
    try{
        const loginUser=  req.user;
        // req.params : 라우터의 매개변수 / 파라미터로 전달한다
        // /:username
        const username = req.params.username;
        const user = await User.findOne({username});    // parameter로 받은 username과 일치하는 user를 찾아 변수에 담는다

        if(!user){
            const err = new Error("User not found");
            err.status = 404;
            return next(err);
        }

        // 로그인 유저가 팔로우하는 유저인지 판단한다
        const follow = await Follow.findOne({follower : loginUser._id, following: user._id})
        
        // 프로필 유저의 팔로잉 수
        const followingCount = await Follow.countDocuments({follower : user._id});
        // 프로필 유저의 팔로워 수
        const followersCount = await Follow.countDocuments({following: user._id});
        // 프로필 유저의 게시물 수
        const articlesCount = await Article.countDocuments({user: user._id});

        // 쿼리의 결과를 profile이라는 object에 속성 값으로 조합하여 사용할 수 있다.
        const profile={
            username : user.username,
            bio: user.bio,
            image: user.image,
            isFollowing: !! follow,
            followersCount,
            followingCount,
            articlesCount
        }

        res.json(profile);

    }catch(error){
        next(error)
    }
}

// 프로필 유저의 게시물
exports.timeline = async (req, res, next)=>{
    try{
        const username= req.params.username;
        const user = await User.findOne({username})

        if(!user){
            const err= new Error("User not found")
            err.staus = 404;
            return next(err);
        }

        const articles = await Article.find({user : user._id})
        .sort([["created","descending"]])
        .populate("user")
        .skip(req.query.skip)
        .limit(req.query.limit);

        res.json(articles);

    }catch(error){
        next(error)
    }
}

// 팔로우
exports.follow = async(req, res, next)=>{
    try{
        const loginUser= req.user;
        const username = req.params.username;
        const user = await User.findOne({username})
        const follow = await Follow
        .findOne({follower: loginUser._id, following: user._id})

        if(follow){
            const err = new Error("Already follow")
            err.status = 400;
            return next(err)
        }

        const newFollow = new Follow({
            follower: loginUser._id,
            following: user._id
        })

        await newFollow.save();

        res.end();

    }catch(error){
        next(error)
    }
}

// 언팔
exports.unfollow = async (req, res, next)=>{
    try{
        const loginUser = req.user;
        const username = req.params.username;

        // 쿼리
        const user = await User.findOne({username})
        const follow = await Follow
        .findOne({follower: loginUser._id, following: user._id})

        if(!follow){
            const err = new Error("Follow not found");
            err.status = 400;
            return next(err);
        }

        await follow.delete();

        res.end();

    }catch(error){
        next(error)
    }
}

// 팔로워 리스트
exports.follower_list = async (req, res, next)=>{
    try{

        const username = req.params.username;

        const user = await User.findOne({username})
        
        const follows = await Follow
        .find({following : user._id}, "follower")   // Follow 컬렉션에서 속성값 이용하여 팔로워 리스트 출력 가능 
        .populate("follower")

        res.json(follows)

    }catch(error){
        next(error)
    }
}

// 팔로잉 리스트
exports.following_list = async (req, res, next)=>{
    try{
        const username = req.params.username;
        
        const user = await User.findOne({username})
        const follows = await Follow
        .find({follower: user._id}, "following")    // Follow 컬렉션에서 속성값 이용하여 팔로잉 리스트 출력 가능 
        .populate("following")

        res.json(follows)


    }catch(error){
        next(error)
    }
}