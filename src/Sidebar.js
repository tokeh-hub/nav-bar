import React from 'react'
import {links} from './data'

export default function Sidebar() {
    return (
        <div className='list-container show-container'>
                    <ul className='list'>
                         {links.map(link => {
                             const {id,url,text} = link;
                             return(
                                  <li key={id}>
                                     <a href={url}>{text}</a>
                                  </li>
                             )
                         })}
                    </ul>
                </div>
    )
}
