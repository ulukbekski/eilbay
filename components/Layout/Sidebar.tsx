import React, { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import AccordionComponent from '../UI/Accordion';
import { makeStyles } from '@mui/styles';

const categories = [
  {
    name: 'Category 1',
  subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
},
{
  name: 'Category 2',
  subcategories: ['Subcategory 4', 'Subcategory 5', 'Subcategory 6'],
},
{
  name: 'Category 3',
  subcategories: ['Subcategory 7', 'Subcategory 8', 'Subcategory 9'],
},
]

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void; 
}

const useStyles = makeStyles({
  drawer: {
    transition: "1s",
    width: 300,
  },
  drawerClosed:{
    width:0,
    transition: "0.7s",
    position: "relative",
    overflow: "hidden",
  },
  drawerPaper: {
    width: "300px",
    top:0,
    left:0,
    transition: "1s",
    position:"static",
  },
});

const Sidebar: React.FC<SidebarProps>= ({ isOpen, onClose }) => {
  const classes = useStyles();


  return (
    <>
      <Drawer 
        anchor="left" 
        
        className={isOpen?classes.drawer:classes.drawerClosed}
        open={isOpen} 
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper,
        }}> 
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "8px" }}>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
      <AccordionComponent categories={categories} />
      </Drawer>
    </>
  );
};

export default Sidebar;

