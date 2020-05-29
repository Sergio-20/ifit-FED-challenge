import React from "react";

function Slider() {
  return (
    <div className="js-slidein animate__animated animate__fadeInDown slider-wrapper">
      <div className="arrow-container left-arrow"><i className="fa fa-angle-left oval" aria-hidden="true"></i></div>
      <div className="slider-item">
        <figure>
          <img src="/images/gear-junkie-logo.svg" alt="" />
        </figure>
        <q>You focus on putting in the work, and the technology handles the rest.</q>
      </div>
      <div className="slider-item">
        <figure>
          <img src="/images/wired-logo.svg" alt="" />
        </figure>
        <q>Literally transports you from home to wherever you choose to run.</q>
      </div>
      <div className="slider-item">
        <figure>
          <img src="/images/mashable-logo.svg" alt="" />
        </figure>
        <q>Breathes new life into a tired, old running routine.</q>
      </div>
      <div className="arrow-container right-arrow"><i className="fa fa-angle-right oval" aria-hidden="true"></i></div>
    </div>
  );
}

export default Slider;
