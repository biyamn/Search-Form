# 🏠 카카오API를 활용한 주소찾기 폼

<div align="center">
  <img src='https://github.com/biyamn/UP/assets/101965666/859f61a1-b810-4da7-97f0-e84f67383854' width="50%"/>
  <h4>블로그 포스팅: </h4>
</div>

<br>

## 프로젝트 실행 방법

```
$ npm install
$ npm run dev
```

<br>

## 프로젝트 소개

카카오API를 활용하여 만든 주소 입력 폼입니다.
<img src='https://github.com/biyamn/UP/assets/101965666/7b1b09f3-6c74-41ed-a8a3-040b96c14934'/>

<br>

## 기술스택 및 라이브러리

- React.js
- TypeScript
- styled-components
- Chakra UI
- react-daum-postcode

<br>

## 기능 소개

- 폼은 우편번호, 주소, 상세주소로 이루어져 있습니다.
- 우편번호와 주소 필드는 입력, 수정할 수 없습니다.
- 기본적으로 '배송지 저장하기' 버튼은 비활성화 상태입니다.
- 세개의 필드를 모두 입력할 시 '배송지 저장하기' 버튼이 활성화됩니다.
- '주소검색' 버튼을 누르면 검색 페이지로 이동합니다.
- 선택한 주소가 우편번호와 주소 필드에 들어갑니다.
- 주소를 선택하면 다시 메인 페이지로 돌아갑니다.

<br>

## 폴더구조

```
📦src
 ┣ 📂pages
 ┃ ┣ 📜Search.tsx
 ┃ ┗ 📜Success.tsx
 ┣ 📂utils
 ┃ ┗ 📜getAddress.ts
 ┣ 📜App.tsx
 ┗ 📜main.tsx
```

<br>

### 구현 기능 목록

- [x] 주소 찾기
  - [x] 카카오 API 연동
- [x] 페이지 이동
  - [x] '주소 검색' 버튼 클릭시 Search 페이지로 이동
  - [x] Search 페이지에서 검색창 렌더링
  - [x] Search 페이지에서 주소 선택시 메인페이지로 이동
- [x] 주소 필드
  - [x] 검색 결과 우편번호/주소 필드에 넣기
  - [x] 우편번호 필드 입력/수정 비활성화
  - [x] 주소 필드 입력/수정 비활성화
- [x] 제출폼이 유효할 시 '배송지 저장하기' 버튼 활성화
  - [x] 우편번호, 주소, 상세주소가 모두 입력되어야 활성화
  - [x] 제출폼이 유효하지 않을 시 버튼 비활성화
