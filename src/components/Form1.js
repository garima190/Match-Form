import React from 'react'

const Form1 = () => {
  return (
    <div>
        <h1>General For Friendly Match</h1>
        <input type="text" placeholder='Start Date & Time'></input>
        <br></br>
        <input type="text" placeholder='End Date & Time'></input>
        <br></br>
        <input type="text" placeholder='Match Location'></input>
        <br></br>
        <input type="text" placeholder='Comments'></input>
        <br></br>
        <div className='bot'>
        <a className="button2" href="/">Back</a>
        <a className="button2" href="/Form3">Next</a>
        </div>
    </div>
  )
}

export default Form1