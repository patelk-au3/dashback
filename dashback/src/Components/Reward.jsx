import React from "react";
import KnowUsPage from "../Components/KnowUs";
import Reward from "../Image/reward.png"


const RewardPage = () =>{
    return(
        <>
            {/* reward section start */}
            <section className="container-fluid" id="reward">
                <div className="d-flex justify-content-between">
                    <div className="col-lg-5 my-auto">  
                        <h1 className="header-heading">A wagon to financial research and management decisions.</h1>
                        <p className="header-text">Life changes the moment you take a new and commited decision.</p>
                    </div>
                    <div className="col-lg-7 mt-lg-0 mt-3">  
                       <img src={Reward} alt="illustration" className="img-fluid" />
                    </div>
                </div>
            </section>
             {/* reward section end */}
        </>
    );
}

export default RewardPage;