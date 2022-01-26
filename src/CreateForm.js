import {useState} from 'react'
function CreateForm({postJob}){
    const [formData, setFormData] = useState({
        name:'',
        description: '',
        phone: '',
        client_id: '',
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postJob(formData)
    } 
    return(
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <label>
            Descirption:
            <input type="text" name="description" value={formData.description} onChange={handleChange}/>
            </label>
            <label>
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
            </label>
            <input onClick={()=> handleSubmit()}type="submit" value="Submit" />
        </form>
    )
}

export default CreateForm