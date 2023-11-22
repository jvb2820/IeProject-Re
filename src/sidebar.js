import React from 'react';
import "./App.css";
import { SideBarData } from './sidebardata';

function Sidebar(){
    return <div className='Sidebar'>
        <h1 style={{ color: 'white'}}><center>STUDENT</center></h1>
        <ul className='SidebarList'>
        {SideBarData.map((val, key) => 
        {
            return (
                
                <li className='Row' id={window.location.pathname == val.link ? "active": ""} key={key} onClick={()=> {window.location.pathname = val.link}}>
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                </li>
        )
        })}
        </ul>
    </div>  
}

export default Sidebar;