import photo from "../assets/Odizee-Suit.jpeg";
import "./styles/CompStyle.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="image">
        <img src={photo} alt="" />
      </div>
      <div>
        <div className="details">
          <h2>
            Odiri <span>Ighogboja</span>
          </h2>
          <h4>Frontend Developer</h4>
        </div>
        <div className="contact">
          <div className="contact__item">
            <span>Image</span> <p>08096294786</p>
          </div>
          <div className="contact__item">
            <span>Image</span> <p>odizeeplatform@gmail.com</p>
          </div>
          <div className="contact__item">43 Moronfolu street Akoka, Lagos</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
