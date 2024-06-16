import axios from 'axios';
const baseURL="http://localhost:5000"
const getAllToDo=(setToDo)=>{
    axios.get(baseURL).then(({data})=>{
        console.log('data---->',data);
        setToDo(data)
    })
}

const addToDo=(text,expiryDate,setText,setToDo)=>{

axios.post(`${baseURL}/save`,{text,expiryDate}).then((data)=>{console.log(data);setText("");getAllToDo(setToDo)}).catch((err)=>console.log(err))

}

const updateToDo=(toDoId,text,expiryDate,setToDo,setText,setIsUpdating)=>{

    axios.post(`${baseURL}/update`,{_id :toDoId,text,expiryDate}).then((data)=>{setText("");setIsUpdating(false);getAllToDo(setToDo)}).catch((err)=>console.log(err))
    
    }



    const deleteToDo=(_id,setToDo)=>{

        axios.post(`${baseURL}/delete`,{_id}).then((data)=>{console.log(data);getAllToDo(setToDo)}).catch((err)=>console.log(err))
        
        }

export { addToDo, deleteToDo, getAllToDo, updateToDo };

