import React from "react";
import KnowUsPage from "../Components/KnowUs";
import RewardPage from "../Components/Reward";
import headerImage from "../Image/headerImage.png"
import TradePage from "../Components/Trade"

const HomePage = () =>{
    return(
        <>
            {/* header section start */}
            <section className="container-fluid" id="header">
                <div className="d-flex justify-content-between">
                    <div className="col-lg-5 my-auto">  
                        <h1 className="header-heading">A wagon to financial research and management decisions.</h1>
                        <p className="header-text">Life changes the moment you take a new and commited decision.</p>
                    </div>
                    <div className="col-lg-7 mt-lg-0 mt-3">  
                       <img src={headerImage} alt="illustration" className="img-fluid" />
                    </div>
                </div>
            </section>
             {/* header section end */}
             {/* <KnowUsPage/> */}
             <RewardPage/>
             <TradePage/>
        </>
    );
}

export default HomePage;