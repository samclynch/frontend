import {useState, useEffect} from 'react'
import Card from './Card'
import CreateForm from './CreateForm'
import './/App.css';


function App() {
  // get jobs
  const [jobs, setJobs] = useState([])
  const [clients, setClients] = useState([])
  useEffect(()=> {
      fetch("http://localhost:9292/jobs")
      .then((r) => r.json())
      .then(setJobs);
      fetch("http://localhost:9292/clients")
      .then((r) => r.json())
      .then(setClients);
  },[])
  const postJob = (job) => {
    fetch(`http://localhost:9292/jobs`, {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(job)
    })
    .then((r) => r.json())
    .then(newJob => {
      setJobs([newJob,...jobs])
    });
  }
  const patchJob = (job) => {
    fetch(`http://localhost:9292/jobs/${job.id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(job)
    })
    .then((r) => r.json())
    .then(data => setJobs(jobs.map(j=>{
      if(job.id === data.id){
        return data
      } else {
        return j
      }
    })))
  }
  const handleDelete = (id) =>{
    fetch(`http://localhost:9292/jobs/${id}`,{
      method: 'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{setJobs(jobs.filter(j=>j.id!==id))})
  }

  return (
    <div className="App">
      <div>
      <CreateForm postJob={postJob} clients={clients}/>
      {jobs.map(j => <Card job={j} patchJob={patchJob} handleDelete={handleDelete} key={`${j.id}${j.name}`}/>)}
      </div> 
    </div> 
  );
}

export default App;
