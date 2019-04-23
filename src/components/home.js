//importing necessary files for the app to work
import React, { Component } from 'react';
import img1 from './IMG_1235.JPG';
import img2 from './IMG_1246.JPG';
import img3 from './IMG_0330.JPG';
import img4 from './IMG_0257.JPG'
import './home.css';
//why classes?

const sectionStyle = {
    backgroundImage: `"url(${img1})"`
  };
  const sectionStyle1 = {
    backgroundImage: `"url(${img2})"`
  };
  const sectionStyle2 = {
    backgroundImage: `"url(${img3})"`
  };
  const sectionStyle3 = {
    backgroundImage: `"url(${img4})"`
  };
    
class home extends Component{

    render(){
        return(
        <div>
            <div className="container">
            <a href="https://www.instagram.com/livingalindostyle/" className="fa fa-instagram"> </a>
            <a href="https://www.instagram.com/livingalindostyle/" className="fa fa-facebook"> </a>
                <div className="top-left">Living</div>
                <div className="top-left1">Galindo</div>
                <div className="top-left2">Style</div>
                <div id="slideshow">
                    <div className="elemnt" style={sectionStyle} >
                        {/* <span>Welcome</span> */}
                    </div>
                    <div className="elemnt1" style={sectionStyle1}>
                        {/* <span>Hello</span> */}
                    </div>
                    <div className="elemnt2" style={sectionStyle2}>
                        {/* <span>Bye</span> */}
                    </div>
                    <div className="elemnt3" style={sectionStyle3}>
                        {/* <span>yo</span> */}
                    </div>
                </div>
            </div>
        </div>  
        );
    }     
}


export default home;