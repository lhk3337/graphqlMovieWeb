# GraphQL과 Apollo를 이용하여 웹서비스 만들기

## 사용한 기술

- ### Server

  - graphQL-Yoga
  - bebel
  - nodemon

- ### Client

  - styled-component
  - react-router-dom
  - react apollo

## 설치

- ### server

  yarn add graphql-yoga <br/>
  yarn add @babel/cli @babel/core @babel/node @babel/preset-env <br/>
  위의 두 항목 설치 후 .babelrc파일 생성 후 아래 내용 복사 붙여 넣기

  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

  yarn add node-fetch : nodejs환경에서 fetch를 사용할 수 있게 해주는 라이브러리(REST API를 불러오게 하기 위해 사용)
  yarn add axios : fetch에서 axios로 변경

- ### client
  npx create-react-app client
  yarn add styled-components react-router-dom @apollo/client graphql

index.js, db.js, resolver.js, schema.graphql로만 API를 만들 수 있음
