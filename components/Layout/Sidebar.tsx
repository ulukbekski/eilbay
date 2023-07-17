import React, { useState } from 'react';

import Drawer from '@mui/material/Drawer';

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
    flexShrink: 0,
    marginTop:1
    
  },
  drawerClosed:{
    width:0,
    transition: "0.7s",
    position: "relative",
    overflow: "hidden",
  },
  drawerPaper: {
    width: "100%",
    position: "static",
    transition: "1s"
  },
});

const Sidebar: React.FC<SidebarProps>= ({ isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <>
      <Drawer 
        anchor="left" 
        variant='persistent'
        className={isOpen?classes.drawer:classes.drawerClosed}
        open={isOpen} 
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper,
        }}> 
      <AccordionComponent categories={categories} />
      </Drawer>
    </>
  );
};

export default Sidebar;

