import React from 'react'

const NotFoundContact = () => {
  return (
    <div className="flex h-[80vh] gap-4 justify-center items-center">
        <div>
            <img src="contact.png"/>
        </div>
        
        <h3 className="text-white text-2xl font-semibold">No Results</h3>
    </div>
  )
}

export default NotFoundContact