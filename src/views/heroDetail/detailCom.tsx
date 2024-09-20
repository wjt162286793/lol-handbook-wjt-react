import React from 'react'
import { Select, Radio } from 'antd';
import ContainerCom from './containerCom';

export default function detailCom() {
    const selectChange = ()=>{

    }
    const leftRadioChange = ()=>{

    }
    const rightRadioChange = ()=>{

    }
  return (
    <div className='detailComBox'>
      <img src="https://game.gtimg.cn/images/lol/act/img/guidetop/guide_3a2a3fff-0e45-4e43-971f-dd14c0bb578b.jpg" alt="" className='bgImg'/>
      <div className='detailInfoBox'>
         <h6>英雄详情</h6>
         <div className='formBox'>
    <Select
      defaultValue="1"
      style={{ width: 120 }}
      onChange={selectChange}
      options={[
        { value: '1', label: '召唤师峡谷' },
        { value: '2', label: '极地大乱斗' },
      ]}
    />
        <Radio.Group onChange={leftRadioChange} defaultValue="top" style={{margin:'0px 20px'}}>
          <Radio.Button value="top">上单</Radio.Button>
          <Radio.Button value="center">中路</Radio.Button>
        </Radio.Group>
        <Radio.Group onChange={rightRadioChange} defaultValue="all">
          <Radio.Button value="all">总览</Radio.Button>
          <Radio.Button value="strategy">大神攻略</Radio.Button>
          <Radio.Button value="restrain">英雄克制</Radio.Button>
          <Radio.Button value="equip">装备推荐</Radio.Button>          
          <Radio.Button value="rune">符文推荐</Radio.Button>
          <Radio.Button value="data">数据曲线</Radio.Button>
          <Radio.Button value="dress">皮肤详情</Radio.Button>
        </Radio.Group>
      </div>

      <div className='containerBox'>
          <ContainerCom></ContainerCom>
      </div>
      </div>

    </div>
  )
}
