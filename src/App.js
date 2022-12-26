import React from 'react'
import './App.css';
import Sidebar from './Components/SideBarSection/Sidebar';
import Body from './Components/BodySection/Body';
function App() {
  return (
    <div className="container">
        <Sidebar/>
        <Body/>
    </div>
  )
}

export default App;
