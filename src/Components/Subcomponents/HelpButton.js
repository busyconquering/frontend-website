import React, { useState } from 'react'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Link } from "react-router-dom";

export default function HelpButton() {
  return (
    <div id='parent-container'>
      <Link to="/" className='text-white no-underline'>
    <div className='flex justify-center items-center bg-dark text-white pt-2 pb-2 pl-3 pr-3 rounded-3xl cursor-pointer'><span className='pr-2'><HelpOutlineOutlinedIcon /></span><span className='font-semibold pr-2'> Help</span></div>
    </Link>
    </div>
  )
}
