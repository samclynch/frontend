function Card({job, patchJob, handleDelete}){
      return(
          <div>
            <h3>Name: {job.name}</h3>
            <p>description: {job.description}</p>
            <p>Phone Number: {job.phone}</p>
            <p>Client ID:{job.client_id}</p>
            <button onClick={()=> patchJob(job)}>Complete Job</button> : <p>Job is done.</p>
            <button onClick={() => handleDelete(job.id)}>Delete Job</button>
          </div> 
        )
    }
    
    export default Card;