import { useEffect,useState } from "react";
import axios from "axios";

function Project() {
  const [projects,setProjects] = useState([]);

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/projects/")
    .then(res=>setProjects(res.data))
    .catch(err=>console.log(err));
  },[])
  return (
    <section>
      <h2>Projects</h2>
      {projects.map(p=>(
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Project
