import React from 'react'
import Card1 from "../Image/Card1.png"
import Card2 from "../Image/Card2.png"
import Card3 from "../Image/Card3.png"
import Card4 from "../Image/Card4.png"
import { NavHashLink } from 'react-router-hash-link';


const   KnowUsPage = () =>{
    return(
        <>
<div class="card-deck">
  <div class="card">
    <img src={Card1} class="card-img-top" alt="..."/>
  </div>
  <div class="card">
    <img src={Card2} class="card-img-top" alt="..."/>
  </div>
  <div class="card">
    <img src={Card3} class="card-img-top" alt="..."/>
  </div>
</div>
</>
    )
}
const Carouselcard = (props) =>{
    return(
        <>
            <div className="card">
                <NavHashLink className="card-btn mb-4">
                    <img src={props.imgsrc} className="img-fluid" alt="demo template" />
                </NavHashLink>
            </div>
        </>
    );
}

const Cardata = [
    {imgsrc:Card1},
    {imgsrc:Card2},
    {imgsrc:Card3},
    {imgsrc:Card4},
];
export default KnowUsPage;