import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();


  const btngo2User = () => {
    let userObj = {
      userId: 17,
      userName: "avi"
    };

    navigate('/user' ,
      { state: userObj });
  }

  return (
    <div>
      Home <br />
      <button onClick={btngo2User} >go 2 User</button>
    </div>
  )
}
