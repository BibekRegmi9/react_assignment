import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const[userName, setUserName] = useState("")

    const onChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/main')
    }

  return (
    <div className='main'>
        <div className='form'>
            <div className='title'>
                <h1>Github Profile</h1>
                <p>Generate your Profile</p>
            </div>


            <div className='login'>
                <input type="text" value={userName} placeholder='Github Username' onChange={onChangeHandler}/>
                
                <button onClick={() => handleClick()} className='btn'>Generate</button>
            </div>
        </div>
    </div>
  )
}

export default Home