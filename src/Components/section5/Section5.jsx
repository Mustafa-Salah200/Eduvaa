import Card from "../../utilit/Card";
import "./Section5.css";

const Section5 = () => {
  return (
    <div className="review_container">
      <div className="review">
        <div className="top">
          <h1>What Our Student Say</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            necessitatibus dignissimos ratione qui numquam possimus incidunt
            corporis ipsam magnam soluta!
          </p>
        </div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Section5;
