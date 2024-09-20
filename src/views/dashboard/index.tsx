import React from 'react'
import LeftNav from './leftNav/index'
import TopNav from './topNav/index'
import Content from './content/index'
import './index.less'

export default function index() {
  return (
    <div className='dashboardBox'>
      <div className='leftNav'>
      <LeftNav></LeftNav>
      </div>
        <div className='rightBox'>
            <TopNav></TopNav>
            <Content></Content>
        </div>
    </div>
  )
}
