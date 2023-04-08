import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Page1 = () => {

  const [animal, setAnimal] = useState([]);
  const [user, setUser] = useState([]);
  const [italic, setItalic] = useState();
  const [border, setBorder] = useState();


  useEffect(() => {
    axios.get("https://bharathitask1.onrender.com/api/animals")
    .then((res) => {
      setAnimal(res.data.animals)
    })
    .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    axios.get("https://bharathitask1.onrender.com/api/profile")
    .then((res) => {
      setUser(res.data.user)
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <Container>
      <h2 className='text-center p-4 m-5'>Fall 2022 Assignment #1 for <Link to='/profile' >{user[0]?.name}</Link> from {user[0]?.country}</h2>
      <Row>
        <Col className='bg-light text-center border'>
          <h3 className='fw-bold p-2'>List of Zoo Animals</h3>
            <div className={italic}>
              <div className={border}>
              <p className='fs-5'>{animal[0]?.id}/ {animal[0]?.name} / {animal[0]?.species}</p>
              <p className='fs-5'>{animal[1]?.id}/ {animal[1]?.name} / {animal[1]?.species}</p>
              </div>
              <p className='fs-5'>{animal[2]?.id}/ {animal[2]?.name} / {animal[2]?.species}</p>
              <p className='fs-5'>{animal[3]?.id}/ {animal[3]?.name} / {animal[3]?.species}</p>
              <p className='fs-5'>{animal[4]?.id}/ {animal[4]?.name} / {animal[4]?.species}</p>
              <p className='fs-5'>{animal[5]?.id}/ {animal[5]?.name} / {animal[5]?.species}</p>



            </div>
          
        </Col>
        <Col className='d-flex flex-column gap-5 bg-primary pt-5 pb-5'>
        <button type="button" onClick={() => setItalic("fst-italic text-decoration-underline")} className="btn btn-secondary">Toggle left to italic & underline</button>
        <button type="button" onClick={() => setBorder("border border-danger")} className="btn btn-secondary">Toggle border on P tag with Mammal</button>
        <button type="button" onClick={() => setBorder("border border-success bg-danger")} className="btn btn-secondary">Change background color for class=Mammal</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Page1;