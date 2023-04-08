import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import image from '../image/profile.jpg';
import { Link } from 'react-router-dom';


const Page2 = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://bharathitask1.onrender.com/api/profile")
    .then((res) => {
      setUser(res.data.user)
    })
    .catch((err) => console.log(err));
  }, [])


  return (
    <Container className='mt-5'>
      <h2 className='text-center'>My Name is {user[0]?.name}</h2>
      <h3 className='text-center text-primary'>My Sheridan Student Id is {user[0]?.studentId}</h3>
      <h4 className='text-center'>My Sheridan login is {user[0]?.login}</h4>
      <h5 className='text-center text-info'>My Sheridan program is {user[0]?.program}</h5>
      <h6 className='text-center'>My Home Country is {user[0]?.country}</h6>
      <img src={image} className="rounded-5 mx-auto d-block img-fluid" alt="Profile" />
      <div class="d-grid gap-2 col-6 mx-auto mt-4">
      <Link to='/' type="button" class="btn btn-secondary mx-auto mb-5">Go Back</Link>
      </div>
    </Container>
  )
}

export default Page2