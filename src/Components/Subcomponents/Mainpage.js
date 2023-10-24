import React from 'react'
import MainPageNewsletter from './MainPageNewsletter'
import Mainpageproducts from './Mainpageproducts'
import Mainpageslider from './Mainpageslider'

export default function Mainpage(props) {
  return (
    <div>
      <Mainpageslider />
      <Mainpageproducts props={props.propsss} />
      <MainPageNewsletter />
    </div>
  )
}
