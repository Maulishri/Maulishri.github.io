import './about.css'
import Book from '../../image/book.png'
import {education} from '../../data'
import GradHat from '../../image/gradhat.png'
export default function about() {
  return( 
    <div className='about'>
        <div className='a-left'>
          <div className='a-left-wrapper'>
            <div className='a-title'>Education</div>
            {
              education.map((data)=>(
                <div className='a-education'>
                  <div className='a-edu-icon'>
                    <img
                        className='a-icon'
                        alt="details"
                        src={GradHat}
                    />
                  </div>
                  <div className='a-edu-data'>
                    <div><b>{data.year}</b></div>
                    <div>{data.degree}</div>
                    <div>{data.institute}</div>
                  </div>
                </div>
              ))
            }            
          </div>
        </div>

        <div className='a-right'>
          <div className='a-right-wrapper'>
            <img className="a-img" src={Book} alt='book'></img>
          </div>
        </div>
    </div>
  )
}
