import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Filter1.css";

export default function Filter1(props) {
  const [open, setOpen] = useState(false);
  const [Icon, setIcon] = useState(KeyboardArrowDownIcon);
  const [open2, setOpen2] = useState(false);
  const [Icon2, setIcon2] = useState(KeyboardArrowDownIcon);
  const [open3, setOpen3] = useState(false);
  const [Icon3, setIcon3] = useState(KeyboardArrowDownIcon);
  const [open4, setOpen4] = useState(false);
  const [Icon4, setIcon4] = useState(KeyboardArrowDownIcon);
  const [open5, setOpen5] = useState(false);
  const [Icon5, setIcon5] = useState(KeyboardArrowDownIcon);

  return (
    <div className={`d-xl-inline d-xxl-inline text-black ${props.Filter1Parent}`}>


<hr />

<div className='text-md ml-4'>
      <div
        onClick={() => {setOpen(!open); open ? setIcon(KeyboardArrowDownIcon) : setIcon(KeyboardArrowUpIcon)}}
        aria-controls="example-collapse-text"
        aria-expanded={open} className="cursor-pointer flex flex-row"
      >

<div>
<Icon />
</div>
    <div className='ml-8'>PRODUCT TYPE</div>
      </div>
      <Collapse in={open} className="mt-2 mb-2 text-sm">
        <div id="example-collapse-text">
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" value={"Stiched"} className="mr-2" />
                <p className='mt-3 cursor-default'>Stiched</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" value={"Stiched"} className="mr-2 mb-3" />
                <p className='cursor-default'>Un-Stiched</p>
            </div>
        </div>
      </Collapse>
</div>

<hr />

<div className='text-md ml-4'>
      <div
        onClick={() => {setOpen2(!open2); open2 ? setIcon2(KeyboardArrowDownIcon) : setIcon2(KeyboardArrowUpIcon)}}
        aria-controls="example-collapse-text"
        aria-expanded={open2} className="cursor-pointer flex flex-row"
      >

<div>
<Icon2 />
</div>
    <div className='ml-8'>PRICE</div>
</div>
      <Collapse in={open2} className="mt-2 mb-2 text-sm">
        <div id="example-collapse-text">
          <input className='border-2 h-10 pl-3' type="number" placeholder='From' />
          <input className='border-2 h-10 pl-3' type="number" placeholder='To' />
        </div>
      </Collapse>
</div>

<hr />

<div className='text-md ml-4'>
      <div
        onClick={() => {setOpen3(!open3); open3 ? setIcon3(KeyboardArrowDownIcon) : setIcon3(KeyboardArrowUpIcon)}}
        aria-controls="example-collapse-text"
        aria-expanded={open3} className="cursor-pointer flex flex-row"
      >

    <Icon3 />
    <div className='ml-8'>SIZE</div>
</div>
      <Collapse in={open3} className="mt-2 mb-2 text-sm">
        <div id="example-collapse-text">
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2" />
                <p className='mt-3 cursor-default'>XS</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2 mb-3" />
                <p className='cursor-default'>S</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2 mb-3" />
                <p className='cursor-default'>M</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2 mb-3" />
                <p className='cursor-default'>L</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2 mb-3" />
                <p className='cursor-default'>XL</p>
            </div>
        </div>
      </Collapse>
</div>

<hr />

<div className='text-md ml-4'>
      <div
        onClick={() => {setOpen4(!open4); open4 ? setIcon4(KeyboardArrowDownIcon) : setIcon4(KeyboardArrowUpIcon)}}
        aria-controls="example-collapse-text"
        aria-expanded={open4} className="cursor-pointer flex flex-row"
      >

    <Icon4 />
    <div className='ml-8'>FABRIC TYPE</div>
</div>
      <Collapse in={open4} className="mt-2 mb-2 text-sm">
        <div id="example-collapse-text">
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2" />
                <p className='mt-3 cursor-default'>CHIFFON</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2 mb-3" />
                <p className='cursor-default'>KHADDAR</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2 mb-3" />
                <p className='cursor-default'>LAWN</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2 mb-3" />
                <p className='cursor-default'>NET</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" className="mr-2 mb-3" />
                <p className='cursor-default'>VELVET</p>
            </div>
        </div>
      </Collapse>
</div>

<hr />

<div className='text-md ml-4'>
      <div
        onClick={() => {setOpen5(!open5); open5 ? setIcon5(KeyboardArrowDownIcon) : setIcon5(KeyboardArrowUpIcon)}}
        aria-controls="example-collapse-text"
        aria-expanded={open5}
        className="cursor-pointer flex flex-row"
      >

<div>
<Icon5 />
</div>
    <div className='ml-8'>PIECES</div>
      </div>
      <Collapse in={open5} className="mt-2 mb-2 text-sm">
        <div id="example-collapse-text">
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" value={"Stiched"} className="mr-2" />
                <p className='mt-3 cursor-default'>2 Piece</p>
            </div>
            <div className='flex flex-row items-center ml-2'>
                <input type="checkbox" value={"Stiched"} className="mr-2 mb-3" />
                <p className='cursor-default'>3 Piece</p>
            </div>
        </div>
      </Collapse>
</div>

<hr />

    </div>
  );
}
