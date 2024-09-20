import React, { useEffect, useState } from 'react'
import { Card , Tabs } from 'antd';
import './index.less'
import Chart from './chart'
import Confront from './confront';
import SmallCard from './smallCard';
import {comeonData,mainData,shoeData,otherData} from './equireData'
import {globalSkill,selfSkill} from './skillData'
import {getHeroRelationRuneList} from '@/api/heroMode'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';

export default function all() {
    //路由信息
    let locationData = useLocation()
    let searchData = queryString.parse(locationData.search)

    
    const [activeTab,setActiveTab] = useState('1')
    const [relationRuneList,setRelationRuneList] = useState([])

    //点击切换标签
    const tabClickHandler = (value)=>{
        setActiveTab(value)
    }

    //根据当前状态设置样式类名
    const getActiveClassName = (flag)=>{
      if(activeTab === flag){
        return 'activeP'
      }else{
        return 'normalP'
      }
    }

    //生命周期
    useEffect(()=>{      

        //获取推荐符文信息
        getHeroRelationRuneList({id:searchData.id}).then(res=>{
            setRelationRuneList(res.data)
        })
    },[])


    return (
        <div className='allComBox'>
            <div className='allComLeftBox'>
                <Card title="符文推荐" style={{ width: 800, marginBottom: 30 }}>
                    

                        {
                          relationRuneList.map((Item)=>{
                              return (
                                <div className='allComRuneItem' key={Item.id}>
                                <ul className='mainRuneList' >
                              {
                                Item.map((item)=>{
                                    return (
                                        <li key={item.id}>
                                        <img src={item.img_url} alt="" />
                                        <span>{item.name}</span>
                                    </li>
                                    )
                                })
                              }
                            </ul>
                            <div className='comeOnBox'>
                            <p>{Item[0].come}</p>
                            <span>登场率</span>
                        </div>
                        <div className='winBox'>
                        <p>{Item[0].win}</p>
                            <span>胜率</span>
                        </div>
                            </div>
                              )
                          })
                        }
                </Card>
                <div className='equipmentBox'>
               <SmallCard dataSrc={comeonData} hasMarginRight={true}></SmallCard>
               <SmallCard dataSrc={mainData}></SmallCard>
                </div>
                <div className='equipmentBox'>
                <SmallCard dataSrc={shoeData} hasMarginRight={true}></SmallCard>
                <SmallCard dataSrc={otherData}></SmallCard>
                </div>
                <div className='flowChatBox'>
                    <Card title="登场率趋势" style={{  marginRight: 20 }}>
                        <Chart chartId='chart1'></Chart>
                    </Card>
                    <Card title="胜率随版本趋势">
                        <Chart chartId='chart2'></Chart>
                    </Card>
                </div>
                <div className='flowChatBox'>
                    <Card title="胜率随时间趋势" style={{marginRight: 20 }}>
                        <Chart chartId='chart3'></Chart>
                    </Card>
                    <Card title="胜率随场次趋势">
                        <Chart chartId='chart4'></Chart>
                    </Card>
                </div>

            </div>
            <div className='allComRightBox'>
                <div className='tabTop'>
                    <p className={getActiveClassName('1')} onClick={()=>tabClickHandler('1')}>优势对线</p>
                    <p className={getActiveClassName('2')} onClick={()=>tabClickHandler('2')}>劣势对线</p>
                </div>
                <div className='tabContent'>
                     <Confront tabVal={activeTab}></Confront>
                     <SmallCard dataSrc={globalSkill}></SmallCard>
                     <SmallCard dataSrc={selfSkill}></SmallCard>
                </div>
            </div>
        </div>
    )
}
