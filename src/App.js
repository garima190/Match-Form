import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Form1 from './components/Form1';
import Page1 from './components/Page1';
import Form3 from './components/Form3';
import Form2 from './components/Form2';
import Final from './components/Final';

function App() {
  const [showAddMatch, setShowMatch]=useState(false)
  const [matches, setMatches]=useState([])

  useEffect(()=>{
    const getMatches=async()=>{
      const matchesFromServer=await fetchMatches()
      setMatches(matchesFromServer)
    }
    getMatches()
  },[])

  const fetchMatches=async()=>{
    const res=await fetch('http://localhost:8000/matches')
    const data=await res.json()
    return data
  }
  const addMatch=async(match)=>{
    const res = await fetch('http://localhost:8000/matches',{
      method: 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(match),
    })
    const data=await res.json()
    setMatches([...matches, data])
   
 }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/Form1" element={<Form1/>}/>
          <Route path="/Form3" element={<Form3/>}/>
          <Route path="/Form2" element={<Form2/>}/>
          <Route path="/Final" element={<Final/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
