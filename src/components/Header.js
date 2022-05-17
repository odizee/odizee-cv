import photo from "../assets/Odizee-Suit.jpeg";
import "./styles/CompStyle.scss";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone-call.png";

const Header = () => {
  return (
    <div className="header">
      <div className="image">
        <img src={photo} alt="" />
      </div>
      <div className="intro">
        <div className="details">
          <h2>
            Odiri <span>Ighogboja</span>
          </h2>
          <h4>Frontend Developer</h4>
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
  );
};

export default Header;
