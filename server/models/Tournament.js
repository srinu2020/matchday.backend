const mongoose=require('mongoose')
const TournamentSchema=new mongoose.Schema({
    tournamentname:{
        type:String
    },
    abbreviation:{
        type:String
    },
    startDate:{
        type:Date
    },
    EndDate:{
        type:Date
    },
    image:{
        type:String
    },
    court:{
        type:String
    }
})
const Tournaments=new mongoose.model('TOURNAMENT',TournamentSchema)
module.exports=Tournaments