import React from 'react'
// import Child from './Child'
import {useNavigate} from 'react-router-dom';

const Parent = () => {
  const name = "Afra Siddiqui"
  const navigate = useNavigate()
  const passData = ()=>{
    navigate("/Child",{state: {name: name}})
  }
  return (
  <>
<h1>This is Home Page!!!!</h1>
<button onClick={passData}>Click me</button>
  </>
  )
}

export default Parent