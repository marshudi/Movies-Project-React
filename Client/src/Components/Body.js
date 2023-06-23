import React from "react";
import slogo from './img/samplelogo.png'
import sample from './img/sample.png'
import { NavLink } from "react-router-dom";
import img1 from "./img/1.webp"
import img2 from "./img/2.webp"
import img3 from "./img/3.webp"
import img4 from "./img/4.webp"
import img5 from "./img/5.webp"
import img6 from "./img/6.webp"
import img7 from "./img/7.webp"
import img8 from "./img/8.webp"
import img9 from "./img/9.webp"
import img10 from "./img/10.webp"
import img11 from "./img/11.jpeg"
import img12 from "./img/12.jpeg"
import img13 from "./img/13.webp"
import img22 from "./img/22.webp"
import img23 from "./img/23.webp"
import img24 from "./img/24.webp"
import img25 from "./img/25.webp"
import img26 from "./img/26.webp"
import img27 from "./img/27.webp"


const textcolor={
    color:"#EC058E",
    fontSize:"25px"
}



const  content= {
    //paddingBottom: "1rem"   /* Footer height */
  }
  const pageContainer= {
    position: "relative",
    minHeight: "100vh"
  }

export default function Body(){


    return(

        <>
        <main>
        <br/><br/><br/><br/><br/><br/>
        <section>
      <div class="scroll-holder">        
          <div class="scroll-tray">
            <div>
              <img src={img1} />
            </div>
            <div>
              <img src={img2} />
            </div>
            <div>
              <img src={img3}/>
            </div>
            <div>
              <img src={img4} />
            </div>
            <div>
              <img src={img5}/>
            </div>
            <div>
              <img src={img6} />
            </div>
            <div>
              <img src={img7} />
            </div>
            <div>
              <img src={img8} />
            </div>
            <div>
              <img src={img9} />
            </div>
            <div>
              <img src={img10} />
            </div>
            <div>
              <img src={img11} />
            </div>
            <div>
              <img src={img12} />
            </div>
            <div>
              <img src={img13} />
            </div>


            <div>
              <img src={img12} />
            </div>
            <div>
              <img src={img11} />
            </div>
            <div>
              <img src={img10} />
            </div>
            <div>
              <img src={img9} />
            </div>
            <div>
              <img src={img8} />
            </div>
            <div>
              <img src={img7} />
            </div>
            <div>
              <img src={img6} />
            </div>
            <div>
              <img src={img5} />
            </div>
          </div>
          <div class="scroll-tray">
            <div>
              <img src={img22} />
            </div>
            <div>
              <img src={img23} />
            </div>
            <div>
              <img src={img24} />
            </div>
            <div>
              <img src={img25} />
            </div>
            <div>
              <img src={img26} />
            </div>
            <div>
              <img src={img27} />
            </div>
            <div>
              <img src={img1} />
            </div>
            <div>
              <img src={img2} />
            </div>
            <div>
              <img src={img3}/>
            </div>
            <div>
              <img src={img4} />
            </div>
            <div>
              <img src={img5}/>
            </div>
            <div>
              <img src={img6} />
            </div>
            <div>
              <img src={img7} />
            </div>
            <div>
              <img src={img8} />
            </div>
            <div>
              <img src={img10} />
            </div>
            <div>
              <img src={img11} />
            </div>
            <div>
              <img src={img12} />
            </div>
            <div>
              <img src={img13} />
            </div>
          </div>
          
      </div>

      
    </section>
    <br/>  <br/>  <br/>  <br/>
    <ul className="ml-auto">
            <div className="container justify-content-center ">
            <div className="d-flex align-items-center justify-content-center">
            <NavLink to="/Register" activeClassName="active" 
                style={{}}
                className="btn btn-outline-info px-3"
                href=""
                role="button"
                exact="true"
              >
                <i style={textcolor}>Get Started!</i>
            </NavLink>
              
            </div>
            </div>
            </ul>

        </main>
        </>
    );
};