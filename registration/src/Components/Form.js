import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`NAME:-  ${this.state.firstName} \nLAST NAME:-  ${this.state.lastName} \nGENDER:-  ${this.state.gender} \nPASSWORD:-  ${this.state.password} \n\nRegistered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
        })
        window.location.reload();
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." required/><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." required/><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." required/><br />
                    <label>Gender :</label>   <select onChange={this.genderhandler} defaultValue="Select Gender"required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input id="submit" type="submit" value="Submit" />
                </form>

            </div>
           
            
        )
    }
}

export default Form
