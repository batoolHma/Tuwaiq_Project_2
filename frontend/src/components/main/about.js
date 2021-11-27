import React from "react";
import {Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import img from '../images/howtworks.png'
export default function About() {
  return(
    <div>
  <Container>
  <div>
   <h3 style={{fontFamily:'fantasy',fontSize:'1cm',color:'#59886B'}}>About Tawakkalna</h3>
   <img
     src="https://ta.sdaia.gov.sa/images/app.png" width="50px"
     className="d-block w-50"
   />

   <p style={{fontFamily:"sans-serif",fontSize:'0.5cm',color:'#222831'}}>
     As the Saudi Arabian Government is keen to preserve the health and
     safety of citizens and residents within its soil from the risk of the
     spread of novel coronavirus; The Saudi Data and Artificial Intelligence
     Authority (SDAIA) developed Tawakkalna App in order to support
     government efforts aimed at countering Covid-19. Tawakkalna App was
     developed to facilitate the issuance of movement permits electronically
     during the curfew period for government and private sector employees, as
     well as individuals, in cooperation with the Ministry of Health and all
     relevant authorities during the curfew, thus helping to reduce the
     spread of the pandemic in the Kingdom. Tawakkalna helps individuals,
     security, health and private entities, that are exempted from the
     curfew, to automatize all transactions between relevant parties in order
     to mitigate the health, economic and social impacts that may result from
     the implementation of policies taken to eliminate the spread of
     Covid-19. Now, as we cautiously return to normal life, Tawakkalna is
     helping in this phase by new services such as showing Users’ health
     condition and other services. And as a part of promoting social
     responsibility, Tawakkalna has provided many services regarding raising
     concern if there are violations, as well as providing the ability to
     notify Ministry of Health in the event of a suspected case.
   </p>
 </div>
 <h3 style={{fontFamily:'fantasy',fontSize:'1cm',color:'#59886B'}}> How Tawakkalna Work</h3>
      <img src={ img}width="100%"/>
  </Container>
  <Container>
    <div style={{backgroundColor:"#EDFFEA"}}>
     <h1 style={{color:"#216353",fontFamily:'unset',textAlign:'center'}}>Contact Us</h1>
     <h3 style={{color:"#216353",fontFamily:'unset',fontSize:'small'}}>Tell:8001289999</h3>
     <h3 style={{color:"#216353",fontFamily:'unset',fontSize:'small'}}>Twitter:TawakkalnaApp</h3>
     <h3 style={{color:"#216353",fontFamily:'unset',fontSize:'10px'}}>E-mail:contact@tawakkalna.gov.sa</h3>
    </div>
  </Container>
  </div>
  )
}
