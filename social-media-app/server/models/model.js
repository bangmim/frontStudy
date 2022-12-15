// 필요한 패키지 불러오기
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// 해당 형식에 맞게 유저 데이터를 저장한다.
const userSchema = new Schema({
    username: {type: String},
    email : {type:String},
    bio : {type:String},
    image : {type: String},
    password: {type: String},
    salt: {type: String},       //암호화
})

const followSchema = new Schema({
    follower: {type: String, ref: 'User'},
    following: {type: String, ref: 'User'}
})

const articleSchema = new Schema({
    description : {type:String},
    photos : [{type : String}],
    created: {type: Date, default: Date.now},       //Date.now : 현재시간
    user : {type : Schema.ObjectId, ref:'User'},    //ref: 'User' 컬렉션을 참고한다
    favoriteCount : {type: Number, default : 0}
})

const favoriteSchema = new Schema({
    user: {type: Schema.ObjectId},
    article : {type : Schema.ObjectId}
})

const commentSchema = new Schema({
    content : {type: String},
    article : {type: Schema.ObjectId},
    user:{type: Schema.ObjectId, ref : 'User'},
    create: {type: Date, default: Date.now},
    favoriteCount : {type: Number, default:0}
})

const favoriteCommentSchema = new Schema({
    user: {type:Schema.ObjectId},
    comment : {type: Schema.ObjectId}
})

exports.User = mongoose.model('User',userSchema)
exports.Follow = mongoose.model('Follow', followSchema)
exports.Article = mongoose.model('Article', articleSchema)
exports.Favorite = mongoose.model('Comment', commentSchema)
exports.Comment = mongoose.model('Comment', commentSchema)
exports.FavoriteComment = mongoose.model('FavoriteComment', favoriteCommentSchema)