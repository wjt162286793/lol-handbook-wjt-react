import React,{useEffect, useState}from 'react'
import { Chart } from "@antv/g2";
import './index.less'

export default function confront(props) {
    const renderCharts = ()=>{
        listData.forEach(item=>{
            renderChart(item)
        })
    }
    const renderChart = (item)=>{
        const chart = new Chart({ container: `item${item.id}`,theme: 'classicDark',height:30, padding:0 });
        chart.options({
            type: "view",
            width: 200,
            height: 70,
            coordinate: { transform: [{ type: "transpose" }] },
            interaction: { tooltip: false },
            children: [
              {
                type: "interval",
                data: [1, item.data / 100],
                encode: { y: (d) => d, color: (d, idx) => idx },
                scale: { y: { domain: [0, 1] }, color: { range: ["#202833", "#1db8ab"] } },
                axis: false,
                legend: false,
              },
              {
                type: "text",
                style: {
                  text: `${item.data}%`,
                  x: "20%",
                  y: "50%",
                  textAlign: "center",
                  fontSize: 16,
                  fontStyle: "bold",
                },
              },
            ],
          });
          
          chart.render();
    }


    useEffect(()=>{
        renderCharts()
    },[])

    let [listData,setListData] = useState([
        {
            label:'1',
            img:'//game.gtimg.cn/images/lol/act/img/champion/Udyr.png',
            data:53.99,
            id:'1'
        },
        {
            label:'2',
            img:'//game.gtimg.cn/images/lol/act/img/champion/Chogath.png',
            data:53.95,
            id:'2'
        },
        { 
            label:'3',
            img:'//game.gtimg.cn/images/lol/act/img/champion/Gangplank.png',
            data:52.99,
            id:'3'
        },
        { 
            label:'4',
            img:'//game.gtimg.cn/images/lol/act/img/champion/Yasuo.png',
            data:52.99,
            id:'4'
        },
        { 
            label:'5',
            img:'//game.gtimg.cn/images/lol/act/img/champion/Rumble.png',
            data:52.47,
            id:'5'
        }
    ])

    console.log(props)
  return (
    <ul className='confrontList'>
        {
            listData.map(Item=>{
                return (
                  <li className='confrontItem' key={Item.id}>
                    <span>
                        {Item.label}
                    </span>
                    <img src={Item.img} alt="" />
                    <div className='chartItem' id={`item${Item.id}`}>
                    </div>
                    <p>
                        查看详情
                    </p>
                  </li>
                )
            })
        }


    </ul>
  )
}
