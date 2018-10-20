import React, { Component } from 'react';
import propTypes from 'prop-types'
import {Consumer} from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom'


class Contact extends Component {
  state = {
    showContactInfo: false
  }

  static propTypes = {
    contact: propTypes.object.isRequired,
  }

  onShowClick = () => {
    this.setState({showContactInfo: !this.state.showContactInfo });
  }

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

    dispatch({
      type: 'DELETE_CONTACT', payload: id
    });
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name + " "}

                <i
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                  onClick={this.onShowClick}
                />
                <i
                  className="fas fa-times"
                  style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: '#321777'
                    }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />

                <Link to={`contact/edit/${id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        curser: 'pointer',
                        float: 'right',
                        color: 'black',
                        marginRight: '1rem'
                      }}
                      ></i>
                </Link>

              </h4>
              { showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                  </ul>
                ) : null
              }
            </div>
          )
        }}

      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: propTypes.object.isRequired,
}

export default Contact;

