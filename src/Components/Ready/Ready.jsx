import metting from '../../assets/metting.jpg'
import './Ready.css'


const Ready = () => {
  return (
    <div className='ready'>
        <div className="info">
            <h1>Get Ready to learn and Grow your Skill</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quos praesentium veritatis incidunt tempore perferendis illo culpa optio vitae cupiditate harum ea delectus magni possimus corrupti, reiciendis, odit aperiam nisi?</p>
            <button className='primary_btn'>Get Start Now</button>
        </div>
        <img src={metting} alt="" />
    </div>
  )
}

export default Ready