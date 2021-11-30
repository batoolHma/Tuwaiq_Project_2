import React from "react";
import { useLocation } from "react-router-dom";

const DashboardInfo = () => {
  const state = useLocation();
  const dashboardItem = state && state.state && state.state.dashboardItem;

  return (
    <div>
      {dashboardItem.id === 1 &&
        dashboardItem.drivingLicenses.map((drivingLicense, index) => (
          <div key={index}>
            <div style={{textAlign:'center', border: 'solid white 2px', marginLeft:'600px', marginRight: '600px', marginTop: '80px', marginBottom: '100px', paddingBottom: '30px', borderRadius:'8px',backgroundColor: '#f1f1f1'}}>
             <p>{drivingLicense.issueDate}</p>
             <p>{drivingLicense.expiryDate}</p>
            <img src={drivingLicense.img} height="170px"/>
            </div>
           
          </div>
        ))}

      {dashboardItem.id === 2 &&
        dashboardItem.vehicals.map((vehical, index) => (
          <div key={index}>
              <p>Car number:<br/>{vehical.number}</p>
           <p> type:<br/>
           {vehical.type}</p>
          
           
          </div>
        ))}

      {dashboardItem.id === 3 &&
        dashboardItem.passports.map((passport, index) => (
          <div key={index}>
            
            <p>{passport.issuePlace}</p>
            <p>{passport.issueDate}</p>
            <p>{passport.expiryDate}</p>
          
          </div>
        ))}

      {dashboardItem.id === 4 &&
        dashboardItem.nationalAddress.map((nationalAddres, index) => (
          <div key={index}>
            <h1 style={{textAlign:'center', fontFamily:'serif'}}>National Address</h1>

            <img src={nationalAddres.img} style={{marginLeft:'350px', marginTop:'50px', marginBottom: '50px'}}/>
           
          </div>
        ))}
         {dashboardItem.id === 5 &&
        dashboardItem.Appointments.map((Appointments, index) => (
          <div key={index}>
           
           <p>{Appointments.Appointments}</p>
           
          </div>
        ))}
          {dashboardItem.id === 6 &&
        dashboardItem.TrafficViolation.map((TrafficViolation, index) => (
          <div key={index}>
           <div style={{textAlign:'center;border solid white 2px', marginLeft:'600px', marginRight: '600px', marginTop: '80px', marginBottom: '100px', paddingBottom: '30px', borderRadius:'8px',backgroundColor: '#f1f1f1'}}>
           <p >{TrafficViolation.payed}</p>
           <p>{TrafficViolation.unpayed}</p>
           </div>
           
          </div>
        ))}
            {dashboardItem.id === 7 &&
        dashboardItem.myDeeds.map((myDeeds, index) => (
          <div key={index}>
           
           <p>{myDeeds.descrip}</p>
           
           
          </div>
        ))}
           {dashboardItem.id === 8 &&
        dashboardItem.Attorneys.map((Attorneys, index) => (
          <div key={index}>
           
           <p>{Attorneys.number}</p>
           
           
          </div>
        ))}
            {dashboardItem.id === 9 &&
        dashboardItem.exams.map((exams, index) => (
          <div key={index}>
           
           <p>{exams.number}</p>
           
           
          </div>
        ))}
           {dashboardItem.id === 10 &&
        dashboardItem.travels.map((travels, index) => (
          <div key={index}>
           
           <p>{travels.text}</p>
           
           
          </div>
        ))}
               {dashboardItem.id === 11 &&
        dashboardItem.Commerical.map((Commerical, index) => (
          <div key={index}>
           
           <p>{Commerical.text}</p>
           
           
          </div>
        ))}
               {dashboardItem.id === 12 &&
        dashboardItem.Insurance.map((Insurance, index) => (
          <div key={index}>
           
           <img src={Insurance.img}/>
           
           
          </div>
        ))}
    </div>
  );
};

export default DashboardInfo;