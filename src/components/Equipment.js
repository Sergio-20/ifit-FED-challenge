import React from "react";

function Equipment() {
  return (
    <div className="js-slidein">
      <h2 id="equipment-header">Interested in our exciting iFit-enabled equipment?</h2>
      <div className="equipment-wrapper">
        <div className="equip-item">
          <img src="/images/treadmill.png" alt="" />
          <p>Treadmills</p>
        </div>
        <div className="equip-item">
          <img src="/images/bikeperson.png" alt="" />
          <p>Bikes</p>
        </div>
        <div className="equip-item">
          <img src="/images/elliptical.png" alt="" />
          <p>Ellipticals</p>
        </div>
        <div className="equip-item">
          <img src="/images/strength.png" alt="" />
          <p>Strength</p>
        </div>
      </div>
    </div>
  );
}

export default Equipment;
