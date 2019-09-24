import React, { Component } from 'react'
import Navegador from './navegador'
import Footer from './footer'
import Contact from './contact'
import { Link } from "react-router-dom"
import { Container, Row, Col, Image } from 'react-bootstrap';


export class contacto extends Component {
    render() {
        return (
            <div>
                <Navegador />

                <Container  fluid="true"  className="mx-auto py-5 sky-gradient-11">
                    <Row fluid="true" style={{zIndex: '12'}} className="">
                        <Col className="mx-auto" md={{span:6, offset:1}}>

                            <h2 className="my-4 text-center">
                                Contactanos para saber más acerca de este proyecto
                            </h2>

                        <Contact />

                        </Col>
                    </Row>

                    <div>
                    <Image src="./images/fondo2.png" className="pt-4 mx-auto background-contact" fluid />
                    </div>
                    
                </Container>  

                <Footer />
                    
            </div>
        )
    }
}


export default contacto
