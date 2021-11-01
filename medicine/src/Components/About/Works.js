import React from 'react';
import './About.css';


function Works(){
    return(<>
        <div className='Works'>
            <ul className='works'>
                <li className='lists'><i class="fas fa-clock  "></i></li>
                <li className='lists' ><i class="fas fa-envelope "></i></li>                
                <li className='lists'  ><i class="fas fa-map-marker-alt "></i></li>
            </ul>
            

        
            <ul className='works'>
                <li className='lists'>Mon - Sat
                <br />(0800 - 1700hrs)  </li>
                <li className='lists' ><a  className='a'href='mailto:glowwke@gmail.com'> glowwke@gmail.com </a></li>                
                <li className='lists' >KTDA PLAZA 5th Flr<br /> Ronald Ngala,Nairobi</li>
            
            </ul>
        </div>
      
        
    
        </>
    )

}
export default Works;