import React from 'react';
import './intro.css'
import { user, contact } from '../../data'
import Profile from '../../image/profile.jpeg'

let github = "https://img.icons8.com/fluency/2x/github.png"
let instagram = "https://img.icons8.com/fluency/2x/instagram-new.png"
let linkedIn = "https://img.icons8.com/color/2x/linkedin-circled--v4.png"


export default function intro() {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-profile'>
                    <img className="i-img" src={Profile} alt='Profile Image'></img>
                </div>
            </div>

            <div className='i-right'>
                <div className='i-right-wrapper'>
                    <div className='i-intro'>{user.profession}</div>
                    <div className='i-name'>{user.name}</div>
                    <div className="desc">{user.desc1}</div>
                    <div className="desc">{user.desc2}</div>
                    <div className="desc">{user.desc3}</div>
                    <div className='i-button-wrapper'>
                        <div className='i-a'>
                            <a className="i-icon" href={contact.github}><img alt="GitHub Profile" src={github} ></img></a>
                        </div>
                        <div className='i-a'>
                            <a className="i-icon" href={contact.instagram}><img alt="Instagram Art" src={instagram}></img></a>
                        </div>
                        <div className='i-a'>
                            <a className="i-icon" href={contact.linkedIn}><img alt="LinkedIn Profile" src={linkedIn}></img></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
