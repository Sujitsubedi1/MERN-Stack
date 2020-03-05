import React, { Component } from 'react';
import Input from './Input'
const Form =(props)=>{
        return (
            <form onSubmit={props.handler}>
                <h4> {props.isEditForm ? "Editing Employee:" : "Add Employee :"}</h4>
  <div className="form-group"> 
  <Input name ="firstName"
        placeholder = "Enter First Name"
        labelName = "First Name:"
        handleChange = {props.handlerChange}
        value = {props.employee.firstName} />

<Input name ="lastName"
        placeholder = "Enter Last Name"
        labelName = "Last Name:"
        handleChange = {props.handlerChange}
        value = {props.employee.lastName} />

<Input name ="job"
        placeholder = "Enter Job"
        labelName = "Job:"
        handleChange = {props.handlerChange}
        value = {props.employee.job} />

<Input name ="Salary"
        placeholder = "Enter salary"
        labelName = "Salary:"
        handleChange = {props.handlerChange}
        value = {props.employee.salary} />

  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        )
}

export default Form;