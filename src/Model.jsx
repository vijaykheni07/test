import React from 'react'

function Model({isvisible, onClose, children}) {
    if(!isvisible) return null

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
        <div className='w-auto flex flex-col'>
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>X</button>
            <div className='bg-white p-2 rounded items-center'>{children}</div>
        </div>
    </div>
  )
}

export default Model``