import React, { useState } from 'react'
import StudentResult from './StudentResult'
const StudentAdd = () => {
  const [classn, setClassn] = useState();
  const [year, setYear] = useState();
  const [section, setSection] = useState();
  const [roll, setRoll] = useState();
  const [regno, setRegno] = useState();
  const [name, setName] = useState();
  const [fname, setFname] = useState();
  const [mname, setMname] = useState();

  return (
    
    <>
    <div className='container flex flex-col justify-center items-center py-10'>
    <div className=''>
      <h1 className='flex justify-center text-4xl font-bold underline'>Student Info Add</h1>
     <form className='flex justify-center items-center flex-col'>
     <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 py-10'>
       <div className=''>
        <h1 className='font-semibold'>Class Name:</h1>
       <input className=' rounded-sm px-2 py-1 outline-none border-2 ' placeholder='Input Class' type="text" name="classn"  onChange={(e) => setClassn(e.target.value)}/>
       </div>
       <div className=''>
        <h1 className='font-semibold'>Year:</h1>
       <input className=' rounded-sm px-2 py-1 outline-none border-2 ' placeholder='Input Year' type="text" name="year"  onChange={(e) => setYear(e.target.value)} />
       </div>
       <div className=''>
        <h1 className='font-semibold'>Section:</h1>
       <input className=' rounded-sm px-2 py-1 outline-none border-2 ' placeholder='Input Section' type="text" name="section"  onChange={(e) => setSection(e.target.value)} />
       </div>
       <div className=''>
        <h1 className='font-semibold'>Roll:</h1>
       <input className=' rounded-sm px-2 py-1 outline-none border-2 ' placeholder='Input Roll' type="text" name="roll"  onChange={(e) => setRoll(e.target.value)}/>
       </div>
       <div className=''>
        <h1 className='font-semibold'>Reg: No:</h1>
       <input className=' rounded-sm px-2 py-1 outline-none border-2 ' placeholder='Input Reg: No' type="text" name="regno"  onChange={(e) => setRegno(e.target.value)}/>
       </div>
       <div className=''>
        <h1 className='font-semibold'>Name:</h1>
       <input className=' rounded-sm px-2 py-1 outline-none border-2 ' placeholder='Input Name' type="text" name="name"  onChange={(e) => setName(e.target.value)}/>
       </div>
       <div className=''>
        <h1 className='font-semibold'>Father Name:</h1>
       <input className=' rounded-sm px-2 py-1 outline-none border-2 ' placeholder='Input Father Name' type="text" name="fname"  onChange={(e) => setFname(e.target.value)}/>
       </div>
       <div className=''>
        <h1 className='font-semibold'>Mother Name:</h1>
       <input className=' rounded-sm px-2 py-1 outline-none border-2 ' placeholder='Input Mother Name' type="text" name="mname"  onChange={(e) => setMname(e.target.value)}/>
       </div>

       </div>
     </form>
    </div>
    </div>
    <StudentResult classn={classn} year={year} section={section} roll={roll} regno={regno} name={name} fname={fname} mname={mname} />
  </>)
}

export default StudentAdd