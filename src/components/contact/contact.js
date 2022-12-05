import "./contact.css";
import Email from '../../image/email.png'
import { contact } from "../../data";

const mailto = "mailto:"+ contact.email;

export default function Contact() {
  return (
    <div className='contact'>
        <div className='c-left'>
            <div className='c-left-wrapper'>
                <div className='contact-title'>Contact</div>
                <div className="contact-desc">Feel free to connect and send in your queries</div>

                {/* //email */}
                <div className='c-info-item'>
                    <div className="c-info-item-l">
                        <img
                            className='c-icon'
                            alt="details"
                            src='https://img.icons8.com/color/48/000000/gmail.png'
                        />
                    </div>
                    <div className="c-info-item-r">
                        <a href={mailto} target="_blank" rel="noreferrer">
                            {contact.email}
                        </a>
                    </div>
                </div>

                {/* //linkedIn */}
                <div className='c-info-item'>
                    <div className='c-info-item-l'>
                        <img
                            className='c-icon'
                            alt="details"
                            src='https://img.icons8.com/color/48/000000/linkedin.png'
                        />
                    </div>
                    <div className="c-info-item-r">
                        <a href={contact.linkedIn} target='_blank' rel='noopener noreferrer'>
                            {contact.userID}
                        </a>
                    </div>
                </div>

                {/* //home */}
                <div className='c-info-item'>
                    <div className='c-info-item-l'>
                        <img
                            className='c-icon'
                            alt="details"
                            src='https://img.icons8.com/color/48/000000/home.png'
                        />
                    </div>
                    <div className="c-info-item-r">
                        {contact.address}
                    </div>
                </div>
                
            </div>
        </div>

        <div className='c-right'>
            <div className='c-right-wrapper'>
                <img className="c-img" src={Email} alt='email'></img>
            </div>
        </div>
    </div>
  )
}

