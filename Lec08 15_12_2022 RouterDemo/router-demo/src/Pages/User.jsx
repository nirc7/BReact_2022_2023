import React from 'react';
import { useLocation } from 'react-router-dom';

export default function User() {
  const { state } = useLocation();
  let userObj = state;
  console.log(userObj.userId);

  return (
    <div>
      User <br />
    </div>
  )
}
