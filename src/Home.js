import React from "react";
import "./Home.css";
import Hero from "./images/heroBleed.jpg";
import leanStartup from "./images/leanStartup.jpg";
import mixer from "./images/mixer.jpg";
import smartWatch from "./images/smartWatch.jpg";
import alexSpeaker from "./images/alexSpeaker.jpg";
import tv from "./images/tv.jpg";
import ipad from "./images/ipad.jpg";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__containter">
        <img className="home__image" src={Hero} alt="" />
        <div className="home__row">
          <Product
            id="65465464"
            title="The lean Startup: How Constant Innovation
            Creates Radically Successful Business
            Paperback"
            price={29.99}
            image={leanStartup}
            rating={5}
          />
          <Product
            id="65464"
            title="Kenwood kMix Stand Mixer for
             Baking, Stylish Kitchen Mixer with
             K-beater, Dough Hook and Whisk, 5 Litre
             Glass Bowl"
            price={239.0}
            rating={4}
            image={mixer}
          />
        </div>
        <div className="home__row">
          <Product
            id="6854684684"
            title="FitBit Smart Watch Black"
            price={239.0}
            rating={3}
            image={smartWatch}
          />
          <Product
            id="6984684"
            title="Amazon Echo (3rd generation) | Smart spearker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={4}
            image={alexSpeaker}
          />
          <Product
            id="64646985464"
            title="New Apple ipad Pro (12.0-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={ipad}
          />
        </div>
        <div className="home__row">
          <Product
            id="878949874"
            title="Samsung LC49RG90SSUXEN 49' Curved
            LED Gaming Monitor - Super Ultra Wide
            Dual WQHD 5120 X 1440"
            price={1094.98}
            rating={4}
            image={tv}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
