import photo from "../assets/Odizee-Suit.jpeg";
import "./styles/CompStyle.scss";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone-call.png";
import ProgressBar from "./ProgressBar";
import Soccer from "./svg/Soccer";
import { useState } from "react";
import Movie from "./svg/Movie";
import Reading from "./svg/Reading";

const Background = () => {
  const [showAnim, setShowAnim] = useState({
    ball: false,
    tv: false,
    read: false,
  });

  return (
    <div className="background">
      <div className="header">
        <div className="image">
          <img src={photo} alt="" />
        </div>
        <div className="intro">
          <div className="details">
            <h2>
              Odiri <span>Ighogboja</span>
            </h2>
            <h3>Frontend Developer</h3>
          </div>
          <div className="contact">
            <div className="contact__item">
              <img src={phone} alt="" /> <p>08096294786</p>
            </div>
            <div className="contact__item">
              <img src={mail} alt="" /> <p>odizeeplatform@gmail.com</p>
            </div>
            <div className="contact__item">
              <img src={location} alt="" />
              <p>43 Moronfolu street Akoka, Lagos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me">
        <h4>About me</h4>
        <hr />
        <p>
          A business oriented frontend developer with high intellectual,
          analytical and creative abilities, as well as excellent leadership and
          organizational skills. An effective communicator with strong
          interpersonal and people management skill, also possessing a high
          level of curiosity and ability to learn quickly.
        </p>
      </div>
      <div className="skills">
        <h4>Skills</h4>
        <hr />
        <ul>
          <li>
            HTML{" "}
            <span>
              <ProgressBar done="90" />
            </span>
          </li>
          <li>
            CSS{" "}
            <span>
              <ProgressBar done="90" />
            </span>
          </li>
          <li>
            Javascript{" "}
            <span>
              <ProgressBar done="80" />
            </span>
          </li>
          <li>
            React{" "}
            <span>
              <ProgressBar done="80" />
            </span>
          </li>
          <li>
            Next{" "}
            <span>
              <ProgressBar done="80" />
            </span>
          </li>
          <li>
            Wordpress{" "}
            <span>
              <ProgressBar done="75" />
            </span>
          </li>
          <li>
            Redux
            <span>
              <ProgressBar done="75" />
            </span>
          </li>
        </ul>
      </div>
      <div className="hobbies">
        <h4>Hobbies</h4>
        <hr />
        <ul>
          <li>
            <p onClick={(e) => setShowAnim({ ball: !showAnim.ball })}>
              Football
            </p>{" "}
            {showAnim.ball && <Soccer />}
          </li>
          <li>
            <p onClick={(e) => setShowAnim({ tv: !showAnim.tv })}>
              Binge Watching movies
            </p>
            {showAnim.tv && <Movie />}
          </li>
          <li>
            <p onClick={(e) => setShowAnim({ read: !showAnim.read })}>
              Reading
            </p>
            {showAnim.read && <Reading />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Background;
