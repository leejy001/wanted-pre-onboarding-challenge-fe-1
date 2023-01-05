<div align="center">

# Todo List <br/> 프론트 페이지 구현

<b> 원티드 프론트엔드 프리온보딩 챌린지 1차 </b>

<p>
  <img src="https://img.shields.io/badge/React-^18.2.0-61DAFB?style=flat&logo=React&logoColor=white"/> 
  <img src="https://img.shields.io/badge/typescript-^4.9.4-3178c6?style=flat&logo=typescript&logoColor=white"/>
  <img alt="Styled Components" src="https://img.shields.io/badge/Styled Components-5.3.6-green.svg">
  <br/>
  <img src="https://img.shields.io/badge/Javscript-F7DF1E?style=flat&logo=Javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS-DD3A0A?style=flat&logo=CSS3&logoColor=white"/>
</p>

</div>

## 📒 Project
[원티드 프론트엔드 프리온보딩 챌린지 1차 프로젝트 명세](https://github.com/syoungee/wanted-pre-onboarding-challenge-fe-1-api)

```
- Todo List 서비스입니다.
- 회원가입과 로그인 절차가 구현되어 있습니다.
- 게시글 CRUD 기능이 구현되어 있습니다.
```

## 📷 프로젝트 시연 및 구현 기능
<table>
   <tr>
     <th align="center">
       <img width="480" alt="1" src="https://user-images.githubusercontent.com/49552804/210688109-be1c943c-7b8b-4f1c-9be8-6dd2c4384579.gif"/>
     </th>
     <th align="center">
       <img width="480" alt="2" src="https://user-images.githubusercontent.com/49552804/210688307-55dc52d3-31f9-4a77-aa11-87a6cc04f3bc.gif"/> 
    </th>
  </tr>
</table>

```
1. 회원 가입(인증), 로그인 (localhost:3000/auth)
아래의 링크에서 회원 가입 후 token을 부여받아 로그인 가능
이메일, 비밀번호 validation check false시 버튼 비활성화, true시 버튼 활성화
```

<table>
   <tr align="center">
     <th align="center">
       <img width="480" alt="1" src="https://user-images.githubusercontent.com/49552804/210689261-7ad2cd9f-db86-4570-b43f-87e9d6362ff3.gif"/>
     </th>
  </tr>
</table>

```
2. Todo List (localhost:3000/todo)
로그인 성공 시 Todo List 페이지로 이동
로그아웃 버튼을 누르면 로컬 스토리지 token이 삭제되며 /auth로 이동
Todo Item 호버시 삭제 아이콘이 뜨며 클릭 시 해당 기능 동작

3. Todo 상세 페이지 (localhost:3000/todo/:id)
Todo List에서 Todo Item을 클릭하면 상세 페이지로 이동
뒤로 버튼을 통해 빠져나올 수 있음
상세 페이지에서 수정하기 버튼을 누르면 todo 수정할 수 있도록 input ReadOnly 속성 변경
수정 완료 버튼을 누르면 todo 수정되어 적용

4. todo 생성 페이지 (localhost:3000/todo/add)
Todo 페이지에서 추가하기 버튼을 누르면 Todo 생성 페이지로 이동
title, content를 입력후 추가하면 Todo List에 Todo 추가

5. 기타 주의 사항
프로젝트 명세 링크의 서버를 띄우고 프로그램을 실행해주세요
```

## 파일 경로

```
src
 ┣ api
 ┃ ┣ signApi.ts
 ┃ ┗ todoApi.ts
 ┣ components
 ┃ ┣ Home.tsx
 ┃ ┣ SignIn.tsx
 ┃ ┗ SignUp.tsx
 ┣ pages
 ┃ ┣ AddTodo.tsx
 ┃ ┣ DetailTodo.tsx
 ┃ ┣ Main.tsx
 ┃ ┗ Todo.tsx
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┗ PrivateRoute.tsx
```

## 실행 방법

서버
```
yarn && yarn start
```
클라이언트
```
npm install && npm start
```
localhost환경에서 서버는 port번호 8080, 클라이언트는 port번호 3000을 사용<br/>
