import React from 'react'
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom'
import { Container, Row, Col, Image } from 'react-bootstrap';

import '../styles.css'

class Footer extends React.Component {

  render() {

    return (
        
        <Container fluid="true" className="py-5  text-left" style={{backgroundColor: '#F9F8FF'}}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>

                        <h4 className="lineheightext">                     
                            Desarrolladora y comercializadora inmobiliaria
                            de Pablo Ariel Kowalski
                        </h4>

                        <h6 className="text-muted mt-3">
                            Matricula: 0052388 (Martillero público)
                        </h6>

                        <h6 className="text-muted">
                            Matricula: 022571 (Corredor inmobiliario)
                        </h6>

                        <h6 className="text-muted">
                            Matricula: 042573 (Corredor público)
                        </h6>

                    </Col>

                    <Col xs={6} md={6} className="">
                        <h4 className="lineheightext">      
                            Contactanos               
                        </h4>
                        
                        <h6 className="text-mute mt-3 my-auto">
                        <Image src="./images/telefono.svg" className=" pr-3" fluid />

                            Tel: 3584223221
                        </h6>

                        <h6 className="text-mute mt-5 pt-4 my-auto">
                        <Image src="./images/email.svg" className=" pr-3" fluid />

                            Mail: <a href="mailto:info@kowalski.com.ar">info@kowalski.com.ar</a>
                        </h6>
                    </Col>

                </Row>
            </Container>
        </Container>

    );
  }
  
}

export default Footer;