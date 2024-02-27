import React, { useEffect, useState } from 'react'
import '../Style/Today.css'



const Today = () => {

  const [isOpem, setIsOpen] = useState(false);
  const [currentDate , setCurrenDate] = useState(new Date());

  

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrenDate(new Date());
    },1000);


    return () => clearInterval(intervalId);
  })

  return (
    <div className='Today'>
      <p>Weather and Time</p> <br></br>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  )
}

export default Today;