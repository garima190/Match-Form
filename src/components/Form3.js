import React from 'react'
import {useState} from 'react'

const Form3 = ({onAdd}) => {
  const [team1, setTeam1]=useState('')
  const [team2, setTeam2]=useState('')
  const [type, setType]=useState('')
  const [name, setName]=useState('')
  const [start, setStart]=useState('')
  const [end, setEnd]=useState('')
  const [loc, setLoc]=useState('')
  const [comments, setCommments]=useState('')


    const onSubmit=(e)=>{
        e.preventDefault()
        if(!team1){
            alert('Please add a match')
            return
        }
        if(!team2)
        {
          alert('Please add a match')
        }
        onAdd({team1, team2, type, name, start,end,loc,comments})
        setTeam1('')
        setTeam2('')
        setType('')
        setName('')
        setStart('')
        setEnd('')
        setLoc('')
        setCommments('')
    }
  return (
    <div>
    <h1>Teams</h1>
      <input id='n1' type="text" placeholder="Team 1 Name" value={team1}></input>
      <select id='t1' placeholder="Match Type">
        <option value="home">Home</option>
        <option value="away">Away</option>
      </select>
      <p>

      </p>
      <p>______________________________________________________________________________________________________VS____________________________________________________________________________________________________</p>
      <p>

      </p>
      <input id='n2' type="text" placeholder="Team 2 Name" value={team2}></input>
      <select id='t2' placeholder="Match Type">
        <option value="home">Home</option>
        <option value="away">Away</option>
      </select>
      <div className='bot1'>
        <a className="button2" href="/Form2">Back</a>
        <a className="button2" href="/Final">Submit</a>
      </div>
    </div>
  )
}

export default Form3