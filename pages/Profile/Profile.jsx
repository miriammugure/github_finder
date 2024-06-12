import React from 'react'
import { FaGithub } from "react-icons/fa";
import { ImOffice } from 'react-icons/im';
import { PiMapPinFill } from "react-icons/pi";
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { BsBoxArrowUpRight } from "react-icons/bs";

import './Profile.css';
function Profile() {
  return (
    <div>
        <div className="profileContainer">
        <div className="profile">
            <div className="person">
            <div className="profileImage">
            <img src="" alt="" />
            </div>
            <div className="name">
                <p>name here</p>
                <p>username</p>
            </div>
            <div className="github">
                <p>how people build software</p>
            </div>
      
      <div className="redirect">
         <BsBoxArrowUpRight />
     
      <a href="">view on github</a>
      </div>
      <div className="location">
      <PiMapPinFill />
       <p>location here</p>
      </div>
    <div className="repo">
        <RiGitRepositoryFill/>
        <p>repository number repositories</p>
    </div>
    <div className="followers">
        <IoIosPeople />
        <p>this followers</p>
    </div>
    <div className="following">
    <IoIosPeople />
    <p>this following</p>
    </div>
            </div>
           

      </div>
      <div className="details"></div>
        </div>
      
    </div>
  )
}

export default Profile
