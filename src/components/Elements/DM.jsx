import React from 'react'

const DM = () => {
  return (
    <div className='flex flex-col justify-start items-start content-center w-[100%] mt-6 '>
      <h1 className='pl-[6%]'>DIRECT MESSAGES</h1>
      <div className='flex flex-col mt-1 w-[100%] h-[100%] color-secondary'>

            <div className='cursor-pointer channel'>
              <div className='ml-2 flex gap-5 pl-[8%] py-2'>
                <div className=' profile cursor-pointer'>
                    <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                </div> 

                <div>
                  <p>Haylie Carter</p>
                </div> 
              </div>  
            </div>

            <div className='cursor-pointer channel'>
              <div className='ml-2 flex gap-5 pl-[8%] py-2'>
                <div className='bg-secondary profile cursor-pointer'>
                    <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                </div> 

                <div>
                  <p>Mike Van</p>
                </div> 
              </div>  
            </div>

            <div className='cursor-pointer channel'>
              <div className='ml-2 flex gap-5 pl-[8%] py-2'>
                <div className='bg-secondary profile cursor-pointer'>
                    <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                </div> 

                <div>
                  <p>Mike Van</p>
                </div> 

              </div>
            </div>

            <div className='cursor-pointer channel'>
              <div className='ml-2 flex gap-5 pl-[8%] py-2'>
                <div className='bg-secondary  profile cursor-pointer'>
                    <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                </div> 

                <div>
                  <p>Haylie Carter</p>
                </div> 
              </div>  
            </div>

        </div>
    </div>
  )
}

export default DM
