import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';

export default function Appfech(){
    let [data,setdata]=useState([])
    let [search,setsearch]=useState("")
    
    let navigate=useNavigate()
    
    

   useEffect(()=>{
   fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=245a20d1fc2994487a595b92153393b1&language=en-US")
    .then(x=>x.json()).then(x=> setdata(x.results)).catch(console.log("api is not working")
    )
},[])
   function moviesearch(){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=245a20d1fc2994487a595b92153393b1`).then(x=>x.json()).then(x=>setdata(x.results)).catch((e)=>console.log(e)
    )
   }
   console.log(data);
   
    return(<>
     <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>setsearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={moviesearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* carosal */}
    <Carousel>
    {data.map((x)=>{
        return(
            <div key={x.id}>
             <div style={{ width: '100%', height: '500px' }}>
                    <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}` } alt="bgimg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    <div className="legend">
                        <p>{x.title}</p>
                        <p>{x.overview}</p>
                        <p>{x.vote_average}</p>
                        </div>
                </div>
            </div>
        )
    })}
    </Carousel>
    {/* <Link to={location.key}> */}
   

    <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}} >
    {data.map((x)=>{
        return(
          
            <div key={x.id}>
                <Card style={{ width: '18rem',height:"500px", position:"relative", backgroundColor:"MintCream"}} >
               <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}` } />
             <Card.Body>
             <Card.Title>{x.title }</Card.Title>
                 <Card.Text>{x.overview}
                 </Card.Text>
               
                 <Button variant="primary" style={{position:"absolute",bottom:"15px",right:"20px"}} onClick={()=>navigate("/menu",{state:{x}})}>more details</Button>
                 {/* here we store x in the form of object because the state is null the return type on null is object so we use{} */}
                 
      </Card.Body>
    </Card>
            </div>   
        )
    })}
    </div>
    
    </>)
}

// 1ed258283209f2a94059223cf4c55468 this is my key