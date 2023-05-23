import React from 'react'

import MyBtn from '../features/MyBtn';

import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../slice/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const user = useSelector((state)=>(state.user));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>MAIN</h1>
      <p>로그인에 성공하였습니다</p>
      <p>{user && user.email}</p>
      <MyBtn 
        onClick={()=>{
          dispatch(logoutUser())
          navigate('/')
        }}
      >
        로그아웃
      </MyBtn>
    </div>
  )
}
