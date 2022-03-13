const mongoose=require('mongoose')
const DB=process.env.DATABASE
mongoose.connect(DB,{useNewUrlParser:true,}).then(()=>{
    console.log(`you are successfully conected to the database`);
}).catch((err)=>{
    console.log(err);
})

