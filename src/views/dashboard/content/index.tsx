import React ,{useEffect}from 'react'
import img from '../../../assets/content/bg-dhjjc.webp'
import './index.less'
import { Outlet } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
// import routes from '../../../router/index'
// import { useRoutes} from 'react-router-dom'

export default function index() {

  
  // let info = useLocation()
  // console.log(info,'当前路由信息')
  // console.log(routes,'全部路由')
  // let childRenRoutes = routes.find(item=>item.name === 'dashboard')
  // const ElementRouter = useRoutes(childRenRoutes?.children)
  
  return (
    
    <div className='contentBox'>
        <img src={img} className='bgImg' alt="" />
        <div className='mainContent'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
