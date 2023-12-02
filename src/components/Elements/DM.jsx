import React from 'react'

const DM = () => {
  return (
    <div className='flex flex-col justify-start items-start content-center w-[85%] mt-6'>
      <h1>DIRECT MESSAGES</h1>
      <div className='flex flex-col mt-4 ml-2 gap-3 color-secondary'>
            <div className='flex gap-5 cursor-pointer'>
                <div className='bg-secondary  profile cursor-pointer'>
                    <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                </div> 

                <div>
                  <p>Haylie Carter</p>
                </div> 
            </div>

            <div className='flex gap-5 cursor-pointer'>
                <div className='bg-secondary profile cursor-pointer'>
                    <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                </div> 

                <div>
                  <p>Mike Van</p>
                </div> 
            </div>

            <div className='flex gap-5 cursor-pointer'>
                <div className='bg-secondary profile cursor-pointer'>
                    <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                </div> 

                <div>
                  <p>Mike Van</p>
                </div> 
            </div>

            <div className='flex gap-5'>
                <div className='bg-secondary  profile cursor-pointer'>
                    <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                </div> 

                <div>
                  <p>Haylie Carter</p>
                </div> 
            </div>

        </div>
    </div>
  )
}

export default DM
