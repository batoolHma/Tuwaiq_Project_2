import React from "react";
import { useLocation } from "react-router-dom";

const DashboardDetail = () => {
  const state = useLocation();
  const dashboardItem = state && state.state && state.state.dashboardItem;

  return (
    <div>
      {dashboardItem.id === 1 &&
        dashboardItem.drivingLicenses.map((drivingLicense, index) => (
          <div key={index}>
            <p>{drivingLicense.id}</p>
            <p>{drivingLicense.number}</p>
            <img src={drivingLicense.img}/>
            {/* others */}
          </div>
        ))}

      {dashboardItem.id === 2 &&
        dashboardItem.vehicals.map((vehical, index) => (
          <div key={index}>
            <p>{vehical.id}</p>
            <p>{vehical.number}</p>
            {/* others */}
          </div>
        ))}

      {dashboardItem.id === 3 &&
        dashboardItem.passports.map((passport, index) => (
          <div key={index}>
            <p>{passport.id}</p>
            <p>{passport.number}</p>
            <p>{passport.issueDate}</p>
            {/* others */}
          </div>
        ))}

      {dashboardItem.id === 4 &&
        dashboardItem.nationalAddress.map((nationalAddres, index) => (
          <div key={index}>
            <p>{nationalAddres.id}</p>
            <p>{nationalAddres.number}</p>
            {/* others */}
          </div>
        ))}
    </div>
  );
};

export default DashboardDetail;