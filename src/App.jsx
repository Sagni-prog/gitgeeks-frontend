import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)


  const getAuth = async(code) => {
      
    const data = await axios.post('https://gitgeeks.com/api/login/github',code,{
        headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json',
        }
     });


     console.log("data: ",data)
}

useEffect(() => {
  let code = "kvmk9ei94mc";
    
  getAuth(code);

}, []);

  return (
    <>
    
    </>
  )
}

export default App
