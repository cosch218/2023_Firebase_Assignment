import React from 'react'
import { auth } from '../database/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import MyBtn from '../features/MyBtn';

export default function LogoutComp() {
  const navigate = useNavigate();

  const user = auth.currentUser;

  const onLogoutUser = () => {
    signOut(auth);
    console.log(user);
    navigate('/');
}

  return (
    <div>
      <MyBtn
        onClick={ onLogoutUser }
      >
        로그아웃
      </MyBtn>
    </div>
  )
}
