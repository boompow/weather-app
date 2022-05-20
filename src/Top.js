import React from 'react';

const Top = ({city, setCity, country, err, temp, cloud, description}) => {
  return (
    <div className='Top'>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text" 
                id='input'
                required
                placeholder='City'
                value={city}
                autoFocus
                onChange={(e) => setCity(e.target.value)}
            />
        </form>
        <p className='country'>{!err? country: ''}</p>
        <h1 className="temp">{!err? Number(temp).toFixed(2): ''} &#8451;</h1>
        <h3 className="main">{!err? cloud: ''}</h3>
        <p className="description">{!err? description: ''}</p>
    </div>
  )
}

export default Top