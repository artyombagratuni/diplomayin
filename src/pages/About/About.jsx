import "./About.css";

const AboutPage = () => (
  <div className="about-container">
    <div className="about">
      <div className="about-title">About Us</div>
      <img
        className="shop-picture"
        src="https://www.nowherebookshop.com/sites/nowherebookshop.com/files/pictures/IMG_5270_jpg.JPG"
      />
      <div className="welcome-text">Welcome to Imagine Book Shop</div>
      <div className="about-description">
        Founded by bestselling author, Artyom Bagratuni, Imagine Bookshop is a
        new independent bookstore now open at Yerevan, Armenia. Featuring new
        books, author events, unique gifts, and a coffee, wine and beer bar,
        Imagine Bookshop aims to be a space for folks to gather to share their
        passion for the written word. Imagine Bookshop's name is inspired by
        that feeling you get when lost in a good book. According to Artyom:
        "Growing up I spent more time in the land of books than I did in real
        life. I lived in those neverlands that you can only visit in stories.
        The places you grew up in that never actually existed. The ones you got
        lost in and the ones you found yourself in. Those strange countries that
        are real and important, in spite of the fact that they exist Imagine at
        all but inside you."
      </div>

      <div className="shop-info-container">
        <div className="shop-info">
          <span className="shop-info-title">Our Address: </span> Hrachya Qochar
          2A
        </div>
        <div className="shop-info">
          <span className="shop-info-title">Our Phone Number: </span> (+374)
          55-86-38-68
        </div>
        <div className="shop-info">
          <span className="shop-info-title">Our Email: </span>
          imaginebookshop@gmail.com
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
