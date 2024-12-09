import './Courses.css'
import { info } from '../../info.js'
import { IoMdStar } from "react-icons/io";

const Courses = () => {
  return (
    <div className='courses'>
        <div className="top">
        <h1>Our Top Courses</h1>
            <div className="top_list">
                <h2>Graphic Design</h2>
                <h2>Web Design</h2>
                <h2>Digital Marketing</h2>
                <h2>Life Style</h2>
            </div>
        </div>
        <div className="courses_box">
        {
            info.map((item, index) => {
                return (
                        <div className="box" key={index}>
                            <div className="cover">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="des">
                                <h3>{item.des}</h3>
                            <div className="price">{item.price}</div>
                            </div>
                            <div className="info">
                                <div className="profile-img">
                                    <img src={item.profile} alt="" />
                                </div>
                                <h3>{item.name}</h3>
                                <div className="stars">
                                    <div className="star">
                                    <IoMdStar style={{color: "#ecc901" , fontSize: "25px"}}/>
                                    </div>
                                    <h3>{item.star}</h3>
                            </div>
                        </div>
                    </div>

            )
            })
            }
        </div>
    </div>
  )
}

export default Courses