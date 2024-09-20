import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {heroPostionImg} from '@/wordList/heroMode'

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


export default function swiper(props) {
 
  let locationData = useLocation()
  let searchData = queryString.parse(locationData.search)
  useEffect(() => {


  }, [])
  return (
    <div className='swiperMain'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          props.imgList.map(item => {
            return (
              <SwiperSlide key={item.id} >
                <img src={item.img} alt="" className='swiperItemImg' />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div className='positionBox'>
        {/* <img src={topImg} alt="" /> */}
        {
          props.statisticsInfo?.position?.map((item,index)=>{
            return (<img src={heroPostionImg[item]} alt="" key={index}/>)
          })
        }
      </div>

    </div>

  )
}
