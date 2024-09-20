import React, { useState } from 'react'

import All from './tabComs/all'

let comMap = new Map()
comMap.set('all', <All></All> )

export default function containerCom() {
    let [tabVal,setTabVal] = useState('all') 
    const getCom = ()=>{
          return comMap.get(tabVal)
    }
    return getCom()

}
