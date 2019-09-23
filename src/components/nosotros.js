import React from 'react'
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom'
import '../styles.css'
import Navegador from './navegador'
import Footer from './footer'
import { Container, Row, Col } from 'react-bootstrap';

class Nosotros extends React.Component {

  render() {
    return (
        <div  >
            <Navegador />

            <Container fluid="true" className="py-5 my-5 text-left quienesomos" style={{backgroundColor: '#FFF'}}>

              <Container>
                  <Row>
                      <Col xs={12} md={12} style={{position: 'relative'}} >
                          <h2>                     
                              Quienes Somos
                          </h2>
                          <img src="./images/clientes.jpg" alt="" class="svg-border-mask" />

                      </Col>

                      <Col xs={12} md={{span: 7, offset: 4}}>
                        <h6 className="text-muted bg-light py-5 px-5 mb-5">
                          Es una empresa que nace en Ticino, Pcia de Córdoba con Pablo Ariel Kowalski el 27 
                          de febrero de 1988  con el objetivo de comercializar inmuebles.
                        </h6>
                      </Col>

                      <Col xs={12} md={{span: 7, offset: 3}}>
                        <h6 className="text-muted bg-light  py-5 px-5">
                        Especializados en la venta de campos en sus inicios, la experiencia nos fue llevando al 
                        desarrollo de emprendimientos inmobiliarios de envergadura en la zona de Santa Rosa de Calamuchita, 
                        proyectando emprendimientos diferenciados y de excelencia que satisfagan las necesidades del mercado y 
                        clientes exigentes, dentro de un marco de absoluta confianza y transparencia.
                        </h6>
                      </Col>

                  </Row>
              </Container>
            </Container>

            <Footer />
         
        </div>
    );
  }
  
}

export default Nosotros;