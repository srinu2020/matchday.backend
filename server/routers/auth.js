const express = require('express');
const Players=require('../models/PlayerSchema')
const Tournaments=require('../models/Tournament')
const Fixtures=require('../models/Fixture')

const router = express.Router();

router.post('/players',async(req,res)=>{
    const {name,country,city,image,email,handedness,academy,date,type,phoneNumber}=req.body;
   
    try{
        const PlayerExist= await Players.findOne({email:email});
        if(PlayerExist)
        {
              res.json({message:"user already exists"})
        }
        else{
            const newplayer=new Players({name,country,city,image,email,handedness,academy,date,type,phoneNumber});
            
            const response= await newplayer.save()
            if(response){
              res.status(200).json({response})
            }
            
        }
        

    }
    catch (err){
        console.log(err);
    }
})
router.post('/tournament',async(req,res)=>{
    const {tournamentname,abbreviation,startdate,enddate,image,court}=req.body;
   
    try{
        
            const newtournament=new Tournaments({tournamentname,abbreviation,startdate,enddate,image,court});
            
            const response= await newtournament.save()
            if(response){
              res.status(200).json({response})
            }
            
        
        

    }
    catch (err){
        console.log(err);
    }
})
router.post('/fixture',async(req,res)=>{
    const {firstplayer,secondplayer,court,winner,date}=req.body;
   
    try{
        
            const newfixture=new Fixtures({ firstplayer,secondplayer,court,winner,date});
            
            const response= await newfixture.save()
            if(response){
              res.status(200).json({response})
            }
            
        
        

    }
    catch (err){
        console.log(err);
    }
})
router.get('/getplayers',async(req,res)=>{
    try {
        let players= await Players.find()
        res.status(200).send(players)
        
    } catch (error) {
        res.status(400).send(error)
    }
   

})
router.get('/gettournament',async(req,res)=>{
    try {
        let tournament= await Tournaments.find()
        res.status(200).send(tournament)
        
    } catch (error) {
        res.status(400).send(error)
    }
   

})
router.get('/getfixture',async(req,res)=>{
    try {
        let fixture= await Fixtures.find()
        res.status(200).send(fixture)
        
    } catch (error) {
        res.status(400).send(error)
    }
   

})
  

module.exports = router