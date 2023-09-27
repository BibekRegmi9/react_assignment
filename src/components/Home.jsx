import React, { useState } from "react";
import Main from "./Main";
const Home = () => {
//   const navigate = useNavigate();

//   const name = [data.name]


  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((originalData) => {
        if (originalData) {
          setData(originalData);
        }
      });

    console.log(data);
  };

  return (
    <>
    <div className="main">
      <div className="form">
        <div className="title">
          <h1>Github Profile</h1>
          <p>Generate your Profile</p>
        </div>

        <form onSubmit={onSubmitHandler}>
          <div className="login">
            <input
              type={userName}
              placeholder="Github Username"
              onChange={onChangeHandler}
            />

            <a href="#main"><button className="btn">Generate</button></a>
          </div>
        </form>
      </div>
      
    </div>

    
<Main data={data}/>
    </>
  );
};

export default Home;
