import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { PiTwitterLogoLight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import {BsGlobe} from "react-icons/bs"

const Main = () => {
  return (
    <>
      <div className="top">
        <a href="/">
          <h1>
            <BiArrowBack />
          </h1>
        </a>

        <button>Hire Me</button>
      </div>

<br />

      <img className="image" src="/image.png" alt="" />

      <div className="main-container">
        <div className="nameSection">
          <h1>John Carter</h1>
          <h4>@username</h4>
        </div>

        <div className="detailsSection">
          <div className="sectionLeft">
            <h1>20</h1>
            <p>Followers</p>
          </div>

          <div className="sectionMiddle">
            <h1>4.5K</h1>
            <p>Following</p>
          </div>

          <div className="sectionRight">
            <h1>16</h1>
            <p>Repositories</p>
          </div>
        </div>

        <div className="bottom-box">
          <div className="cardLeft">
            <div className="leftPart">
              <AiOutlineMail /> <span>Email</span>
              <h4>xyz@gmail.com</h4>
              <br />

              <CiLocationOn /> <span>location</span>
              <h4>New York</h4>
              <br />

              <PiTwitterLogoLight /><span>Twitter</span>
              <h4>@john-4</h4>
            </div>


            <div className="rightPart">
              <HiOutlineBuildingOffice2 /> <span>Organization</span>
              <h4>Github Inc.</h4>
              <br />

              <MdDateRange/> <span>Joined Date</span>
              <h4>23 Mar, 2022</h4>
              <br />

              <BsGlobe/><span>Website</span>
              <h4>github.com</h4>
            </div>
          </div>
          
          <div className="cardRight">
            <h4>Bio</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum laudantium eveniet facere itaque odit, commodi modi dolore unde vero.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
