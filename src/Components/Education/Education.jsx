import lady from "../../assets/Office_lady.png";
import gent from "../../assets/Office_gentleman.png";
import teacherAvatar from "../../assets/teacher-avatar.jpg"; // Add your avatar image
import "./Education.css";

export default function Education() {
  return (
    <div className="education">
      <section className="lady education_card">
        <div className="image">
          <img src={lady} alt="Teacher" className="main-image1" />
          <h4 className="info_card">Train Teachers</h4>
        </div>

        <div className="content">
          <h2>Best Education platform</h2>
          <p>
            Looking for top quality education? We offer a diverse range of
            courses, expert instructors, and flexible learning options. Whether
            you&apos;re a beginner or advanced learner, we&apos;ve got you covered.
          </p>
          <button className="primary_btn">Read more</button>
        </div>
      </section>

      <section className="gent education_card">
        <div className="image">
          <img src={gent} alt="Teacher" className="main_image" />
          <div className="info_card">
            <img src={teacherAvatar} alt="Teacher" className="avatar" />
            <h2>8K+</h2>
            <h3>Teachers</h3>
          </div>
        </div>
        <div className="content">
          <h2>Best Education platform</h2>
          <p>
            Looking for top quality education? We offer a diverse range of
            courses, expert instructors, and flexible learning options. Whether
            you&apos;re a beginner or advanced learner, we&apos;ve got you covered.
          </p>
          <button className="primary_btn">Read more</button>
        </div>
      </section>
    </div>
  );
}
