const { User } = require("../models/model");

exports.username = async(req, res, next)=>{
    try{
        // req.query : url에 ?key=value의 형태로 담는다
        // (예) localhost:3000/search?username=b(value)
        const username = req.query.username;    
        // username으로 '시작'하는 패턴을 만든다
        // 프로그래밍에서 문자열을 다룰 때, 
        // 문자열의 일정한 패턴을 표현하는 일종의 형식 언어를 말한다. 
        // 정규식이라고도 부르며,보통 regex 혹은 regexp라 많이 쓴다.

        const patt = new RegExp("^"+username);

        // 쿼리
        const users = await User.find({
            username:{$regex: patt}
        });

        res.json(users);

    }catch(error){
        next(error)
    }
}