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
- Todo CRUD 기능이 구현되어 있습니다.
```

## 📷 프로젝트 시연 및 구현 기능

## 🔒 AUTH
### 회원가입
<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/49552804/213844865-a1ee233b-4b57-4453-8e47-423d224f81f5.gif"/>
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/49552804/213846258-fee0d66f-0363-491e-9b68-61652966e350.gif"/>
    </th>
  </tr>
</table>

```
email은 @와 .이 포함될 수 있도록, password는 영소문자, 숫자 포함 8~16자리로 유효성 검사를 구성했습니다.
비밀번호 확인을 통해 비밀번호를 정확히 입력했는지 검사하는 기능을 추가했습니다.
회원 가입 버튼을 누를 때 유효성 검사 실패 시, 에러 메시지를 보여줍니다.
```
### 로그인
<table>
   <tr>
    <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/49552804/213844870-b3224c04-1349-4190-9f68-d3d893dac8a7.gif"/>
    </th>
    <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/49552804/213846260-e1ade407-88c6-47a2-a60f-7bd9008051ce.gif"/>
    </th>
  </tr>
</table>

```
회원가입과 마찬가지로 email, password 유효성 검사를 구성했습니다.
각 Route에서는 JWT 토큰을 확인하여 로그인이 되면 자동으로 todo로 이동하며, 토큰이 없는 상태(로그아웃)라면 auth로 이동할 수 있도록 구현했습니다.
JWT는 localStorage에 저장하고 정보를 가져올 수 있는 유틸 함수를 구현했습니다.
재로그인 시 localStorage에 토큰이 남아있는 상태면 바로 todo로 넘어가도록 구현했습니다.
```

## 📃 TODO

### 할 일 목록 & 상세보기
<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/49552804/213846541-a31b70af-d02d-4777-b8d5-a1345e8ae16d.gif"/>
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/49552804/213846539-313c0e95-0f6e-468f-afd3-acebf81afa59.gif"/>
    </th>
  </tr>
</table>

```
로그인 성공 시 Todo List 페이지로 이동하며 Todo 컴포넌트 옆에 책갈피 형식으로 로그아웃 버튼과 시간 정보가 나와있습니다.
로그아웃 버튼을 누르면 로컬 스토리지 token이 삭제되며 auth로 이동하게됩니다.
할 일 아이템에 마우스를 호버하면 좌측 생성 날짜가 수정/삭제 버튼으로 바뀌게 됩니다.
할 일 목록을 클릭하면 해당 할 일의 상세한 정보를 DetailModal을 통해 확인할 수 있습니다.
```

### 할 일 추가 & 수정
<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/49552804/213846895-fe497c31-f09d-44e9-a8eb-aea9b828abe0.gif"/>
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/49552804/213846897-0926fcfd-5dba-4af8-bb9d-36e32b0174d5.gif"/>
    </th>
  </tr>
</table>

```
아래 더하기 버튼을 누르게 되면 할 일을 추가하는 PostModal을 구현했습니다.
PostModal은 modalType을 "edit", "add"를 받으며 type에 따라 수정, 추가로 기능이 나뉘어집니다.
수정의 경우 해당 할 일의 id를 받아와 모달창에 뿌려줍니다.
```

### 할 일 삭제 & 기타 기능
<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/49552804/213847061-8e60e50c-3e0e-44bd-be57-b747a423a1f4.gif"/>
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/49552804/213847062-2a5e33c8-8f12-4626-8459-82cf718a5f28.gif"/>
    </th>
  </tr>
</table>

```
삭제 버튼을 누르면 RemoveModal을 띄어줘 사용자의 의견을 재확인하도록 구현했습니다.
오른쪽 시간 이미지 아이콘에 마우스 호버시 현재 시간 정보를 보여주는 기능을 추가했습니다.
```

### ❗ 기타 주의 사항
프로젝트 명세 링크의 서버를 띄우고 프로그램을 실행해주세요

## 🛠 활용 기술

React + TypeScript을 이용하여 서비스 구현
CSS in JS 라이브러리인 Styled-components를 이용하여 React 컴포넌트 스타일링
react-toastify를 이용하여 토스트 메시지 기능 추가
React Query를 이용하여 서버 데이터 캐싱, 서버 상태를 간결하게 관리

## 🗃 파일 경로

<details>
<summary>
  <h3>최종 폴더 </h3>
</summary>

  ```
📦src
 ┣ 📂api
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜auth.ts
 ┃ ┗ 📜todo.ts
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂Container
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂ImageButton
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📂Modal
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂input
 ┃ ┃ ┗ 📂SignInput
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┗ 📂modal
 ┃ ┃ ┣ 📂DetailModal
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂PostModal
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📂RemoveModal
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┣ 📂hooks
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜useError.ts
 ┃ ┃ ┣ 📜useForm.ts
 ┃ ┃ ┗ 📜useSetTime.ts
 ┃ ┣ 📂sign
 ┃ ┃ ┣ 📜useSignInMutation.ts
 ┃ ┃ ┗ 📜useSignUpMutation.ts
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📂mutation
 ┃ ┃ ┃ ┣ 📜useAddTodoMutation.ts
 ┃ ┃ ┃ ┣ 📜useModifyTodoMutation.ts
 ┃ ┃ ┃ ┗ 📜useRemoveTodoMutation.ts
 ┃ ┃ ┗ 📂queries
 ┃ ┃ ┃ ┣ 📜useTodoQuery.ts
 ┃ ┃ ┃ ┗ 📜useTodosQuery.ts
 ┣ 📂lib
 ┃ ┗ 📜StringByFomatting.ts
 ┣ 📂pages
 ┃ ┣ 📂Auth
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂SignIn
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂SignUp
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┗ 📂Todo
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📂CraeteButton
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┣ 📂LogoutButton
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┣ 📂TimeTag
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┣ 📂Today
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┗ 📂TodoItem
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┣ 📂types
 ┃ ┣ 📜button.ts
 ┃ ┣ 📜error.ts
 ┃ ┣ 📜modal.ts
 ┃ ┣ 📜sign.ts
 ┃ ┗ 📜todo.ts
 ┣ 📂util
 ┃ ┣ 📜constants.ts
 ┃ ┣ 📜state.ts
 ┃ ┣ 📜toast.ts
 ┃ ┗ 📜validate.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜PrivateRoute.tsx
```

</details>

## 💻 실행 방법

서버
```
yarn
yarn start
```
클라이언트
```
npm install
npm start
```
localhost환경에서 서버는 port번호 8080, 클라이언트는 port번호 3000을 사용<br/>

## ⚙ 코드 리팩토링 Wiki
[`wiki`](https://github.com/leejy001/wanted-pre-onboarding-challenge-fe-1/wiki)
