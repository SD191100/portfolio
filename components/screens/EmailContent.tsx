import React from 'react'

const EmailContent = () => {
  return (
    <form className=' h-full text-2xl'>
      <div className='my-3'><span className='text-neutral-400 mr-4'>To</span> shivamdurgude1@gmail.com</div>
      <hr className='bg-black dark:bg-white mb-10' />
      <div className='my-3 flex gap-3'>
        <span className='text-neutral-400'>Subject: </span> <input type="text" name="Subject" id="" className='w-full outline-none' placeholder='Your Subject Here' />
      </div>

      <hr className='bg-black dark:bg-white mb-10' />
      <div className='my-10 flex space-x-5'>
        <input type="text" className='border border-gray-800 w-full h-18 rounded-xl px-3 outline-none bg-gray-300  dark:bg-neutral-700 dark:placeholder-white' name='Name' placeholder='Name' />
        <input type="text" className='border border-gray-800 w-full h-18 rounded-xl px-3 outline-none bg-gray-300 dark:bg-neutral-700 dark:placeholder-white' name='email' placeholder='Email' />
      </div>
      <div className='my-10'>
        <textarea rows={40} className='border border-gray-800 w-full h-56 rounded-xl px-5 py-3 dark:placeholder-white outline-none bg-gray-300  dark:bg-neutral-700' name='email' placeholder='message' />
      </div>
      <button type='button' className='disabled w-full rounded-xl border border-gray-800 py-3 bg-gray-300 dark:bg-neutral-700'>Send</button>
    </form>

  )
}

export default EmailContent
