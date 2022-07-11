
import './App.css';
import React,{useState,useEffect}from 'react'
import axios from 'axios'
function App() {
  const [nom,setNom]=useState("") 
  const [prenom,setPrenom]=useState("") 
  const [age,setAge]=useState() 
  const [affiche,setAffiche]=useState([]) 
  const loadarticles=()=>{
    axios.get("http://localhost:3001/user")
    .then(res=>{ setAffiche(res.data)
    })
    .catch(err=>{
      console.log("data not found")
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("nom",event.nom);
    data.append("prenom",event.prenom);
    data.append("age",event.age);
  
     axios.post("http://localhost:3001/user", (data))
    .then(res=>console.log("succ"))
    .catch(err=>console.log("err"))

  }

  useEffect(()=>{
    loadarticles()
   },[])
  return (
    <div className="App">
      {affiche.map(el=>{
      return ( <><tr>
       
        <td>{el.nom}</td>
        <td>{el.prenom}</td>
        <td>{el.age}</td>
        </tr>
      
      </>
      )
    })}


    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="nom" value={nom} onChange={(e)=> setNom(e.target.value)}/>
        <input type="text" id="prenom" value={prenom} onChange={(e)=> setPrenom(e.target.value)}/>
        <input type="number" id="age" value={age} onChange={(e)=> setAge(e.target.value)}/>
        <button type="submit">ajout</button>
      </form>
    </div>
    </div>
  );
}

export default App;
