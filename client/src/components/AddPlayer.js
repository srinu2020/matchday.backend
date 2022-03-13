import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Button, Paper,Typography} from '@mui/material'
import Axios from 'axios'
import { Link } from 'react-router-dom';
const  AddPlayer = () => {

   const initial_state={name:"",country:"",city:"",image:"",email:"",handedness:"",academy:"",date:"",type:"",phoneNumber:""}
   const [players, setplayers] = useState([])
    const [Player, setPlayer] = useState(initial_state)
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name
        value=e.target.value
        setPlayer({...Player,[name]:value})
    }
    const Postdata=(e)=>{
        e.preventDefault()
        console.log(e);
        const{name,country,city,image,email,handedness,academy,date,type,phoneNumber}=Player
        Axios.post('http://localhost:8080/auth/players',{name,country,city,image,email,handedness,academy,date,type,phoneNumber})
        .then((res)=>{
          window.alert("successfully Added a player")
          setPlayer(initial_state)
         setplayers((prev)=>([...prev,res.data.response] ))
           
           
          
        }).catch((err)=>{
          console.log(err);
        })
      }
     
    
  return (
     <>
         <div>

         <Paper sx={{height:60,width:1,display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',backgroundColor:'rgb(57, 173, 133)'}} elevation={3}> 
      <div className='d-flex'><img src='./matchday.png'></img></div>
      <Typography variant='h6' color='white'>Hi admin!!(Admin)</Typography>
       <div className='text-white '>
           <HomeIcon className='mx-2'/>
           <NotificationsActiveIcon className='mx-2'/>
           <PersonIcon className='mx-2'/>
       </div>
      </Paper>
         </div>
        <div className='container-fluid'>
        <div className="row">
    <div className="col-3">
    <div className='d-flex mt-1 flex-column flex-shrink-0 p-3 bg-light border-end' style={{width:280}}>
<ul className='nav nav-pills flex-column mb-auto'>
    <li className='nav-item'>
        <Link to="#" className=' text-decoration-none '  >
         <Button  sx={{ color:'black', width:'100%','&:hover':{backgroundColor:'rgb(57, 173, 133)',color:'white'}}}>All Academics</Button>
        </Link>
    </li>
    <li className='nav-item'>
        <Link to="/"  className=' text-decoration-none ' >
        <Button sx={{ color:'black', width:'100%','&:hover':{backgroundColor:'rgb(57, 173, 133)',color:'white'}}}>Add/Edit Players</Button>
        </Link>
    </li>
    <li className='nav-item'>
        <Link to="/tournament" className='text-decoration-none'  >
         <Button sx={{ color:'black', width:'100%','&:hover':{backgroundColor:'rgb(57, 173, 133)',color:'white'}}}>Add/Edit Tournaments</Button>
        </Link>
    </li>
    <li className='nav-item'>
        <Link to="/fixture" className=' text-decoration-none '  >
         <Button  sx={{ color:'black', width:'100%','&:hover':{backgroundColor:'rgb(57, 173, 133)',color:'white'}}}>Add/Edit Fixtures</Button>
        </Link>
    </li>
    <li className='border-top my-4'></li>
</ul>
<Typography className='d-flex mb-3'>Quick Links</Typography>
<form>
<div className="mb-3">
<label   className="form-label d-flex">Link</label>
<input type="text"  className="form-control mb-3"  placeholder='Type to add link'/>
<label   className="form-label d-flex">Save as</label>
<input type="email" className="form-control mb-3"  placeholder='Save as'/>
<button type="button"  className="btn d-flex text-white" style={{backgroundColor:'rgb(57, 173, 133)'}}>Submit</button>
<textarea className="form-control mt-3 " rows='4'  placeholder="No Quick Links inserted" id="floatingTextarea"  ></textarea>
<button type='button' className='btn btn-danger mt-5'>Logout</button>
<hr/>

</div>
</form>

</div>
    </div>
    <div className="col-8 mt-3">
    <Paper sx={{height:130,width:'auto',display:'flex',flexWrap:'wrap',backgroundColor:'light' ,justifyContent:'space-between'}} elevation={3}>
<Typography variant='h5' color='rgb(92, 121, 153)' className='p-3 fw-bold text-uppercase'>Test Academy</Typography>     <div><img src='https://static.toiimg.com/photo/msid-74595186/74595186.jpg' className='p-1' style={{height:130}}/ ></div></Paper>
<Typography variant='h4' className='d-flex my-4'>Add Player</Typography>
     <form action="POST" className='mb-5'  >
     <div className='container-fluid'>
      <div className='row'>
      <div className='col-4'>
      <label   className="form-label d-flex">Player Name</label>
     <input type="text" className="form-control mb-3" name='name' value={Player.name}  autoComplete='off' onChange={handleInputs} placeholder='Player Name'/>
     <label   className="form-label d-flex">Select a country</label>
     <input type="text" className="form-control mb-3" name='country' value={Player.country} autoComplete='off' onChange={handleInputs} placeholder='Select Country'/>
     <label   className="form-label d-flex">city</label>
     <input type="text" className="form-control mb-3" name='city' value={Player.city} autoComplete='off' onChange={handleInputs} placeholder='city'/>
     <label   className="form-label d-flex">Emails</label>
     <input type="email" className="form-control mb-3" name='email' value={Player.email} autoComplete='off' onChange={handleInputs} placeholder='Add Email'/>
      </div>
      <div className='col-4'>
      <label   className="form-label d-flex">choose Image</label>
     <input type="text" className="form-control mb-3" name='image' value={Player.image} autoComplete='off' onChange={handleInputs} placeholder='Add image'/>
     <label   className="form-label d-flex">Handedness</label>
     <input type="text" className="form-control mb-3" name='handedness' value={Player.handedness} autoComplete='off' onChange={handleInputs} placeholder='Left or Right'/>
     <label   className="form-label d-flex">Academy</label>
     <input type="text" className="form-control mb-3" name='academy' value={Player.academy} autoComplete='off' onChange={handleInputs} placeholder='Academy'/>
     <Typography className='d-flex  ' >Selected Emails</Typography>
       <p className='text-start' style={{color:'GrayText'}}>No email selected</p>
  
      </div>
      <div className='col-4'>
      <label   className="form-label d-flex">Date</label>
     <input type="date" className="form-control mb-3"   name='date' value={Player.date} autoComplete='off' onChange={handleInputs} placeholder='Date'/>
     <label   className="form-label d-flex">Type</label>
     <input type="text" className="form-control mb-3" name='type' value={Player.type} autoComplete='off' onChange={handleInputs} placeholder='Type'/>
     <label   className="form-label d-flex">Phone Number</label>
     <input type="number" className="form-control mb-3" name='PhoneNumber' value={Player.phoneNumber} autoComplete='off' onChange={handleInputs} placeholder='Phone Number'/>
      </div>

      </div>

         
      </div>
     <div className='d-flex '>
     <button type="submit"  className="btn  text-white mx-2" style={{backgroundColor:'rgb(57, 173, 133)'}} onClick={Postdata}>Submit</button>
     <button type='button' className='btn btn-danger '>Clear</button>
     </div>
     </form>
     <div >
    {players.map((player,index)=>{
      return(
           <div>
          <table className="table table-bordered  table-striped" sx={{mb:4}}>
      <thead   >
    <tr >
       
      <th scope="col">name</th>
      <th scope="col"> country </th>
      <th scope="col">city</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{height:50}}>
       
      <td>{player.name}</td>
      <td>{player.country}</td>
      <td>{player.city}</td>
      <td> {player.email}</td>

    </tr>
    </tbody>
    </table>
         </div>
      )
    })}
    </div>
    </div>
    
     
  </div>
  
        </div>
         

     </>
  )
}

export default  AddPlayer

