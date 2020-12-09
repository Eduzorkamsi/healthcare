import React from "react";
import "../styles/doctors.css";
import Doc1 from "../assets/images/doc1.svg"
import Doc2 from "../assets/images/doc2.svg"
import Doc3 from "../assets/images/doc3.svg"
import Star from "./ratingstars";

const Doctors=()=>{

    return(
        <>
        <div className="doctors_page">
            <div className="doctors_heading">
                <h2>Find <span>your doctor</span></h2>
<div className="doctors_search">
<form id="search-form">
            <div class="search">
              <input
                type="text"
                name="search"
                class="round"
                placeholder="&#xf002; Find your doctor"
              />
            </div>
          </form>
</div>
            </div>
<div className="doctors_heading2">
<h3 className="h3_doctor">Top Doctors</h3>
<a className="view_all" href="doctors.example.com">View all</a>
</div>
<div className="top_doctors">
    <div className="doc1">
<img src={Doc1} className="doc_icon" alt="doc"/>
<div className="doctors_details">
<h3>Dr. Jacob Jones</h3>
        <div className="field_hospital">
            <h4>Heart</h4>
            <h4 className="hospital">St. John's Hospital</h4>
        </div>
        <div className="rating_availability">
            <div className="rating">
            <Star/><h4>(1221)</h4>
            </div>
           
            <button className="availability">Open</button>
        </div>

</div>
    </div>

    <div className="doc1">
    <img src={Doc2} className="doc_icon" alt="doc"/>
    <div className="doctors_details">
        <h3>Dr. Jacob Jones</h3>
        <div className="field_hospital">
            <h4>Heart</h4>
            <h4 className="hospital">St. John's Hospital</h4>
        </div>
        <div className="rating_availability">
            <div className="rating">
            <Star/><h4>(1221)</h4>
            </div>
           
            <button className="availability">Open</button>
        </div>
    
</div>
    </div>

    <div className="doc1">
    <img src={Doc3} className="doc_icon" alt="doc"/>
    <div className="doctors_details">
    <h3>Dr. Jacob Jones</h3>
        <div className="field_hospital">
            <h4>Heart</h4>
            <h4 className="hospital">St. John's Hospital</h4>
        </div>
        <div className="rating_availability">
            <div className="rating">
            <Star/><h4>(1221)</h4>
            </div>
           
            <button className="availability">Open</button>
        </div>
    
</div>
    </div>
</div>
        </div>
        </>
    )
}

export default Doctors