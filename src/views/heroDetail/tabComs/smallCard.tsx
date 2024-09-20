import React from 'react'
import { Card } from 'antd'

const getSkillList = (title)=>{
    const data = [['1','Q'],['2','E'],['3','W'],['4','Q'],['5','Q'],['6','R'],['7','Q'],['8','E'],[9,'Q'],['10','E'],['11','R'],['12','E'],['13','E'],['14','W'],['15','W']]
    if(title === '推荐技能加点'){
        return (
            <div className='skillList'>
                <ul>
                    {
                        data.map((item,index)=>{
                          return <li key={index}>{item[0]}</li>
                        })
                    }
                </ul>
                <ul>
                {
                        data.map((item,index)=>{
                          return <li key={index}>{item[1]}</li>
                        })
                    }
                </ul>
            </div>
            )
    }else{
        return <></>
    }

}

export default function smallCard(props) {
    const dataSrc = props.dataSrc
    const hasMarginRight = props.hasMarginRight
  return (
    <Card title={dataSrc.title.main} style={{ width: '100%', marginRight: hasMarginRight?20:0 }} className='positionCard'>
    <div className='positionText'>
    {dataSrc.title.minor[0]}&nbsp;&nbsp;&nbsp;&nbsp;{dataSrc.title.minor[1]}
    </div>
    {
        dataSrc.data.map((Item,Index)=>{
            return (
                <div className='equirementItem' key={Index}>
                <div className='itemLeft'>
                {
                        Item.equire.map((item,index)=>{
                            return (
                                <img src={item.url} key={index} alt={item.alt} />
                            )
                        })
                    }
                </div>
                <div className='itemRight'>
                    <span className='comeonSpan'>
                       {Item.comeOnSpan}
                    </span>
                    <span className='winSpan'>
                    {Item.winSpan}
                    </span>
                </div>
            </div>
            )
        })
    }
    <div>
        {
            getSkillList(dataSrc.title.main)
        }
    </div>
</Card>
  )
}
