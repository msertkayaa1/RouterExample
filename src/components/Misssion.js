import React from 'react'
import { useNavigate } from 'react-router-dom'

function Misssion() {
    const navigate = useNavigate()

  return (
   
       <>
    <div>Home</div>
    <button onClick={()=>navigate('/')}>Geriye  dön</button>
    </>
  )
}

export default Misssion
