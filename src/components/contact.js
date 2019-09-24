import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Image } from 'react-bootstrap';

const API_PATH = '/components/index.php';

export default class contact extends Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        message: '',
      }

      handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };

    render() {
        return (
            <div className="d-flex ">
                <div  class="form-container mx-auto">

                <form action="#" >
                    <label htmlFor="fname">Nombre</label>
                    <input type="text" id="fname" name="firstname" placeholder="Nombre"
                        value={this.state.fname}
                        onChange={e => this.setState({ fname: e.target.value })}
                    />
                    <label htmlFor="lname">Apellido</label>
                    <input type="text" id="lname" name="lastname" placeholder="Apellido"
                        value={this.state.lname}
                        onChange={e => this.setState({ lname: e.target.value })}
                    />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />

                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" placeholder="Que te interesa?"
                        onChange={e => this.setState({ message: e.target.value })}
                        value={this.state.message}
                    >
                    </textarea>
                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

                    {/* DISPLAY MESSAGE WHEN IT SENDS CORRECTLY */}
                    <div>
                    {this.state.mailSent &&
                        <div>Thank you for contacting us.</div>
                    }
                    </div>

                </form >
                </div>
            </div>
        )
    }
}
