import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends Component {
                             //push star divs into array with key, className and style
    twinkle() {
        var stars = [];
       
       for(var i = 0; i < 150; i++) {
                            //divStyle with random duration and linear, infinite animation
         var divStyle= {                                        
                    animation: `twinkle ${(Math.floor(Math.random()*5) + 4)}s linear infinite`,
                    top: Math.floor(Math.random()*250),
                    left: Math.floor(Math.random()*700)
                }
            stars.push( <div key={i} className="star" style = {divStyle}></div>)
        }
       return stars;
    }   

    render (){
                

        return (
            <div className="landing">
                <Link to="/ronswanson"> 
                    <div className="easter-egg"> </div>
                </Link>
                <div className="shooting-star"></div>
               {this.twinkle()}
                
            </div>
        )
    }
}