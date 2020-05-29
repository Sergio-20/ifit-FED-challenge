import React from "react";

function Workouts() {
  return (
    <div className="workout-videos-wrapper">
      <div className="content js-slidein top-results">
        <div className="tr-item">
          <img src="/images/ireland.png" alt="" />
          <div className="tr-item-meta">
            <p className="tr-meta-title">Lake Inniscarra, Ireland—Pyramid</p>
            <img
              className="profile-pic"
              src="/images/ireland-profile-pic.png"
              alt=""
            />
          </div>
          <div className="tr-item-statmeta">
            <img className="meta-img" src="/images/clock.png" alt="" />
            <p className="tr-meta-desc">30:53</p>
            <img className="meta-img" src="/images/paperclip.png" alt="" />
            <p className="tr-meta-desc">6,248 M</p>
          </div>
          <a className="tr-item-link" href="#">
            VIEW DETAILS
          </a>
        </div>

        <div className="tr-item">
          <img src="/images/woman-gym.png" alt="" />
          <div className="tr-item-meta">
            <p className="tr-meta-title">Performance Series</p>
            <img
              className="profile-pic"
              src="/images/woman-gym-profile-pic.png"
              alt=""
            />
          </div>
          <div className="playlist-wrapper">
            <img className="playlist-thumb" src="/images/overlay.png" alt="" />
            <div className="playlist-desc">
              <p>9</p>
              <p>workouts</p>
              <img
                className="playlist-thumb playlist-symbol"
                src="/images/playlist-symbol.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="tr-item">
          <img src="/images/exercise-lighting.png" alt="" />
          <div className="tr-item-meta">
            <p className="tr-meta-title">Slow Pulls and Fast Intervals</p>
            <img className="profile-pic" src="/images/alex-silver.png" alt="" />
          </div>
          <div className="tr-item-statmeta">
            <img className="meta-img" src="/images/clock.png" alt="" />
            <p className="tr-meta-desc">44:13</p>
            <img className="meta-img" src="/images/paperclip.png" alt="" />
            <p className="tr-meta-desc">9,948 M</p>
          </div>
        </div>
        <div className="tr-item">
          <img src="/images/man-canoe.png" alt="" />
          <div className="tr-item-meta">
            <p className="tr-meta-title">20 Minutes to Toned</p>
            <img
              className="profile-pic"
              src="/images/gregory-alex.png"
              alt=""
            />
          </div>
          <div className="playlist-wrapper">
            <img className="playlist-thumb" src="/images/overlay.png" alt="" />
            <div className="playlist-desc">
              <p>12</p>
              <p>workouts</p>
              <img
                className="playlist-thumb playlist-symbol"
                src="/images/playlist-symbol.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content js-slidein top-results">
        <div className="tr-item">
          <img src="/images/water-sports.png" alt="" />
          <div className="tr-item-meta">
            <p className="tr-meta-title">Charles Race, Boston, Massachusetts</p>
            <img className="profile-pic" src="/images/whipple.png" alt="" />
          </div>
          <div className="tr-item-statmeta">
            <img className="meta-img" src="/images/clock.png" alt="" />
            <p className="tr-meta-desc">36:22</p>
            <img className="meta-img" src="/images/paperclip.png" alt="" />
            <p className="tr-meta-desc">8,648 M</p>
          </div>
        </div>

        <div className="tr-item">
          <img src="/images/dj.png" alt="" />
          <div className="tr-item-meta">
            <p className="tr-meta-title">Full-Body HIIT Series</p>
            <img className="profile-pic" src="/images/eden.png" alt="" />
          </div>
          <div className="playlist-wrapper">
            <img className="playlist-thumb" src="/images/overlay.png" alt="" />
            <div className="playlist-desc">
              <p>12</p>
              <p>workouts</p>
              <img
                className="playlist-thumb playlist-symbol"
                src="/images/playlist-symbol.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="tr-item">
          <img src="/images/canoe.png" alt="" />
          <div className="tr-item-meta">
            <p className="tr-meta-title">
              Kafue River, Zambia—Power Stroke Pyramid
            </p>
            <img className="profile-pic" src="/images/nanchen.png" alt="" />
          </div>
          <div className="tr-item-statmeta">
            <img className="meta-img" src="/images/clock.png" alt="" />
            <p className="tr-meta-desc">22:22</p>
            <img className="meta-img" src="/images/paperclip.png" alt="" />
            <p className="tr-meta-desc">4,660 M</p>
          </div>
        </div>
        <div className="tr-item">
          <img src="/images/electric.png" alt="" />
          <div className="tr-item-meta">
            <p className="tr-meta-title">Shred & Burn Series</p>
            <img className="profile-pic" src="/images/gideon.png" alt="" />
          </div>
          <div className="playlist-wrapper">
            <img className="playlist-thumb" src="/images/overlay.png" alt="" />
            <div className="playlist-desc">
              <p>16</p>
              <p>workouts</p>
              <img
                className="playlist-thumb playlist-symbol"
                src="/images/playlist-symbol.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
