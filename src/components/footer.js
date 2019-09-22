import React from 'react'
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css'

class Footer extends React.Component {

  render() {

    return (
        
        <Container fluid="true" className="py-5 text-left" style={{backgroundColor: '#F9F8FF'}}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>

                        <h4>                     
                            Desarrolladora y comercializadora inmobiliaria
                            de Pablo Ariel Kowalski
                        </h4>

                        <h6 className="text-muted">
                            Matricula: 0052388 (Martillero público)<br />
                            Matricula: 022571 (Corredor inmobiliario)<br />
                            Matricula: 042573 (Corredor público)
                        </h6>

                    </Col>

                    <Col xs={6} md={6}>
                        <h4>      
                            Contactanos               
                        </h4>

                        <h6 className="text-muted">
                            Teléfono de Contacto: 3584223221<br />
                            Mail de Contacto: info@kowalski.com.ar
                        </h6>
                    </Col>

                </Row>
            </Container>
        </Container>

    );
  }
  
}

export default Footer;