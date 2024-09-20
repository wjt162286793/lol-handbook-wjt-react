import React, { useEffect, useState } from 'react'
import './index.less'
import { Input, Radio, Col, Row } from 'antd';
import { getEquirementList } from '../../api/equipmentMode'
const { Search } = Input;

export default function index() {

    const onSearch = () => {

    }
    const onChange = () => {

    }

    let [equipmentList, changeEquipmentList] = useState([])

    useEffect(() => {
        getEquirementList().then(res => {
            console.log('装备列表', res)
            changeEquipmentList(res.data)
        })
    }, [])

    return (
        <div className='equipmentMainBox'>
            <h4>装备</h4>
            <div className='searchBox'>
                <Search placeholder="搜索" onSearch={onSearch} style={{ width: 200 }} />
                <div className='searchItem'>
                    <Radio.Group onChange={onChange} defaultValue="all">
                        <Radio.Button value="all">全部</Radio.Button>
                        <Radio.Button value="normal">普通</Radio.Button>
                        <Radio.Button value="epic">史诗</Radio.Button>
                        <Radio.Button value="legend">传说</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
            <ul className='equipmentList'>
                {equipmentList.map(item => {
                    return (
                        <li className='equipmentItem' key={item.id}>
                             <img src={item.img_url} alt="" />
                             <span className='label'>{item.name}</span>
                             <span className='price'>{item.price}</span>
                        </li>
                        
                    )
                })}

            </ul>
        </div>
    )
}
