//importing necessary files for the app to work
import React, { Component } from 'react';
import './page1.css';

class page2 extends Component{
    render(){
        return(
            <div className="pageOne">
                <div className="top-left">Living</div>
                <div className="top-left1">Galindo</div>
                <div className="top-left2">Style</div>
                <img className="img5" src={require('./IMG_0243.JPG')} alt="us"/>
                <div className="bck2">
                <h1 data-text= "ABOUT US">ABOUT US</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididest ante in est ante in nibh mauris. Maecenas volutpat blandit aliquam etiam eranibh mauris. Maecenas volutpat blandit aliquam etiam eraunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Auctor eu augue ut lectus arcu bibendum at varius vel. Eget velit aliquet sagittis id consectetur purus ut. Odio ut sem nulla pharetra diam sit amet nisl. Massa ultricies mi quis hendrerit dolor magna. Aliquet nibh praesent tristique magna sit. Adipiscing enim eu turpis egestas. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Volutpat ac tincidunt vitae semper. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Nulla pellentesque dignissim enim sit. Vitae congue eu consequat ac felis donec et odio pellentesque. Gravida neque convallis a cras semper auctor neque vitae. Nunc pulvinar sapien et ligula ullamcorper. Aenean et tortor at risus viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Pulvinar sapien et ligula ullamcorper malesuada proin libero.

Quam vulputate dignissim suspendisse in est ante in nibh mauris. Maecenas volutpat blandit aliquam etiam erat.est ante in nibh mauris. Maecenas volutpat blandit aliquam etiam era.est ante in nibh mauris. Maecenas volutpat blandit aliquam etiam era</p>
                </div>
            </div>
        );
    }
}
//exporting the routes
export default page2;
