import React ,{useState}from 'react';
import { NavItems } from './Navitems';
import '../Navbar/Nav.css';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';



function Nav(){
    const [click,setClick]= useState(false);
    const handleClick =()=>setClick(!click)
    return(
        <div className='Nav'>
            <nav className='navbar navbar-light'>
                <div><h2>DOCTOR HERB  <i class="fas fa-leaf"></i></h2></div>
                <div>
                    <Dropdown className='hamburger'>
  <Dropdown.Toggle variant="success" bg='white' id="dropdown-basic">
  <i className="fas fa-bars"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {NavItems.map((item,id)=>{
                         return(
                            <Dropdown.Item > <Link to={item.path} className={item.cName}>
                            <li >{item.title}</li>
                       </Link></Dropdown.Item>
                           
                         )
                     }
                         )}
  </Dropdown.Menu>
</Dropdown>
</div>
               
               <div className='nav-items'>
                 <ul className='nav'>
                     {NavItems.map((item,id)=>{
                         return(
                            <Link to={item.path} className={item.cName}>
                                 <li >{item.title}</li>
                            </Link>
                         )
                     }
                         )}
                 </ul>
               </div>
            </nav>

        </div>
    )
}
export  default Nav;