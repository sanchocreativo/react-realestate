import React from 'react'
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom'
import '../styles.css'
import Navegador from './navegador'
import Footer from './footer'
import Contact from './contact'

import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import { HashLink  } from 'react-router-hash-link';


class Home extends React.Component {



  render() {
    const opts = {
      height: '390',
      width: '100%',
     
    };
    const opts2 = {
      width: '100%'
    };

    return (

      

      <div  >
      <Navegador />
   
      
      <Container fluid="true" className="py-5 my-5 text-left videocontain video-background" >

       <div class="video-foreground">
          <iframe src="https://www.youtube.com/embed/rJFhtLc9bjg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=rJFhtLc9bjg" frameborder="0" allowfullscreen></iframe>
        </div>
    
              <Container>
                  <Row>
                      <Col xs={12} md={5} >
                          <h1 className="white">                     
                          Grupo <br />Kowalski
                          </h1>

                          <h3 className="white">Desarrolladora y comercializadora inmobiliaria</h3>
                          <Button variant="warning" className="mt-3" >
                            <HashLink  to="/#ciudadparque">
                            Experiencia Virtual 3D
                            </HashLink>
                            </Button>
                      </Col>
                      <Col xs={12} md={4} className="text-right  pr-0">
                        <Image src="./images/lariviera.jpg"  fluid />
                       
                      </Col>
                      <Col xs={12} className="mt-auto pl-0" md={3}>
                        <h4 className="white  ml-4">
                          Loteo La riviera
                        </h4>
                        <div className="button-decor"></div>
                      </Col>

                  </Row>

                  <Row>

                    <Col xs={12} className="text-right "  md={6}>
                      <Image src="./images/villaciudadparque.jpg" fluid />
                    </Col>

                    <Col xs={12} md={3} className="mt-auto pl-0" style={{marginLeft: '-15px'}}>
                      <h4 className=" white ml-4">
                        Loteo Villa Ciudad Parque
                      </h4>
                      <div className="button-decor"></div>

                    </Col>

                  </Row>

              </Container>
            </Container>

           
            <Container fluid="true" className="experienciacontainer py-5">

              <Container   className="mx-auto ">
                <Row>
                  <Col className="mx-auto" md={{span:5, offset:2}} style={{marginBottom: '-14rem'}}>
                    <Image src="./images/360.jpg" className="py-4" fluid />
                  </Col>

                

                </Row>
              </Container>

              <Container className="mt-5 pt-5 " >

                    <Row>
                        <Col className="expe3d px-4 py-3" xs={12} md={{span:5, offset:1}} >
                            <a href="/villaciudadparque" id="ciudadparque" target="_blank">
                              <h2>                     
                                  Ver <br />
                                  Experiencia<br />
                                  3D
                              </h2>
                              <Image src="./images/ar-glasses.svg" className="py-4" fluid />
                            </a>
                        </Col>
                    </Row>
              </Container>

            </Container>
            <Container fluid="true" className="experienciacontainer py-5">

            <Container   className="ml-auto mb-5 pb-5" style={{marginTop: '-5rem', zIndex: '4', backgroundColor: 'white'}}>
              <Row>
                <Col className="ml-auto" md={{span:7, offset:1}} >

                  <h6 className="text-muted bg-light  py-5 px-5">
                  Explorá el Loteo de Villa Ciudad Parque a través de una experiencia 3D del 
                  entorno del Loteo. Dimensionate dentro del campo del loteo, el río con sus alrededores, y la entrada al barrio
                  </h6>   

                </Col>
              </Row>
            </Container>

            </Container>
            <Container fluid="true" className="experienciacontainer">


            <Container className="mt-5 pt-5" >

              <Row>
                  <Col className="expe3d" xs={12} md={{span:6, offset:1}} style={{zIndex: '5'}}>
                      <a href="/villaciudadparque" id="ciudadparque" target="_blank">
                        <h2 className=" mx-2 py-5 mb-4">                     
                          Tu oportunidad de tener un lote más cerca que nunca
                        </h2>
                      </a>
                  </Col>
              </Row>
            </Container>

            <Container   className="ml-auto mb-5 pb-5 pt-5" style={{marginTop: '-5rem'}}>
                <Row>
                  <Col className="ml-auto pt-5 bg-light text-center" md={{span:10, offset:1}} >
                    <Row>

                      <Col className="" md={3} xs={12}  >
                        <Image src="./images/llave.svg" className="pt-5 mx-auto" fluid />
                       
                      </Col>
                      
                      <Col className="" md={3} xs={12}  >
                        <Image src="./images/escritura.svg" className="pt-4 mx-auto" fluid />
                       
                      </Col>

                      <Col className="" md={3} xs={12}  >
                        <Image src="./images/inversion.svg" className="pt-4 mx-auto" fluid />
                     
                      </Col>

                      <Col className="" md={3} xs={12}  >
                        <Image src="./images/financia.svg" className="pt-4 mx-auto" fluid />
                        
                      </Col>

                    </Row>

                  </Col>
                </Row>

                <Row>
                  <Col className="ml-auto pt-1 bg-light text-center" md={{span:10, offset:1}} >
                    <Row>

                      <Col className="" md={3} xs={12}  >
                        <h6 className="text-muted bg-light pt-4 pb-5  px-2">
                          Acceso inmediato  a tu lote
                        </h6>   
                      </Col>
                      
                      <Col className="" md={3} xs={12}  >
                        <h6 className="text-muted bg-light pt-4 pb-5 px-2">
                        Lotes
con escritura                        </h6>   
                      </Col>

                      <Col className="" md={3} xs={12}  >
                        <h6 className="text-muted bg-light pt-4 pb-5 px-2">
                        Gran oportunidad
de inversión                        </h6>   
                      </Col>

                      <Col className="" md={3} xs={12}  >
                        <h6 className="text-muted bg-light pt-4 pb-5 px-2">
                          Financiación propia con mínimos requisitos
                        </h6>   
                      </Col>

                    </Row>

                  </Col>
                </Row>
            </Container>

            </Container>





            <Container   className="mx-auto mb-5">
              <Row>
                <Col className="mx-auto" md={{span:6, offset:1}}>
                  <h2 className="my-4 text-center">
                    Contactanos para saber más acerca de este proyecto
                  </h2>

              

                </Col>
              </Row>
            </Container>

      <Container className="mb-5">
        <Contact />
      </Container>

      <Footer />
     
  </div>
    );
  }
  
}

export default Home;