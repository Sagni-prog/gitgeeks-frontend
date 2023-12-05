import React from 'react'

const ChatBuble = () => {
  return (
    <div className='w-[100%] bubble-container flex flex-col  gap-3'>
        <div className='bubbles flex gap-[2%] px-6 py-3 cursor-pointer'>
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

        <div className='bubbles flex gap-[2%] px-6 py-3 cursor-pointer'>
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
                @Frontend Developer In light of new tasks and other items, I want to plan a meeting for sometime this week with everyone if that's possible. 

Items on the docket to go over: 
(For the new people) How our development process works and how to complete tasks
Reorganizing our folder structure; as the website grows, there will be many different routes that we will have to manage. The main one being our auth paths and root paths
Styling and how to approach recreating the Figma design - what colors to use and maybe some color tweaks (I noticed our primary doesn't exactly match)
It looks like Arsho restructured some of the pages under the UI documents so some of the tasks are old or will have to be restructured as well.

How does everyone's schedule look like this week or next week? Please list your available times in your own time zone and let's try to figure out a meeting time! Thanks guys.
                </p>
               </div>
            </div>

        </div>

        <div className='bubbles flex gap-[2%] px-6 py-3 cursor-pointer '>
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
