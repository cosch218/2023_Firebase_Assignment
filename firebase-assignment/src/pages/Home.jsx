import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyBtn from '../features/MyBtn';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <p>로그인에 실패하면 HOME으로 돌아옵니다</p>
      <MyBtn 
        onClick={() => {navigate('/loginform')}}
      >
        로그인
      </MyBtn>
    </div>
  )
}
