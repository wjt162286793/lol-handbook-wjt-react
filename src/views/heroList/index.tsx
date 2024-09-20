import React ,{useEffect, useState} from 'react'
import './index.less'
import { Input, Radio, Col, Row } from 'antd';
const { Search } = Input;
import {cloneDeep} from 'lodash'
import topImg from '@/assets/heroList/top.svg'
import centerImg from '@/assets/heroList/center.svg'
import fenceImg from '@/assets/heroList/fence.svg'
import bottomImg from '@/assets/heroList/bottom.svg'
import assistImg from '@/assets/heroList/assist.svg'
import {useNavigate} from 'react-router-dom'
import { getHeroList } from '@/api/heroMode';


export default function index() {

const navigate = useNavigate()

  let positionMap = new Map()
positionMap.set('top',topImg)
positionMap.set('center',centerImg)
positionMap.set('fence',fenceImg)
positionMap.set('bottom',bottomImg)
positionMap.set('assist',assistImg)

  let [activeId,setActiveId] = useState(null)
  const onSearch = () => {

  }
  const onChange = () => {

  }
  const mouseHandler = (id)=>{
    setActiveId(id)
  }

  const getImgStyle = (id)=>{
        if(activeId === id){
          return {
            width:'220px'
          }
        }else{
          return {
            width:'200px'
          }
        }
  }

  const getBoxStyle = (id)=>{
    if(activeId === id){
      return {
        height:'270px',
      }
    }else{
      return {
        height:'270px'
      }
    }
  }

  const getItemStyle = (id) =>{
    if(activeId === id){
      return {
        transform:'translate(-10px,-20px)'
      }
    }else{
      return {
  
      }
    }
  }


  let [dataList,setDataList] = useState([])

  const clickItemHandler = (id)=>{
    console.log(id,'id的值')
    console.log('点击事件')
    navigate(`/dashboard/heroDetail?id=${id}`)
  }


  useEffect(()=>{
    getHeroList().then(res=>{
      console.log(res.data,'结果')
      setDataList(res.data)
    })
  },[])
  return (
    <div className='heroListBox'>
      <h4>英雄列表</h4>
      <div className='searchBox'>
        <Search placeholder="搜索"  onSearch={onSearch} style={{ width: 200}}/>
        <div className='searchItem'>
        <Radio.Group onChange={onChange} defaultValue="all">
          <Radio.Button value="all">全部位置</Radio.Button>
          <Radio.Button value="top">上单</Radio.Button>
          <Radio.Button value="fence">打野</Radio.Button>
          <Radio.Button value="center">中路</Radio.Button>
          <Radio.Button value="bottom">下路</Radio.Button>
          <Radio.Button value="assist">辅助</Radio.Button>
        </Radio.Group>
        </div>
        <div className='searchItem'>
        <Radio.Group onChange={onChange} defaultValue="all">
          <Radio.Button value="all">全部定位</Radio.Button>
          <Radio.Button value="warrior">战士</Radio.Button>
          <Radio.Button value="master">法师</Radio.Button>
          <Radio.Button value="assassin">刺客</Radio.Button>
          <Radio.Button value="tank">坦克</Radio.Button>
          <Radio.Button value="shooter">射手</Radio.Button>
          <Radio.Button value="assister">辅助</Radio.Button>
        </Radio.Group>
        </div>
      </div>
      <div className='heros'>
        <ul className='list'>
        {dataList.map(item=>{
          return (
            <li className='item' onMouseOver={()=>mouseHandler(item.id)} key={item.id} onMouseLeave={()=>mouseHandler(null)} style={getItemStyle(item.id)}
            onClick={()=>clickItemHandler(item.id)}>
              <div className='positionList'>
                {
                  item.position.map(v=>{
                    return (<img src={positionMap.get(v)} alt="" key={v}/>)
                    
                  })
                }
              </div>
            <div className='box' style={getBoxStyle(item.id)}>
            <img src={item.img} alt="" style={getImgStyle(item.id)}/>
            </div>
            <p>{item.nickname}</p>
          </li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}
