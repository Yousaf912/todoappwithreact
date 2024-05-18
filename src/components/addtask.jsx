import React, { useState } from 'react'

export default function Addtask({ addtask }) {

  let [inptval, setinptval] = useState();
  let changehandler = (e) => {

    setinptval(e.target.value)
  }

  const sentitem = ()=>{
    addtask(inptval);
    setinptval("");
  }

  return (
    <div className='border-0 bg-white ms-lg-5 me-lg-5 d-md-flex flex-row justify-content-lg-between p-2 rounded-5'>
      <input type="text" placeholder='Type here ......' className='px-lg-5 py-2 border-0 ' onChange={changehandler} />
      <button className='border-0 bg-black text-white ms-lg-3 px-4 rounded-5' onClick={sentitem}>Add</button>
      <button className='border-0 bg-black text-white px-1 me-lg-4 rounded-5 px-2'> Delete All</button>
    </div>
  )
}
