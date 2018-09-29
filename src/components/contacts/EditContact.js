import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

export default class EditContact extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  async componentDidMount() {

    // note: this is how you get the param from the url i.e. /:id
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    })
  }

  onChange= e => this.setState( { [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // check for errors:

    if (name === '' ){
      this.setState({ errors: {name: "Name is required"}})
      return
    }

    if (email === '' ){
      this.setState({ errors: {email: "Email is required"}})
      return
    }

    if (phone === '' ){
      this.setState({ errors: {phone: "Phone is required"}})
      return
    }


    const updContact = {
      // This is es6 name: "name" syntax
      name,
      email,
      phone
    }
    const { id } = this.props.match.params;

    const res = await axios.put(`hlttps://jsonplaceholder.typicode.com/users/${id}`, updContact);


    dispatch({ type: 'UPDATE_CONTACT', payload: res.data })

    // Clear state after submit
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })
  }

  render() {
    const { name, email, phone, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
            <div className='card-header'> Edit Contact </div>
            <div className='card-body'>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
              <TextInputGroup
                label="Name"
                name = "name"
                placeholder = "Enter Name"
                value= {name}
                onChange = {this.onChange}
                error={errors.name}
              />

              <TextInputGroup
                label="Email"
                name = "email"
                type ="email"
                placeholder = "Enter Email"
                value= {email}
                onChange = {this.onChange}
                error = {errors.email}
              />

              <TextInputGroup
                label="Phone"
                name = "phone"
                placeholder = "Enter Phone"
                value= {phone}
                onChange = {this.onChange}
                error = {errors.phone}
              />

                <input
                  type="submit"
                  value="Update Contact"
                  className ="btn btn-light btn-block"
                />

              </form>
            </div>
              <h1> Update Contact </h1>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
