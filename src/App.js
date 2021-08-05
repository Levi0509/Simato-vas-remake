/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import logo from "./Images/Simato-logo2.jpeg";
import otenro from "./Images/Otenro.png";
import appmaker from "./Images/Appmaker.png";
import notice from "./Images/Hiring_Notice.jpg";
import working from "./Images/career.png";
import team from "./Images/team.jpg";
import { useState, useEffect } from "react";

function App() {
  const _fnEmptyFunctionPointer = () => {};
  const [show, handleshow] = useState(false);
  const [para, handlePara] = useState(false);
  const [slide, handleSlide] = useState(false);
  const [slider, handleSlider] = useState(false);

  var x,
    y = 0;
  let width = window.innerWidth;
  if (width <= 685) {
    console.log(width);
    x = 850;
  } else {
    x = 300;
  }
  if (width <= 685) {
    y = 1300;
    console.log(width);
  } else {
    y = 300;
  }
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 3500) {
  //       handlePara(true);
  //     } else handlePara(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", _fnEmptyFunctionPointer);
  //   };
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll", _fnEmptyFunctionPointer);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > x) {
        handleSlide(true);
      } else handleSlide("");
    });
    return () => {
      window.removeEventListener("scroll", _fnEmptyFunctionPointer);
    };
  }, [x]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > y) {
        handleSlider(true);
      } else handleSlider("");
    });
    return () => {
      window.removeEventListener("scroll", _fnEmptyFunctionPointer);
    };
  }, [y]);
  function sendContact() {
    let name = document.getElementById("fname");
    let email = document.getElementById("email");
    if (name !== "" && email !== "") {
      window.location.reload();
      alert("Thank You. We will contact you soon.");
    } else {
      alert("Please Fill");
    }
    return false;
  }
  function responsive() {
    var x = document.getElementById("navigation");
    console.log("now");
    if (x.className === "nav_items") {
      x.className = " responsive";
    } else {
      x.className = "nav_items";
    }
  }

  return (
    <div className="App">
      <header class={`Header_main ${show && "Header_no"}`}>
        <div class="logo_container">
          <a href="#">
            <img src={logo} alt="Simato solutions" id="logo" />
          </a>
        </div>
        <div className="topnav" id="Top_navigation">
          <nav class="nav_items" id="navigation">
            <a href="#home"> Home </a>
            <a href="#goals"> Our Portfolio </a>
            <a href="#hiring"> Careers </a>
            <a href="#contact"> Contact Us </a>
            <a href="#about"> About Us </a>
            <div className="click" onClick={responsive}>
              <span class="material-icons">&#xe5d2;</span>
            </div>
          </nav>
        </div>

        <div id="mobile_nav_menu">
          <div class="mobile_nav closed">
            <span class="mobile_menu_bar mobile_menu_bar_toggle"></span>
          </div>
        </div>
      </header>
      <div class="contents" id="home">
        <section className={`parallax${para && "parallax_2"}`}>
          <section className="text">
            <h1 className="main">
              <b>
                WELCOME TO <br /> SIMATO VAS SOLUTIONS <br />
              </b>
            </h1>
            <span>
              LOOKING FOR CREATIVE IDEAS AND SOLUTIONS ? <br />
              SEARCH NO MORE FOR WE ARE HERE.
            </span>
          </section>
        </section>
        <div className="track">
          <div className="circle">
            <div className="point">
              <span className="material-icons">send</span>
            </div>
          </div>
        </div>
        <div className="home_items">
          <div className="articles_1">
            <article className="services">
              <span className="icon_shield">
                <span class="material-icons" id="icon1">
                  &#xe86f;
                </span>
              </span>
              <h3>Web Development</h3>
              <p className="description">
                We utilize the latest technologies and use design thinking
                methodologies to provide you with an optimized user experience
                for your Web and Mobile portals.
              </p>
            </article>
          </div>
          <div className="articles_2">
            <article className="services">
              <span className="icon_shield">
                <span class="material-icons" id="icon2">
                  &#xe325;
                </span>
              </span>
              <h3>Mobile App Development</h3>
              <p className="description">
                We can let you create your own mobile app based on a variety of
                templates or let our expert team design a customized app to your
                exact specifications.
              </p>
            </article>
          </div>
          <div className="articles_3">
            <article className="services">
              <span className="icon_shield">
                <span class="material-icons" id="icon3">
                  &#xef76;
                </span>
              </span>
              <h3>Content Solutions</h3>
              <p className="description">
                We create and source mobile and web content from our
                international partner networks to best fit your business and
                communication needs
              </p>
            </article>
          </div>
        </div>
      </div>
      <div class="contents" id="goals">
        <section className={`nill${slide && "SlideIn"}`}>Our Portfolio</section>
        <section className={`nill${slide && "products"}`}>
          <span className="pro">
            <a href="https://otenro.com/">
              <h4 className={`nill${slide && "link"}`}>WWW.OTENRO.COM</h4>
              <img
                className={`nill${slide && "otenro"}`}
                src={otenro}
                alt="Otenro"
              />
            </a>
          </span>
          <span className="pro">
            <a href="https://appmaker.ideamart.io/">
              <h4 className={`nill${slider && "link"}`}>
                APPMAKER.IDEAMART.IO
              </h4>
              <img
                className={`nill${slider && "appmaker"}`}
                src={appmaker}
                alt="Appmaker"
              />
            </a>
          </span>
        </section>
      </div>
      <div class="contents" id="hiring">
        <div className="container">
          <div className="textbox">
            <h2>We Are Hiring</h2>
            <span>
              Join Us to be a part of our Dynamic team and Serve our valuable
              Clients furthermore.
            </span>
            <a className="button" href="#popup1">
              <div className="button">
                <div className="Text">Sales Executive</div>
                <span id="icon" className="material-icons">
                  &#xf1df;
                </span>
              </div>
            </a>
          </div>
          <img src={working} alt="Hiring" />
        </div>
        <div id="popup1" class="overlay">
          <div class="popup">
            <a class="close" href="#hiring">
              ×
            </a>
            <img src={notice} alt="Hiring" />
          </div>
        </div>
      </div>
      <div class="contents" id="contact">
        <h2 className="us">Contact Us</h2>
        <input type="text" id="fname" required placeholder="Name" />
        <br />
        <input type="email" id="email" placeholder="Email" required />
        <br />
        <textarea type="text" id="message" placeholder="Message" />
        <br />
        <div className="submit" onClick={sendContact}>
          <text className="submitting">Submit</text>
        </div>
        <div className="Details_parent">
          <div className="details">
            <b>Address</b>
            <em>
              No. 488 Kotte Road,
              <br />
              Pittakotte. <br />
            </em>
            <br />
            <b>Telephone</b> <em>+94 117 431232</em> <br />
            <b>Email</b> <em>info@simatosolutions.com</em>
          </div>
        </div>
      </div>
      <div class="contents" id="about">
        <div className="container_2">
          <div className="textbox_2">
            <h2>About Us</h2>
            <img src={team} alt="Team work" />
            <span>
              Simato is a team of professionals spearheading a wide range of
              proficient services and solutions. Our expertise on Mobile and
              fixed Telecommunication, Trending content solutions, Web
              Developement and Value Added Services along with our Talented and
              Creative team can help <b>You</b> tackle any problem along your
              way to make
              <em>
                <b>Your</b> business a success story.
              </em>
              <br />
              With our worldwide networks and alliances we are able to stay
              ahead of latest technology and trends in order to establish the
              most unique solutions <em>just for you</em>.
            </span>
            <p>
              <em className="last">
                We are your Ideal Business Solutions Provider!
              </em>
            </p>
          </div>
        </div>
        <footer>Remake by L. &nbsp; 2021</footer>
      </div>
    </div>
  );
}

export default App;
