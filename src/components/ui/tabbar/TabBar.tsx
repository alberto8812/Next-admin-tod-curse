'use client'
import { setCookie } from 'cookies-next';
import React, { FC, useState } from 'react'



interface Props{
    curreinteTab?:number;
    tabOptions?:number[]
}


export const TabBar:FC <Props> = ({tabOptions=[1,2,3,4,5],curreinteTab=1}) => {
    const [selected, setSelected] = useState(curreinteTab)

    const onTapSelect=(tabNumber:number)=>{
        setSelected(tabNumber);
        setCookie('selectedTab',tabNumber.toString())
    }
  return (
        <div className={`grid w-full  space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-${tabOptions.length}`}>

            {
                tabOptions.map(item=>(
                    <div key={item}>
                        <input type="radio" id="1" className="peer hidden" checked={selected==item?true:false}
                         onChange={()=>{}}
                        />
                        <label 
                        className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                         onClick={()=>onTapSelect(item)}
                        >
                           {item}
                        </label>
                    </div>

                ))
            }
                  
        </div>
      )
  
}
