import React, { Component } from 'react'
import axios from 'axios'

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
            <div className="d-flex">
                <div  class="form-container mx-auto">
                <p className="text-center d-block">Contactanos</p>

                <form action="#" >
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."
                        value={this.state.fname}
                        onChange={e => this.setState({ fname: e.target.value })}
                    />
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."
                        value={this.state.lname}
                        onChange={e => this.setState({ lname: e.target.value })}
                    />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something.."
                        onChange={e => this.setState({ message: e.target.value })}
                        value={this.state.message}
                    >
                    </textarea>
                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

                    {/* DISPLAY MESSAGE WHEN IT SENDS CORRECTLY */}
                    <div>
                    {this.state.mailSent &&
                        <div>Thank you for contcting us.</div>
                    }
                    </div>

                </form >
                </div>
            </div>
        )
    }
}
