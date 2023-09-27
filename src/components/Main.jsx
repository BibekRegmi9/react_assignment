import {React} from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { PiTwitterLogoLight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import {BsGlobe} from "react-icons/bs"


const Main = ({ data }) => {

 
  return (
    <>
    <div  id="main">
      <div className="top">
        <a href="/">
          <h1>
            <BiArrowBack />
          </h1>
        </a>

        <button>Hire Me</button>
      </div>

<br />

      <img className="image" src={data.avatar_url} alt="" />

      <div className="main-container">
        <div className="nameSection">
          <h1>{data.name}</h1>
          <h4>{data.login}</h4>
        </div>

        <div className="detailsSection">
          <div className="sectionLeft">
            <h1>{data.followers}</h1>
            <p>Followers</p>
          </div>

          <div className="sectionMiddle">
            <h1>{data.following}</h1>
            <p>Following</p>
          </div>

          <div className="sectionRight">
            <h1>{data.public_repos}</h1>
            <p>Repositories</p>
          </div>
        </div>

        <div className="bottom-box">
          <div className="cardLeft">
            <div className="leftPart">
              <AiOutlineMail /> <span>Email</span>
              <h4>{data.email}</h4>
              <br />

              <CiLocationOn /> <span>location</span>
              <h4>{data.location}</h4>
              <br />

              <PiTwitterLogoLight /><span>Twitter</span>
              <h4>{data.twitter_username}</h4>
            </div>


            <div className="rightPart">
              <HiOutlineBuildingOffice2 /> <span>Organization</span>
              <h4>{data.company}</h4>
              <br />

              <MdDateRange/> <span>Joined Date</span>
              <h4>{data.created_at}</h4>
              <br />

              <BsGlobe/><span>Website</span>
              <h4>{data.blog}</h4>
            </div>
          </div>
          
          <div className="cardRight">
            <h4>Bio</h4>
            <p>{data.bio}</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Main;
