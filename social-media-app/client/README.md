# 컴포넌트
- 유저인증
AuthContext.js
AuthProvider.js (user state 관리)
AuthRequired.js 

- 계정
Login.js
Register.js (회원가입)
Accounts.js (정보수정)

- 게시물
ArticleCreate.js    (게시물 작성)
ArticleList.js  (게시물 전체보기)
ArticleView.js  (게시물 한개보기)
Feed.js (팔로우하는 유저의 게시물 보기)

- 댓글
Commnets.js

- 검색
Search.js   (유저검색)

- 프로필
Profile.js
FollowersList.js
FollowingList.js

- 404페이지
NotFound.js

- 기타  (합성용 컴포넌트)
Layout.js   (레이아웃 (navigation, header, footer) 컴포넌트를 감싸는 용도. 안에 있는 contents만 바뀐다)
Avatar.js   (아바타 : 유저의 사진과 이름)
ArticleTemplate.js  (게시물 템플릿)
Carousel.js (캐러셀 : 이미지 옆으로 넘기기)
Modal.js    (모달)

# 유틸리티 함수
- 데이터 가져오기
fetchData.js