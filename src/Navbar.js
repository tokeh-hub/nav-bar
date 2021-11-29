import React from 'react'
import {useState, useRef,useEffect} from 'react'
import {FaBars,FaTwitter} from 'react-icons/fa'
import logo from './logo.svg'
import {links,socials} from './data'
export default function Navbar() {
    const [showLinks,setShowLinks] = useState(false)
    const linksRef = useRef(null)
    const linksContainerRef = useRef(null)
    
    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight + 9}px` 
        }
        else{
            linksContainerRef.current.style.height = '0px'
        }
    },[showLinks])
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo'></img>
                    <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}>
                        <FaBars/>
                    </button>
                </div>
                
                    <div className='list-container' ref={linksContainerRef}>
                    <ul className='list' ref={linksRef}>
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
                
                
                
                <ul className='social-icons'>
                    {socials.map(social=>{
                        const {id,url,icon} = social
                        return(
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
