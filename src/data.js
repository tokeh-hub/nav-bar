import React from "react";
import { FaBehance,FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";

 export const links = [
    {
        id:1,
        url:'/',
        text:'Home'
    },
    {
        id:2,
        url:'/about',
        text:'About'
    },
    {
        id:3,
        url:'/projects',
        text:'Projects'
    },
    {
        id:4,
        url:'/contact',
        text:'Contact'
    }
]

export const socials =[
    {
        id:1,
        url:'https://www.twitter.com',
        icon: <FaTwitter/>
    },
    {
        id:2,
        url:'https://www.twitter.com',
        icon: <FaBehance/>
    },
    {
        id:3,
        url:'https://www.twitter.com',
        icon: <FaLinkedin/>
    },
    {
        id:4,
        url:'https://www.twitter.com',
        icon: <FaFacebook/>
    }
]