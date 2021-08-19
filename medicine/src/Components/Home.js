import React from 'react';
import Nav from './Navbar/nav';
import Works from './About/Works';
import About from './About/About';
import Doctors from './Our Doctors/Doctors';
import Service from './Our Services/Service';
import Purchase from './Purchase/purchase';
import Reviews from './carousel/carousel';
import Footer from './Footer/Footer';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function Home(){
    return(
        
<div>
       <Nav />
       <About />
       <Works />
       <Doctors />
       <Service/>
       <Purchase />
       <Reviews />
       <Footer />

       
</div>
    

            
    )
};
export default Home;