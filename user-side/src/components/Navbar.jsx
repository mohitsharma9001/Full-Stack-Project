import React from 'react'
import {AppBar,Toolbar,styled,} from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
 
    const Navbar = styled(AppBar)`
    background : #111111;

    `
    const Tabs = styled(NavLink)`
    margin-left : 20px;
    color : white;
    font-size : 20px;
    text-decoration : none;
    `
  return (
    <div style={{display : "flex"}}>
        <Navbar position='static' >
            <Toolbar>
                <Tabs to="/all">All User</Tabs>
                <Tabs to="/add">Add User</Tabs>
              
        </Toolbar>
            
        </Navbar>
    </div>
  )
}
