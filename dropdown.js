import React,{useState} from 'react';


function Dropdown() {

    const [state, setstate] = useState(false);
    const showDropdown=()=>{
        setstate(true);
    }
    const hideDropdown=()=>{
        setstate(false);
    }
    return(
        <div className='Dropdown'>
            <div className='dropdown-menu' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                Temperature
                {state ?(<u1 className="Dropdown-list" onMouseEnter={showDropdown}>
                    <li>Temperature</li>
                    <li>Humidity</li> 
                    <li>CO2</li> 
                    <li>VOC</li>  
                </u1>):
                null}
            </div>
        </div>
    )
} 

export default Dropdown;