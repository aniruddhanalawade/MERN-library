import React, { useState } from 'react'
import {AppBar,Tab,Toolbar,Typography, Tabs} from '@mui/material';
import { NavLink } from 'react-router-dom';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'

const Header = () => {

  const [value,setValue] = useState();

  return (
    <>
    <AppBar sx={{backgroundColor: '#6B5B95'}} position='sticky'>

        <Toolbar>
          <Typography>
            <LibraryBooksOutlinedIcon/>
          </Typography>

          <Tabs sx={{m:'auto'}} 
          textColor={'white'} 
          value={value}
          onChange={(e,val) => setValue(val)} >

            <Tab LinkComponent={NavLink} to='/add' label='Add Book'/>
            <Tab LinkComponent={NavLink} to='/books' label='Books'/>
            <Tab LinkComponent={NavLink} to='/MERN library' label='Home'/>
            <Tab LinkComponent={NavLink} to='/about' label='About'/>
          </Tabs>
        </Toolbar>
    </AppBar>
    
    
    </>
  )
}

export default Header