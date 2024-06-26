import React from 'react'
import style from './task.module.css'

export default function Task({ data,dltitem, editbtn}) {
    return (
        <div>
            <ul>
                {data.map((value, i) => (
                    < div key={i} className={`${style.lit}`}>
                    <li  className='mb-3'>{value.task}</li>
                    <button className={`${style.editbtn} border-0 px-2 rounded-3`} onClick={()=>editbtn(value,i)}>Edit</button>
                    <button className={`${style.dltbtn} border-0 px-2 rounded-3 ms-2`} onClick={()=>dltitem(i)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
