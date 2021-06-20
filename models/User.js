//mongoose 모듈을 가져옴
const mongoose = require('mongoose');

//schema 설정
const userSchema = mongoose.Schema({
    //필드 작성
    name : {
        type : String,
        maxlength : 50
    },

    email : {
        type: String,
        trim: true,//space를 없애줌
        unique : 1
    },

    password:{
        type : String,
        maxlength : 50
    },
    lastname :{
        type: String,
        maxlength: 50
    },
    role:{//관리자, 일반 유저
        type: Number,
        default: 0
    },
    image : String,
    token :{
        type : String
    },
    tokenExp :{//사용기한
        type : Number
    }
})
//모델(모델이름,schema)
const User = mongoose.model('User', userSchema)

//다른 파일에서 모델 사용
module.exports = {}