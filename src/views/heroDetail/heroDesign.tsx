import React, { useEffect, useState } from 'react'
import { Divider, Flex, Tag, Col, Row  } from 'antd';
import {heroProperty} from '@/wordList/heroMode'

export default function heroDesign(props) {

    return (
        <div>
            <h4>{props.statisticsInfo?.nickname} {props.statisticsInfo?.name}</h4>
            <Flex gap="4px 0" wrap="wrap" className='tagList'>
             
                { 
                props.statisticsInfo?.property?.map((item,index)=>{
                    return (<Tag color="#b3955a" key={index}><span>{heroProperty[item]}</span></Tag>)
                })
                }
              

            </Flex>
            <div className='info'>
                <Row className='skillInfo'>
                    <Col span={6}>技能描述</Col>
                    <Col span={18}>
                        {
                            props.skillList.map(item=>{
                                return (
                                    <img src={item.img} key={item.key_name} className='skillImg'/>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row className='complexity'>
                    <Col span={6}>难度</Col>
                    <Col span={18} style={{display:'flex'}}>
                        {
                            [null,null].map((val,ind)=>{
                               return <div className='progressDiv' key={ind}></div>
                            })
                        }
                        
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>胜率</Col>
                    <Col span={18}>
                         <span style={{color:'#816a47'}}>47.76%</span>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Ban率</Col>
                    <Col span={18}>
                         <span style={{color:'#ef2541'}}>22.84%</span>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>登场率</Col>
                    <Col span={18}>
                         <span style={{color:'#1db89d'}}>17.27%</span>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
