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
             <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
           Driving License
            </h1>
            <div
              style={{
                textAlign: "center",
                border: "solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <p style={{ fontFamily: "sans-serif", fontSize: "25px" }}>
                Issue Date:{drivingLicense.issueDate}
              </p>
              <p style={{ fontFamily: "sans-serif", fontSize: "25px" }}>
                Expiry Date:{drivingLicense.expiryDate}
              </p>
              <img src={drivingLicense.img} height="170px" />
            </div>
          </div>
        ))}

      {dashboardItem.id === 2 &&
        dashboardItem.vehicals.map((vehical, index) => (
          <div key={index}>
             <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
           vehicals
            </h1>
            <div
              style={{
                textAlign: "center",
                border: "solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                Car number:{vehical.number}
              </p>
              <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                {" "}
                type:
                {vehical.type}
              </p>
            </div>
          </div>
        ))}

      {dashboardItem.id === 3 &&
        dashboardItem.passports.map((passport, index) => (
          <div key={index}>
 <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
             passports
            </h1>
            <div style={{
                textAlign: "center",
                border: "solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}>
                
            <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}> Issue Place:{passport.issuePlace}</p>
            <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}> Issue Date:{passport.issueDate}</p>
            <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}> Expiry Date{passport.expiryDate}</p>
            </div>
          </div>
        ))}

      {dashboardItem.id === 4 &&
        dashboardItem.nationalAddress.map((nationalAddres, index) => (
          <div key={index}>
            <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
              National Address
            </h1>

            <img
              src={nationalAddres.img}
              style={{
                marginLeft: "350px",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            />
          </div>
        ))}
      {dashboardItem.id === 5 &&
        dashboardItem.Appointments.map((Appointments, index) => (
          <div key={index}>
             <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
             Appointments
            </h1>
            <div
              style={{
                textAlign: "center",
                border: "solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}
            >
            <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>{Appointments.Appointments}</p>
            </div>
          </div>
        ))}
      {dashboardItem.id === 6 &&
        dashboardItem.TrafficViolation.map((TrafficViolation, index) => (
          <div key={index}>
             <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
             Traffic Violation
            </h1>
            <div
              style={{
                textAlign: "center;border solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>Payed:{TrafficViolation.payed}</p>
              <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}> unpayed:{TrafficViolation.unpayed}</p>
            </div>
          </div>
        ))}
      {dashboardItem.id === 7 &&
        dashboardItem.myDeeds.map((myDeeds, index) => (
          <div key={index}>
              <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
           My Deeds
            </h1>
            <div
            style={{
                textAlign: "center;border solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}
            >
            <p style={{ fontFamily: "sans-serif", fontSize: "20px" ,padding:'5px'}}>{myDeeds.descrip}</p>
            </div>
          </div>
          
        ))}
      {dashboardItem.id === 8 &&
        dashboardItem.Attorneys.map((Attorneys, index) => (
          <div key={index}>
                <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
                Attorneys
            </h1>
            <div
              style={{
                textAlign: "center",
                border: "solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}
            >
            <p>{Attorneys.number}</p>
            </div>
          </div>
        ))}
      {dashboardItem.id === 9 &&
        dashboardItem.exams.map((exams, index) => (
          <div key={index}>
               <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
                Exams Results
            </h1>
            <div
              style={{
                textAlign: "center",
                border: "solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}
            >
            <p style={{ fontFamily: "sans-serif", fontSize: "20px" ,padding:'5px'}}> Your exams:{exams.number}</p>
            </div>
          </div>
        ))}
      {dashboardItem.id === 10 &&
        dashboardItem.travels.map((travels, index) => (
          <div key={index}>
               <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
                Internal travels
            </h1>
            <div
              style={{
                textAlign: "center",
                border: "solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}
            >
            <p style={{ fontFamily: "sans-serif", fontSize: "20px" ,padding:'5px'}}>{travels.text}</p>
            </div>
          </div>
        ))}
      {dashboardItem.id === 11 &&
        dashboardItem.Commerical.map((Commerical, index) => (
          <div key={index}>
              <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
              Commerical Regesteration
            </h1>
             <div
              style={{
                textAlign: "center",
                border: "solid white 2px",
                marginLeft: "600px",
                marginRight: "600px",
                marginTop: "80px",
                marginBottom: "100px",
                paddingBottom: "30px",
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
              }}
            >
            <p style={{ fontFamily: "sans-serif", fontSize: "20px" ,padding:'5px'}}>{Commerical.text}</p>
            </div>
          </div>
        ))}
      {dashboardItem.id === 12 &&
        dashboardItem.Insurance.map((Insurance, index) => (
          <div key={index}>
             <h1 style={{ textAlign: "center", fontFamily: "serif",color:'#105652' }}>
              Vehicals Insurance
            </h1>
            <img src={Insurance.img}  style={{
                marginLeft: "400px",
                marginTop: "50px",
                marginBottom: "50px",
              }} />
          </div>
        ))}
    </div>
  );
};

export default DashboardInfo;
