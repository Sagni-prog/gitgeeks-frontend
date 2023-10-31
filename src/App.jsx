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
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
     <img class="w-24 h-24 rounded-full mx-auto" src="../me.jpg" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-slate-300 font-sans Roboto text-lg ont-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class = "text-slate-50">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> 
    </>
  )
}

export default App
