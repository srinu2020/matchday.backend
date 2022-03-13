const mongoose=require('mongoose')
const FixtureSchema=new mongoose.Schema({
    firstplayer:{
        type:String,
         },
    secondplayer:{
        type:String,
         
    },
    court:{
        type:String
    },
    
    winner:{
        type:String
    },
     
    date:{
        type:Date
    }

})
const Fixtures=new mongoose.model('FIXTURE',FixtureSchema)
module.exports=Fixtures