import photo from "../assets/Odizee-Suit.jpeg";
import "./styles/CompStyle.scss";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone-call.png";

const Background = () => {
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
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Next</li>
          <li>Wordpress</li>
          <li>Redux</li>
        </ul>
      </div>
      <div className="hobbies">
        <h4>Hobbies</h4>
        <hr />
        <ul>
          <li>Football</li>
          <li>Reading</li>
          <li>Binge Watching movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Background;
