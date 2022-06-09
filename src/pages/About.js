import React, { Component } from 'react';
import "./About.css";
import verona_teo_profile from "../assets/verona_teo_profile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class='split left'>
            <div className='centered'>
              <img className='profile_image'
              src={verona_teo_profile}
              alt='profile pic'
              ></img>
            </div>
          </div>
          <div className='split right'>
            <div className='centered'>
              <div className='name_title'> verona teo</div>
              <div className='brief_description'>
                i'm a student at uc berkeley studying philosophy
                and data science.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}