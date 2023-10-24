import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormPageProducts from './FormPageProducts';

export default function FormPageResponsiveProducts() {
    const [open, setOpen] = useState(false);
    const [Icon, setIcon] = useState(KeyboardArrowDownIcon);
    const [IconText, setIconText] = useState("Show order summary");

  return (
    <div className='bg-gray-100'>
        <hr />
      <div
        onClick={() => {
            setOpen(!open);
            open
              ? setIcon(KeyboardArrowDownIcon) && setIconText("Show order summary")
              : setIcon(KeyboardArrowUpIcon) && setIconText("Hide order summary");
          }}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="cursor-pointer"
      >
        <div className='text-lg text-blue-900 pl-20 flex flex-row'>
        <ShoppingCartIcon className='mr-2' />
        <div className='mr-2'>
            {IconText}
        </div>
        <Icon />
        </div>
      </div>
        <hr />
      <Collapse in={open}>
        <div id="example-collapse-text">
          <FormPageProducts />
          <hr />
        </div>
      </Collapse>
    </div>
  )
}
