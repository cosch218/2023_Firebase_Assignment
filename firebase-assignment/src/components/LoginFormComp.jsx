import React, { useState } from 'react'

import { auth } from '../database/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import MyBtn from '../features/MyBtn';

export default function LoginFormComp() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState(null);

  // 회원가입 이벤트 메소드
  const onCreateUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      setUser({
        userEmail: user.userEmail,
        userPassword: user.userPassword
      })
      onLoginUser();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`errorCode : ${errorCode} / errorMessage : ${errorMessage}`);
      if (errorCode == "auth/email-already-in-use") {
        alert('동일한 이메일이 있습니다');
      } else if (errorCode == "auth/weak-password") {
        alert('비밀번호를 6자리 이상 적어주세요')
      }
    });
  }

  // 로그인 이벤트 메소드
  const onLoginUser = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      setUser({
        userEmail: user.userEmail,
        userPassword: user.userPassword
      })
      navigate('/main');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`errorCode : ${errorCode} / errorMessage : ${errorMessage}`);
      if (errorCode == "auth/wrong-password" || errorCode == "auth/user-not-found" ) {
        alert('아이디가 존재하지 않거나 비밀번호가 일치하지 않습니다')
      }
      navigate('/');
    });
  }

  return (
    <div>
      <form action=""
        onSubmit={ onCreateUser }
      >
        <label htmlFor="">이메일</label>
        <input type="email" required
          onChange={(e)=>{setUserEmail(e.target.value)}}
        />
        <br />
        <label htmlFor="">비밀번호</label>
        <input type="password" required
          onChange={(e)=>{setUserPassword(e.target.value)}}
        />
        <br />
        <div style={{marginTop: "10px"}}>
          <MyBtn 
            type='submit'
            bgcolor='#09883e'
          >
            회원가입
          </MyBtn>
          <MyBtn 
            type='button'
            bgcolor= '#1044b6'
            marginL= '10px'
            onClick={ onLoginUser }
          >
            로그인
          </MyBtn>
        </div>
      </form>
    </div>
  )
}
