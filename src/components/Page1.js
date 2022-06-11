import React from 'react'

const Page1 = () => {
  return (
    <div>
        <h1>Select Type</h1>
      <div className='box'>
      <label>
      <p>Match Type</p>
      <select id='drop'>
        <option value="text">Tournament</option>
        <option value="text">Friendly</option>
      </select>
      </label>
    </div>
    <div className='bott'>
    <a className="button1" href="./Form1">Next for Friendly</a>
    <a className="button1" href="./Form2">Nextfor Tournament</a>
    </div>
    </div>
  )
}

export default Page1