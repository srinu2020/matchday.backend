import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Button, Paper,Typography} from '@mui/material'
import  Axios  from 'axios';
import { Link } from 'react-router-dom';
const  AddTournament = () => {
    const initial_state={tournamentname:"",abbreviation:"",startdate:"",enddate:"",image:"",court:""}
    const [Tournament, setTournament] = useState(initial_state)
    const [tournaments, settournaments] = useState([])
    let name,value;
    const handleInputs=(e)=>{
        
           name=e.target.name
           value=e.target.value
           setTournament({...Tournament,[name]:value})
    }
    console.log(name);
    const Postdata=(e)=>{
        e.preventDefault()
        console.log(e);
        const{tournamentname,abbreviation,startdate,enddate,image,court}=Tournament
        Axios.post('http://localhost:8080/auth/tournament',{tournamentname,abbreviation,startdate,enddate,image,court})
        .then((res)=>{
          window.alert("successfully Added a tournament")
          setTournament(initial_state)
          settournaments((prev)=>([...prev,res.data.response]))

           
          
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
<label for="exampleInputEmail1" className="form-label d-flex">Link</label>
<input type="text" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type to add link'/>
<label for="exampleInputEmail1" className="form-label d-flex">Save as</label>
<input type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Save as'/>
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
<Typography variant='h4' className='d-flex my-4'>Add Tournament</Typography>
     <form action='POST' className='mb-4'>
     <div className='container-fluid'>
      <div className='row'>
      <div className='col-6'>
      <label className="form-label d-flex">Tournament Name</label>
     <input type="text" className="form-control mb-3" name='tournamentname'  value={Tournament.tournamentname} onChange={handleInputs} placeholder='Tournament Name'/>
      </div>
      <div className='col-6'>
      <label className="form-label d-flex">Abbreviation</label>
     <input type="text" className="form-control mb-3" name='abbreviation' value={Tournament.abbreviation} onChange={handleInputs} placeholder='Abbreviation'/>
     </div>
     </div>
     <div className='row'>
      <div className='col-4'>
      <label className="form-label d-flex">Start Date</label>
     <input type="date" className="form-control mb-3" name='startdate' value={Tournament.startdate} onChange={handleInputs} placeholder='Start Date'/>
      </div>
      <div className='col-4'>
      <label className="form-label d-flex">End Date</label>
     <input type="date" className="form-control mb-3" name='enddate' value={Tournament.enddate} onChange={handleInputs} placeholder='End Date'/>
     </div>
     <div className='col-4'>
      <label className="form-label d-flex"> Choose Image</label>
     <input type="text" className="form-control mb-3" name='image' value={Tournament.image} onChange={handleInputs} placeholder='Add Image'/>
     </div>
     </div>
     <div className='row'>
      <div className='col-4'>
      <label className="form-label d-flex">Add Court</label>
     <input type="text" className="form-control mb-3" name='court' value={Tournament.court} onChange={handleInputs} placeholder='Add Court'/>
      </div>
      <div className='col-4'>
      <Typography className='d-flex ' >Selected Courts</Typography>
       <p className='text-start' style={{color:'GrayText'}}>No court Added</p>
     </div>
     </div>

         
      </div>
     <div className='d-flex '>
     <button type="submit"  className="btn  text-white mx-2" style={{backgroundColor:'rgb(57, 173, 133)'}} onClick={Postdata}>Submit</button>
     <button type='button' className='btn btn-danger '>Clear</button>
     </div>
     </form>
     <div>
    {tournaments.map((tournament,index)=>{
      return(
        <div>
          <table className="table table-bordered  table-striped" sx={{mb:4}}>
      <thead   >
    <tr >
       
      <th scope="col">Tournament name</th>
      <th scope="col"> Abbreviation </th>
      <th scope="col">court</th>
       
    </tr>
  </thead>
  <tbody>
    <tr style={{height:50}}>
       
      <td>{ tournament.tournamentname}</td>
      <td>{tournament.abbreviation}</td>
      <td>{tournament.court}</td>
       

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

export default  AddTournament