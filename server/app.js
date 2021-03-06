const express=require('express')
const dotenv=require('dotenv')
const  cors=require('cors')
const app=express()
const auth=require('./routers/auth.js')

dotenv.config({path:'./config.env'})
require('./db/conn')
 
 

const port=process.env.PORT
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/auth',auth)


  

 


 
app.listen(port,()=>{
console.log(`server is connected to ${port}`);
})