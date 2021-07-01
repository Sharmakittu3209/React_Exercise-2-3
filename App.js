import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faAngleDown,faFilePdf,faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>


      <div style={{ backgroundColor: 'black', height: 160, width: "100%" }}>
        <Container>

          <Row style={{ paddingTop: "6%" }}>
            <Col style={{ color: 'white', fontSize: 20 }}>Message Centre</Col>
            <button class="btn btn-danger">Create new request</button>
          </Row>
        </Container> 

        <div style={{ flexDirection: 'column', height: '72vh', width: '97%', backgroundColor: 'white', marginTop: 80, marginLeft: 20, marginRight: 15 }}>
        
          <div className="row1">
            <div className="flexDirection">
            <p style={{fontSize:20,fontWeight:'bold',marginTop:16}}> Cancel / recall payment, GBP 1,000.00</p>
            <p style={{ marginTop: -20, fontSize:13,justifyContent:'flex-start'}}>1234567890123456 (GB),KUIML Business Company</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faFilePdf} className="leftright" />
           
            <FontAwesomeIcon icon={faFileAlt}  className="leftright"/>
            </div>
            <div>
            <button className="button">Reject</button>
            <button style={{backgroundColor:'gray' }} className="button">Authorise</button>
            </div>
          </div>
          <div className="k">
          <div className="row_spacearound">
            <div className="column_center">
              <p className="request">Request reference</p>
              <p className="no">SET29383ABCH</p>
            </div>
            <div className="verticle_border"/>
            <div className="column_center">
              <p className="request">Category</p>
              <p className="no">Payment</p>
            </div>
            <div className="verticle_border"/>
            <div className="column_center">
              <p className="request">Request Status</p>
              <p className="no">Pending authorisation</p>
            </div>

          <div style={{marginLeft:250}}>
            <p style={{fontSize:15,fontWeight:'bold'}}>Full details </p>
            
            </div>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
