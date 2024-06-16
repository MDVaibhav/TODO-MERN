const ToDoModel=require("../models/ToDoModel")
module.exports.getToDo=async(req,res)=>{
    const toDo=await ToDoModel.find()
res.send(toDo)
}
module.exports.saveToDo = async (req, res) => {
    try {
        const { text, expiryDate } = req.body;

       
        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        
        const newToDo = await ToDoModel.create({ text, expiryDate });

        console.log('Added Successfully....');
        console.log(newToDo);
        res.send(newToDo);
    } catch (err) {
        console.error('Error saving ToDo:', err);
        res.status(500).json({ error: 'Error saving ToDo' });
    }
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text, expiryDate } = req.body;
    ToDoModel.findByIdAndUpdate(_id, { text, expiryDate }).then(() => res.send("Updated Successfully.....")).catch((err) => console.log(err));
}

module.exports.deleteToDo=async(req,res)=>{
    const {_id}=req.body
    ToDoModel.findByIdAndDelete(_id).then(()=>res.send("Deleted Successfully.....")).catch((err)=>console.log(err))
}



