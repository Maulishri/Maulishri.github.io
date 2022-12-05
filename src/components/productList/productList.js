import React from 'react';
import "./productList.css"
import Product from "../product/product"
import {project} from "../../data"

function productList() {
  return( 
    <div className='list'>
        <div className='text'>
            <div className='proj-title'>
                My Projects
            </div>
        </div>
        <div className='p-cards'>
            {project.map((item) => (
                <Product 
                    img={item.img}
                    link={item.link}
                    desc={item.desc}
                    title={item.title}
                    tech={item.tech}
                />
            ))}
        </div>
    </div>
  )
}

export default productList;
