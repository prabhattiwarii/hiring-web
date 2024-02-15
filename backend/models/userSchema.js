const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    //  _id: mongoose.Schema.Types.ObjectId,
    first_name: {
        type:String,
        required:true
    },
    last_name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    website:{
        type:String,
    },
    interest:{
        type:String,
        enum: ['website-design','website-development','online-marketing'],
        required:true
    },
    message:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports=mongoose.model('users',userSchema);