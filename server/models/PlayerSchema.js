const mongoose=require('mongoose')
const PlayerSchema=new mongoose.Schema({
    name:{
        type:String,
        
    },
    country:{
        type:String,
        
    },
    city:{
        type:String,
        
    },
    email:{
        type:String,
         
    },
   
    image:{
        type:String,
         
    },
    handedness:{
       type:String,
        
    },
    academy:{
        type:String,
         
    },
    date:{
        type:Date,
         
    },
    type:{
        type:String
    },
    phoneNumber:{
        type:Number,
         
    },

})
const Players=new mongoose.model('PLAYER',PlayerSchema)
module.exports=Players