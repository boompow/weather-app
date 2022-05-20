import React from 'react'

const Error = ({error}) => {
  return (
    <div>
        {error? 
            <div className='error'>
                <h1>No Network</h1>
                <h3>Well that sucks!!!</h3>
                <button 
                  className='retry' 
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
                
            </div>: 
        <div></div>}
    </div>
  )
}

export default Error