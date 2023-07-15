import React, { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import AccordionComponent from '../UI/Accordion';



// interface OffcanvasProps {
//   children: React.ReactNode;
// }

const Offcanvas = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(!open)}
        className={`relative  md:w-[48px]  min-w-[32px]  h-[28px] p-0`} >
            <div className={!open?"w-full h-[2px] bg-white absolute top-0 rounded ":"rotate-45 w-full h-[3px] bg-white absolute top-4 rounded"}></div>         
            <div className={!open?"w-3/5 h-[2px] bg-white absolute top-0 rounded bottom-0 m-auto left-0 ":"hidden"}></div>
            <div className={!open?"w-full h-[2px] bg-white absolute bottom-0  rounded":"-rotate-45 w-full h-[3px] bg-white absolute top-4 rounded"}></div>
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <AccordionComponent
            categories={[
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
            ]}
            />
      </Drawer>
    </>
  );
};

export default Offcanvas;

