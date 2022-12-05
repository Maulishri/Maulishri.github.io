import React from 'react';
import './product.css'
const github = "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"

export default function product({img,link,title,desc,tech}) {
  return (
    <div className="card">
      
      <div className='title'>{title}</div>
      <div className="image">
        <img src={img} alt="project"/>
      </div>
      <div className="details">
        <div className="center">
            <div>{desc}</div>
              <a href={link}> <img src={github} alt="github" aria-hidden="true"></img> </a>
        </div>
      </div>
    </div>
  )
}
