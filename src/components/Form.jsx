import React, { Component } from 'react';
import './Form.css'



class Form extends Component {

    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email:'',
            phoneNumber: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            email:'',
            phoneNumber: '',
        })

        console.log(this.state)
    }

    handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value,
    })
    console.log(this.state)
}

    render() { 

        return (
            <div className='create'>
               <h2>General Information</h2>
                <form onSubmit={this.onSubmit}>
                    <label>First Name</label>
                    <input type='text' id='firstName' onChange={this.handleChange} value={this.state.firstName}/>
                    <label>Last Name</label>
                    <input type='text' id='lastName' onChange={this.handleChange} value={this.state.lastName}/>
                    <label>Email Address</label>
                    <input type='text' id='email' onChange={this.handleChange} value={this.state.email}/>
                    <label>Phone Number</label>
                    <input type='number' min='1' id='phoneNumber' onChange={this.handleChange} value={this.state.phoneNumber}/>
                    <button>Submit</button>
                </form>

            </div>
        );
    }

}
 
export default Form;