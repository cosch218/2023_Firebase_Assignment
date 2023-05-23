import { createSlice } from '@reduxjs/toolkit'
import { signOut } from 'firebase/auth';
import { auth } from '../database/firebase';

export const userSlice = createSlice({
  name: 'user',
  // initialState 에서 사용할 값 : name, email, photo, uid
  initialState: null,
  reducers: {
    // 구글 인증에 관한 메소드를 컴포넌트 또는 리덕스 슬라이스에서 진행할 수 있다
    // 둘 다 동일한 결과이므로 어느 방법을 선택해도 괜찮다
    // 컴포넌트에서 진행 : createUser(회원가입), loginUser(로그인)
    // 리덕스 슬라이스에서 진행 : logoutUser(로그아웃)

    // reducers 안의 메소드에서는 state에 값을 할당하는 내용 작성

    loginUser: (state, action) => {// >> 컴포넌트에서 user 호출해서 로그인 하는 방식
      // action.payload로 전달할 내용 : {name, email, photo, uid}
      console.log(action.payload);
      // state의 값을 전체로 바꾸는 것은 리덕스 툴킷에서 막아두었으므로, 전체 값을 바꿀 때는 return으로 수정하거나 return action.payload로 접근
      // * state의 속성값의 일부(=initialState에 객체로 설정해둔 state)를 바꿀 때는 직접 접근해서 바꿀 수 있다
      // 로그인을 다룰 때는 보통 initialState 값을 null로 다루기 때문에 주의해야할 점
      return action.payload;
    }, 
    logoutUser: () => {
      return null;
    }
  }
})


// 로그아웃을 사요하기 위한 리덕스 미들웨어
export const logoutMiddleware = () => (dispatch) => {
  signOut(auth).then(() => {
    // Sign-out successful.
    // 미들웨어 함수 안에서는 훅을 사용할 수 없기 때문에 logout 기능을 사용할 실제 컴포넌트에서 useNavigate 훅을 사용하는 방식으로 구현해야 함
    dispatch( logoutUser() );
  }).catch((error) => {
    // An error happened.
  });
}

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;