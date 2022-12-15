const { User } = require("../models/model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const fs = require("fs");

// 회원가입
exports.register = [
    // callback1 : 유저 데이터 유효성 검사
    async (req, res, next)=>{

        // 구조 분해 할당
        // 클라이언트의 데이터는 req.body에 담긴다.
        const {username, email, password}= req.body;

        // validate username (유저네임 중복 검사)
        {
            // const >> {} 범위 
            // 다른 {블록}에서도 같은 변수 선언이 가능하다 (const user 가능 o)

            //데이터 베이스에 쿼리(query)를 전송한다 (server >> DB)
            const user = await User.findOne({username});

            // # custom error
            if(user){
                const err = new Error("이미 가입된 유저입니다");
                // 400 (Bad Request) 잘못된 요청
                err.status = 400;
                return next(err);
            }
        }

        // validate email (이메일 중복 검사)
        {
            const user = await User.findOne({email});

            if(user){
                const err= new Error("이미 가입된 이메일입니다");
                err.status = 400;
                return next(err);
            }
        }

        // next() 인자가 없다면 다음 callback으로 이동한다
        next();
    },

    // callback2 : 유저 데이터 저장
    async (req, res, next)=>{
        try{
            const {username, email, password} = req.body;

            // # 비밀번호 암호화
            // salt : -유저데이터와 함께 저장되는 유니크한 값이다
            //        -비밀번호 암호화와 복호화에 사용된다
            const salt = crypto.randomBytes(16).toString("hex");
            // 암호화된 비밀번호
            const hashdPassword = crypto
            .pbkdf2Sync(password, salt, 310000, 32, "sha256")       // pbkdf2 : 알고리즘 & 메서드 이름
            .toString("hex")

            // # 유저데이터를 DB에 저장한다
            const user = new User({         // 새로운 user를 User모델에 저장한다. {새로운 인스턴스} //모델을 통해 DB로 저장 
                username,
                email,
                password : hashdPassword,
                salt: salt
             // _id : 고유한 id 값이 자동으로 생성된다
            })
            await user.save();

            // 클라이언트에게 user 데이터(object)를 전송한다
            res.json(user)

        }catch(error){
            next (error)
        }
    },
]

// 로그인
exports.login = async (req, res, next)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            const err= new Error("User not found");
            err.status = 401;
            return next(err);
        }

        // 클라이언트로부터 전달받은 비밀번호를 유저의 salt로 암호화한다 (단방향 암호화)
        const hashedPassword = crypto
        .pbkdf2Sync(password, user.salt, 310000, 32, "sha256")
        .toString("hex")

        // 비밀번호 비교 (엄격비교 : 타입과 값 모두 비교)
        if(user.password !== hashedPassword){   
            const err= new Error("Password not match");
            // 401(Unauthorized)
            err.status = 401;
            return next(err);
        }

        // # 토큰을 발급한다
        // 토큰에 username을 암호화하여 저장한다
        // SECRET key를 가지고 토큰을 암호화한다
        const token = jwt.sign({username : user.username}, process.env.SECRET);

        res.json({user, token})

    }catch(error){
        next(error)
    }
}

// 자기소개
exports.edit = async (req, res, next)=>{
    try{
        // 로그인 성공한 경우 loginUser 변수에 user 데이터를 담는다
        const loginUser = req.user;
        // 자기소개(bio)
        const bio = req.body.bio;   

        const user = await User.findById(loginUser._id);
        user.bio = bio;     // 업데이트
        await user.save();  // 변경사항 저장

        res.json(user.bio);

    }catch(error){
        next(error)
    }
}

// 프로필 이미지
exports.upload_image = async(req, res, next)=>{
    // formidable : 파일이 있는 form을 다룰 때 사용되는 모듈 
    const form = formidable({});

    form.parse(req, async(err, fields, files)=>{
        try{
            if(err){
                return next(err);
            }
            
            const loginUser = req.user;

            // 이미지에 랜덤 이름을 생성한뒤 data/users 경로에 저장한다
            const image = files.image;
            const oldPath = image.filepath;
            const ext = image.originalFilename.split(".")[1];
            const newName = image.newFilename+ "."+ ext;
            const newPath = `${__dirname}/../data/users/${newName}`;
            
            fs.renameSync(oldPath, newPath);
            // 또는 
            // cross device link not permitted 인 경우
            // fs.copyFileSync(oldPath, newPath);
            
            // 데이터베이스에 이미지의 이름을 저장한다
            const user = await User.findById(loginUser._id);
            user.image = newName;
            await user.save();

            res.json(newName);

        }catch(error){
            next(error);
        }
    })
}

// 삭제
exports.delete_image = async(req, res, next)=>{
    try{
        const loginUser = req.user;

        // 유저의 이미지를 null로 업데이트
        const user = await User.findById(loginUser._id);
        user.image = null;
        await user.save();

        // 서버가 응답을 종료한다
        res.end();

    }catch(error){
        next(error)
    }
}