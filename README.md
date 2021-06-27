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

- ### client
  npx create-react-app client
  yarn add styled-components react-router-dom @apollo/client graphql
