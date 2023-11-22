import React from 'react';
import "./App.css";
import Sidebar from './sidebar';
import ResponsiveAppBar from './header';

function Main(){
  return <div className='Main'>
    <Sidebar/>
    <div className='header'>
      <ResponsiveAppBar/>
    </div>
  </div>;
}

export default Main;