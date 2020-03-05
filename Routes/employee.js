const express = require ('express');
const employeeRouter = express.Router();
const Employee = require('../model/Employee');

//CRUD


//read
employeeRouter.get('/', (req,res) => {
        Employee.find({}, (err, response) => {
            if (err)
            res.status(500).json({message:{
                msgBody: "Unable to get employees",
                msgError: true
            }});
            else 
            res.status(200).json(response);
        });
});

//create
employeeRouter.post('/', (req, res)=>{
    const employee = new Employee (req.body);
    employee.save((err, document) =>{
        if (err)
        res.status(500).json({message:{
            msgBody: "Unable to Add employees",
            msgError: true
        }});
        else 
        res.status(200).json({message:{
            msgBody:"Successfully Added Employees",
            msgError:false
        }});
    })
})

//delete

employeeRouter.delete('/:id', (req,res)=> {
    Employee.findByIdAndDelete(req.params.id, err=>{
        if(err)
        res.status(500).json({message:{
            msgBody: "Unable to Delete employees",
            msgError: true
        }});
        else 
        res.status(200).json({message:{
            msgBody:"Successfully Deleted Employees",
            msgError:false
        }});
    })
})


employeeRouter.put('/:id',(req,res => {
    Employee.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true}), (err, response)=> {
        if(err)
        res.status(500).json({message:{
            msgBody: "Unable to Update employees",
            msgError: true
        }}); 
        else 
        res.status(200).json({message:{
            msgBody:"Successfully update Employees",
            msgError:false
        }});
    }
}))

module.exports= employeeRouter;