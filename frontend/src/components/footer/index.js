import React from 'react';
import { Row,Col } from 'react-bootstrap';
import './footer.css'
const Footer = () => {
	return <div className="App">
	<div class="footer">
    <div> 
      <Row id="footerimg">
            <Col xs={6} md={4}>
			<img src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" width="150px" height="100px"/>
			<br/>
			<img src="https://ta.sdaia.gov.sa/images/sdaia.svg"width="150px" height="100px" />
             </Col>
			
            
				<Col xs={6} md={4}>
				<a className="links" href="https://ta.sdaia.gov.sa/en/TawakkalnaEn.pdf">User Guide</a>
				
			     <br/>
				
				<a className="links" href="https://ta.sdaia.gov.sa/en/privacy-en.html">Privacy Policy</a>
				
				<br/>
			
				<a  className="links" href="https://ta.sdaia.gov.sa/en/terms-en.html">Terms and Conditions</a>
				</Col>
				<Col xs={6} md={4}>
                <p>Download the app</p>
                <img src="https://ta.sdaia.gov.sa/images/NewImages/googleplay.png" width="100px"/>
				<img src="https://ta.sdaia.gov.sa/images/NewImages/appstore.png" width="100px"/>
				<img src="https://ta.sdaia.gov.sa/images/NewImages/huaweigalary.png" width="100px"/>
				</Col>
				</Row>
          
    </div>
    
   
  </div>
	
	</div>;
};

export default Footer;
