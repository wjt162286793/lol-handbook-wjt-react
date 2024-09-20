import React, { useEffect, useState }from 'react'
import './index.less'
import { Chart } from '@antv/g2'

export default function chart(props) {
    let [chartData1, setChartData1] = useState([
        { version: '14.4', value: 0.25 },
        { version: '14.5', value: 0.22 },
        { version: '14.6', value: 0.20 },
        { version: '14.7', value: 0.16 },
        { version: '14.8', value: 0.15 },
        ])
         console.log(props,'???props')
        const renderChart1 = () => {
            const chart1 = new Chart({
                container: props.chartId,
                theme: 'classicDark',
                width:300
            });
            chart1.options({
                type: "view",
                autoFit: true,
                data: [
                  { year: "14.4", value: 0.25 },
                  { year: "14.5", value: 0.22 },
                  { year: "14.6", value: 0.2 },
                  { year: "14.7", value: 0.16 },
                  { year: "14.8", value: 0.15 },
                ],
                children: [
                  {
                    type: "area",
                    encode: { x: (d) => d.year, y: "value", shape: "area" },
                    style: { fill:'#3f4343' },
                    axis: { y: { labelFormatter: ".0%", title: "" },x: { labelFormatter: "", title: "版本" } },
                  },
                  { type: "line", encode: { x: "year", y: "value", shape: "line" } },
                ],
              });
              chart1.render();
        }
        useEffect(() => {
            renderChart1()
        }, [])
  return (
    <div className='chatItem' id={props.chartId}>
      
    </div>
  )
}
