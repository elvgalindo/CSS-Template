//importing necessary files for the app to work
import React, { Component } from 'react';
import './page3.css'
class page2 extends Component{
    render(){
        return(
            <div className="pageThree">
                <a href="https://www.instagram.com/livingalindostyle/" className="fa fa-instagram"> </a>
                <a href="https://www.instagram.com/livingalindostyle/" className="fa fa-facebook"> </a>
                <div className="top-left">Living</div>
                <div className="top-left1">Galindo</div>
                <div className="top-left2">Style</div>
                <div className="bck">
                    <div>
                        <h1 data-text= "CONTACT US">CONTACT US</h1>
                        <form>
                            <div className="form-group1">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="form-group2">
                                <label for="exampleFormControlTextarea1">Leave a question or comment</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                         </form>
                         <div className="col-auto my-1" id="button">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}
//exporting the routes
export default page2;