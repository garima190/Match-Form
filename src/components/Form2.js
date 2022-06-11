import React from 'react'

const Form2 = () => {
  return (
    <div>
        <h1>General for Tournament</h1>
        <input type="text" placeholder='Start Date & Time'></input>
        <input type="text" placeholder='End Date & Time'></input>
        <input type="text" placeholder='Match Location'></input>
        <input type="text" placeholder='Tournament Name'></input>
        <input type="text" placeholder='Comments'></input>
        <div className='bot'>
        <a className="button2" href="/">Back</a>
        <a className="button2" href="/Form3">Next</a>
        </div>
    </div>
  )
}

export default Form2