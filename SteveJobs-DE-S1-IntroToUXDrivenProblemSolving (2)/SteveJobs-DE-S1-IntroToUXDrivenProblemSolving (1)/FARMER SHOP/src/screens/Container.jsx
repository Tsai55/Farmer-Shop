import React from "react";
import PropTypes from "prop-types";
import '../container.css';

// Import images
import equipments from "./images/equipments.jpg";
import farm from "./images/farm.jpg";
import har from "./images/har.jpg";
import trac from "./images/trac.jpg";
import placker from "./images/placker.jpg";
import plant from "./images/plant.jpg";
import seed from "./images/seed.jpg";
import bgimage from "./images/bg-image.jpg";
import Home from "./Home";
// import g1Image from './images/g1.jpg';
// import g2Image from './images/g2.jpg';
// import g3Image from './images/g3.jpg';
// import g4Image from './images/g4.jpg';

export default function container(props) {
  return (
    <div>
      <div className="container">
        {/* NavBar */}
        <nav>
          <div className="logo">
            <h1>FARMER SHOP </h1>
          </div>
          <ul>
            <li>
              <a href="">HOME </a>
            </li>
            <li>
              <a href="#workers">WORKERS</a>
            </li>
            <li>
              <a href="#machinary">MACHINARY</a>
            </li>
            <li>
              <a href="#blog">BLOGS</a>
            </li>
          </ul>
          <div className="icons">
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <i id="bar" className="fa-solid fa-bars"></i>
        </nav>

        <Home/>

        {/* image side text */}
        <div className="main">
          <div className="mainText">
            <h1>Order Farmer Needs</h1>
            <p>Supplyng Good Experianced Workers And Machinary TO The Farmers </p>
            <button>Explore</button>
          </div>
          <img src={equipments} alt="equipments" />
        </div>

        <div id="food">
          <div className="head">
            <h1>Details About Work </h1>
          </div>
          <div className="foodCard">
            <div className="card">
              <a href="https://en.wikipedia.org/wiki/Farm_shop">
                <img src={farm} alt="" />
              </a>
              <p>Working With Ox</p>
              <p>Just as humans can be teachers, or farmers, cattle can be oxen.
               An ox is just a bovine with an education; if it is trained to pull a load, it’s an ox.</p>
            </div>
            <div className="card">
              <img src={har} alt="" />
              <p>Pady Harvesting</p>
              <p> Harvesting is the process of collecting plants, animals, or fish (as well as fungi) as food,[1]
               especially the process of gathering mature crops, and "the harvest" also refers to the collected crops.</p>
            </div>

            <div className="card">
              <img src={trac} alt="" />
              <p>Spraing Fertilizers</p>
              <p>A fertilizer (American English) or fertiliser (British English) is any material of 
              natural or synthetic origin that is applied to soil or to plant tissues to supply plant nutrients.</p>
              
            </div>
            <div className="card">
              <img src={placker} alt="" />
              <p>Preparing Land For Seeding </p>
              <p> Preparing Land For Seeding Useing This Type Of Machinary.</p>
            </div>
            <div className="card">
              <img src={plant} alt="" />
              <p>Planting</p>
              <p>Tree planting is the process of transplanting tree seedlings,
               generally for forestry, land reclamation, or landscaping purposes.</p>
            </div>
            <div className="card">
              <img src={seed} alt="" />
              <p>Seeding</p>
              <p>Among the major field crops, oats, wheat, and rye are sown, 
              grasses and legumes are seeded and maize and soybeans are planted.</p>
            </div>
            {/* Repeat similar structure for other food cards */}
          </div>
        </div>

        <div id="gallery">
          <div class="head">
            <h1>Buy And Rent Our Products</h1>
          </div>
          <div class="gallery">
            <div class="gallery-item">
              <img src={plant} alt="" />
              <button class="buy-button">Request Worker</button>
              
            </div>
            <div class="gallery-item">
              <img src={seed} alt="" />
              <button class="buy-button">Request Worker</button>
            </div>
            <div class="gallery-item">
              <img src={trac} alt="" />
              <button class="buy-button">Buy</button>
              <button class="rent-button">Rent</button>
            </div>
            <div class="gallery-item">
              <img src={farm} alt="" />
              <button class="buy-button">Buy</button>
              <button class="rent-button">Rent</button>
            </div>
            <div class="gallery-item">
              <img src={placker} alt="" />
              <button class="buy-button">Buy</button>
              <button class="rent-button">Rent</button>
            </div>
            <div class="gallery-item">
              <img src={har} alt="" />
              <button class="buy-button">Buy</button>
              <button class="rent-button">Rent</button>
            </div>
          </div>
        </div>

        <div id="blog">
          <div className="head">
            <h1>Company Blogs</h1>
          </div>
          <div className="blogs">
            <div className="blogCard">
              <img src={har} alt="" />
              <div className="blogText">
                <h2>About Harvesting</h2>
                <p>
                The modern combine harvester, or simply combine, is a machine designed to harvest a variety of grain crops.
                 The name derives from its combining four separate harvesting operations—reaping, threshing, gathering, and 
                 winnowing—to a single process. Among the crops harvested with a combine are wheat, Therice, oats, rye, barley,
                  corn (maize), sorghum, millet, soybeans, flax (linseed), sunflowers and rapeseed.
                </p>
                <a href="https://en.wikipedia.org/wiki/Agricultural_machinery">
                  Read Now
                </a>
              </div>
            </div>
            <div className="blogCard">
              <img src={farm} alt="" />
              <div className="blogText">
                <h2>About Farming </h2>
                <p>
                Agriculture encompasses crop and livestock production, aquaculture, fisheries, and forestry for food and non-food products.
                [1] Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species 
                created food surpluses that enabled people to live in cities
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Agricultural_machinery"
                  target="_blank"
                >
                  Read Now
                </a>
              </div>
            </div>
            <div className="blogs">
              <div className="blogCard">
                <img src={plant} alt="" />
                <div className="blogText">
                  <h2>About Planting</h2>
                  <p>
                  Agriculture encompasses crop and livestock production, aquaculture, fisheries, and forestry for food and non-food products.
                  [1] Agriculture was the key development in the rise of sedentary human civilization, 
                  whereby farming of domesticated species created food surpluses that enabled people to live in cities
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Agricultural_machinery">
                    Read Now
                  </a>
                </div>
              </div>
              <div className="blogCard">
                <img src={seed} alt="" />
                <div className="blogText">
                  <h2>About Seeding</h2>
                  <p>
                  Among the major field crops, oats, wheat, and rye are sown, grasses and legumes are seeded and maize and soybeans are planted.
                   In planting, wider rows (generally 75 cm (30 in) or more) are used, and the intent is to have precise; 
                  even spacing between individual seeds in the row, various mechanisms have been devised to count out individual seeds at exact intervals.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Agricultural_machinery"
                    target="_blank"
                  >
                    Read Now
                  </a>
                </div>
              </div>
              {/* Repeat similar structure for other blog cards */}
            </div>

            {/* Repeat similar structure for other blog cards */}
          </div>
        </div>

        <div className="footer">
          <div className="text">
            <h2>About Us</h2>
            <p>Good Experians Workers</p>
            <p>Machinary Available </p>
            <p>Affordable</p>
          </div>
          <div className="text">
            <h2>Workers For </h2>
            <p>Driving </p>
            <p>Seeding</p>
            <p>Spraing Fertilizers and Other Works</p>
          </div>
          
            
          
          <div className="text">
            <h2>Connect on</h2>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>

      <div className="loadPage">
        <div id="headLoader"></div>
        <div className="mainLode"></div>
        <div className="cards">
          <div className="cardLoad">
            <p></p>
          </div>
          <div className="cardLoad">
            <p></p>
          </div>
          <div className="cardLoad">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
