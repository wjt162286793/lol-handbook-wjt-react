import React , { useState } from 'react'

  import type { MenuProps } from 'antd';
  import { Button, Menu } from 'antd';
import logoImg from '../../../assets/leftNav/logo-lol.webp'
import './index.less'

import Gonglve from '../../../assets/leftNav/gonglve.svg'
import Paiwei from '../../../assets/leftNav/paiwei.svg'
import Hero from '../../../assets/leftNav/hero.svg'
import Zhuangbei from '../../../assets/leftNav/zhuangbei.svg'
import {useNavigate} from 'react-router-dom'



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
getItem('精品攻略', 'strategy', <img src={Gonglve} alt="" /> ),
getItem('峡谷排位', 'grid', <img src={Paiwei} alt="" /> ),
getItem('英雄列表', 'heroList', <img src={Hero} alt="" /> ),
getItem('装备列表','equipmentList',<img src={Zhuangbei} alt="" />)
];



export default function index() {
  const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const clickItemHandler = (item)=>{
      console.log(item,'点击菜单')
      navigate(`/dashboard/${item.key}`)
    }
  return (
    <div className='left_box'>
      <img className='logoImg' src={logoImg} alt="" />
      <div className='menuBox'>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={['strategy']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={clickItemHandler}
      />
    </div>
    </div>
  )
}
