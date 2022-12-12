import React from "react";
import "./style.css";

export default function Place({pro}){
    return (
      <div className="total">
        <img src={pro.Img} className="pic"/>
        <div>
         {<small className="loc"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="i" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
         <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>{pro.Location}</small>}
         <a href={pro.GML} className="link">click here</a>
         {<h3 className="title">{pro.Title}</h3>}
          {<p className="desc">{pro.Desc}</p>}
         
        </div>
        </div>
    )
}
