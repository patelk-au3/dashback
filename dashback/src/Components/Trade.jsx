import React from "react";
import KnowUsPage from "../Components/KnowUs";
import Trade from "../Image/verification.png"


const TradePage = () =>{
    return(
        <>
            {/* reward section start */}
            <section className="container-fluid" id="Trade">
                <div className="d-flex justify-content-between">
                    <div className="col-lg-5 my-auto">  
                        <h1 className="header-heading">A wagon to financial research and management decisions.</h1>
                        <p className="header-text">Life changes the moment you take a new and commited decision.</p>
                    </div>
                    <div className="col-lg-7 mt-lg-0 mt-3">  
                       <img src={Trade} alt="illustration" className="img-fluid" />
                    </div>
                </div>
            </section>
             {/* reward section end */}
        </>
    );
}

export default TradePage;