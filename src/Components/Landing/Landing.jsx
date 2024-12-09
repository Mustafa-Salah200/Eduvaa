import './Landing.css'
import image from '../../assets/study.jpg'
const Landing = () => {
  return (
    <section className="landing">
      <div className="main">
        <h1>Don&apos;t just dream learn with us</h1>
        <p>Education is the foundation for personal and social growth.It</p>
        <p>
          fosters critical thinking , creativity and problem-solving skills.
        </p>
        <button className="primary_btn">Read more</button>
      </div>


      <div className="image">
          <img src={image} alt="a girl studying" />
      </div>
    </section>
  );
};

export default Landing;
