import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import './index.less'

import SwiperCom from './swiper'
import HeroDesign from './heroDesign'
import DetailCom from './detailCom'

import {getHeroSkillList,getHeroStatisticsDetail} from '@/api/heroMode'
import queryString from 'query-string';
import { getHeroDressList } from '@/api/heroMode'
export default function index() {
  const routeParams = useParams()
  const routeLocation = useLocation()
  const heroId = routeParams.id

  let [skillList,setSkill] = useState([])
  let [statisticsInfo,setStatisticsInfo] = useState(null)
  let [imgList, setImgList] = useState([])
  let locationData = useLocation()
  let searchData = queryString.parse(locationData.search)
  

  useEffect(()=>{      
      getHeroSkillList({id:searchData.id}).then(res=>{
          setSkill(res.data)
      })
      getHeroStatisticsDetail({id:searchData.id}).then(res=>{
          setStatisticsInfo(res.data)
      })
      getHeroDressList({ id: searchData.id }).then(res => {
        setImgList(res.data)
      })
  },[])
  return (
    <div className='heroDetailBox'>
        <div className='leftBox'>
          <div className='swiperBox'>
             <SwiperCom imgList={imgList} statisticsInfo={statisticsInfo}></SwiperCom>
          </div>
          <div className='designBox'>
             <HeroDesign statisticsInfo={statisticsInfo} skillList={skillList}></HeroDesign>
          </div>
        </div>
        <div className='rightBox'>
          <DetailCom></DetailCom>
        </div>
    </div>
  )
}

