import React,{useState}from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Axios from 'axios';
import {Button, Paper,Typography} from '@mui/material'
import { Link } from 'react-router-dom';
const  AddFixture = () => {
    const initial_state={firstplayer:"",secondplayer:"",court:"",winner:"",date:""}
    const [Fixture, setFixture] = useState(initial_state)
    const [fixtures, setfixtures] = useState([])
    let name,value
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name
        value=e.target.value
        setFixture({...Fixture,[name]:value})
    }
    const Postdata=(e)=>{
        e.preventDefault()
        console.log(e);
        const{firstplayer,secondplayer,court,winner,date}=Fixture
        Axios.post('http://localhost:8080/auth/fixture',{firstplayer,secondplayer,court,winner,date})
        .then((res)=>{
          window.alert("successfully Added a Fixture")
          setFixture(initial_state)
          setfixtures((prev)=>([...prev,res.data.response]))
           
          
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
<Typography variant='h5' color='rgb(92, 121, 153)' className='p-3 fw-bold'>TEST TT1</Typography>     <div><img src='https://static.toiimg.com/photo/msid-74595186/74595186.jpg' className='p-1' style={{height:130}}/ ></div></Paper>
<Typography variant='h4' className='d-flex my-4'>Add Fixture</Typography>
     <form action='POST' className='mb-5'>
     <div className='container-fluid'>
      <div className='row'>
      <div className='col-6'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">First Player Name</label>
     <input type="text" className="form-control mb-3" name='firstplayer' value={Fixture.firstplayer} onChange={handleInputs} placeholder='First Player Name'/>
      </div>
      <div className='col-6'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Second Player Name</label>
     <input type="text" className="form-control mb-3" name='secondplayer'  value={Fixture.secondplayer} onChange={handleInputs} placeholder='Second Player Name'/>
     </div>
     </div>
     <div className='row'>
    <div className='col-2'>
    
    <label htmlFor="exampleInputEmail1" className="form-label d-flex">A1</label>
     <input type="text" className="form-control mb-3"  onChange={handleInputs} placeholder='A1'/>


    </div>
    <div className='col-2'>
    
    <label htmlFor="exampleInputEmail1" className="form-label d-flex">A2</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='A2'/>


    </div>
    <div className='col-2'>
    
    <label htmlFor="exampleInputEmail1" className="form-label d-flex">A3</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='A3'/>


    </div>
     
    <div className='col-2'>
    
    <label htmlFor="exampleInputEmail1" className="form-label d-flex">B1</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='B1'/>


    </div>
    <div className='col-2'>
    
    <label htmlFor="exampleInputEmail1" className="form-label d-flex">B2</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='B2'/>


    </div>
    <div className='col-2'>
    
    <label htmlFor="exampleInputEmail1" className="form-label d-flex">B3</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='B3'/>


    </div>
      
     </div>
     <div className='row'>
      <div className='col-4'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Top Player</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='Top Player'/>
      </div>
      <div className='col-4'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Bottom Player</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='Bottom Player'/>
     </div>
     <div className='col-4'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Winner</label>
     <input type="text" className="form-control mb-3" name='winner' value={Fixture.winner} onChange={handleInputs} placeholder='Winner'/>
     </div>
     </div>
     <div className='row'>
      <div className='col-4'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Type</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='Type'/>
      </div>
      <div className='col-4'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Court Name</label>
     <input type="text" className="form-control mb-3" name='court' value={Fixture.court} onChange={handleInputs} placeholder='Court Name'/>
     </div>
     <div className='col-4'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Round</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='Round'/>
     </div>
     </div>
     <div className='row'>
      <div className='col-4'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Date</label>
     <input type="date" className="form-control mb-3" name='date'value={Fixture.date} onChange={handleInputs} placeholder='Date'/>
      </div>
      <div className='col-4'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Start Time</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='Start Time'/>
     </div>
     <div className='col-4'>
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">End Time</label>
     <input type="text" className="form-control mb-3" onChange={handleInputs} placeholder='End Time'/>
     </div>
     </div>
     

     
     
     

         
      </div>
     <div className='d-flex '>
     <button type="submit"  className="btn  text-white mx-2" style={{backgroundColor:'rgb(57, 173, 133)'}} onClick={Postdata}>Submit</button>
     <button type='button' className='btn btn-danger '>Clear</button>
     </div>
     </form>
     <div>
    {fixtures.map((fixture,index)=>{
      return(
        <div>
          <table className="table table-bordered  table-striped" sx={{mb:4}}>
      <thead   >
    <tr >
       
      <th scope="col">First player</th>
      <th scope="col"> Second Player </th>
      <th scope="col">Winner</th>
      <th scope="col">Court</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{height:50}}>
       
      <td>{fixture.firstplayer }</td>
      <td>{fixture.secondplayer}</td>
      <td>{fixture.winner}</td>
      <td> { fixture.court}</td>

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

export default  AddFixture