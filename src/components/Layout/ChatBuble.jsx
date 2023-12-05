import React from 'react'

const ChatBuble = () => {
  return (
    <div className='bubble-container flex flex-col mx-6 gap-6'>
        <div className='bubbles flex gap-[2%]'>
            <div className='w-[10%] bg-secondary mb-6 bubble-img cursor-pointer'>
                <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border img' />
            </div>  
            
            <div className='w-[91%] flex flex-col text-left'>
               <div className='flex'>
                <div className='user-name mr-1'>Mike Von</div>
                <div className='date flex items-center color-secondary text-xs gap-1'>
                    <p>11/23/2023</p>
                    <p>9:45</p>
                    <p>PM</p>
                </div>
               </div>

               <div className='message-content'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, enim provident vero pariatur reprehenderit accusamus dolorem a odio molestias, exercitationem adipisci perferendis possimus aspernatur. Asperiores maxime facere amet natus aspernatur!
                </p>
               </div>
            </div>

        </div>

        <div className='bubbles flex gap-[2%]'>
            <div className='w-[10%] bg-secondary mb-6 bubble-img cursor-pointer'>
                <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border img' />
            </div>  
            
            <div className='w-[91%] flex flex-col text-left'>
               <div className='flex'>
                <div className='user-name mr-1'>Mike Von</div>
                <div className='date flex items-center color-secondary text-xs gap-1'>
                    <p>11/23/2023</p>
                    <p>9:45</p>
                    <p>PM</p>
                </div>
               </div>

               <div className='message-content'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, enim provident vero pariatur reprehenderit accusamus dolorem a odio molestias, exercitationem adipisci perferendis possimus aspernatur. Asperiores maxime facere amet natus aspernatur!
                </p>
               </div>
            </div>

        </div>

        <div className='bubbles flex gap-[2%]'>
            <div className='w-[10%] bg-secondary mb-6 bubble-img cursor-pointer'>
                <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border img' />
            </div>  
            
            <div className='w-[91%] flex flex-col text-left'>
               <div className='flex'>
                <div className='user-name mr-1'>Mike Von</div>
                <div className='date flex items-center color-secondary text-xs gap-1'>
                    <p>11/23/2023</p>
                    <p>9:45</p>
                    <p>PM</p>
                </div>
               </div>

               <div className='message-content'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, enim provident vero pariatur reprehenderit accusamus dolorem a odio molestias, exercitationem adipisci perferendis possimus aspernatur. Asperiores maxime facere amet natus aspernatur!
                </p>
               </div>
            </div>

        </div>
    </div>
  )
}

export default ChatBuble
