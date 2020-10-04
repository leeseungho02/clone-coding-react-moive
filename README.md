## 📢 목적

- 해당 프로젝트는 노마드 코더 "ReactJS로 영화 웹 서비스 만들기" 강의를 클론 코딩 및 추가 개발로 리액트를 공부하는 프로젝트입니다.

## 📢 공부 내용

<details markdown="1">

<summary>📑 1. JSX & Props</summary>

#### JSX란?

Javascript XML이며 React의 렌더링 로직은 아래와 같은 UI 로직과 본질적으로 연결되어있다는 사실을 포함합니다.

- 이벤트 처리 방식
- 시간에 따른 상태 변화 방식
- 화면을 위한 데이터 준비 방식
- JSX는 주입 공격을 방지합니다.
- JSX는 객체를 표현합니다.

#### Props란?

상위 컴포넌트에서 하위 컴포넌트로 전달하는 데이터

- 사용법 : props 값은 태그의 속성을 설정해주는 것
``` javascript
import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <HelloWorld name="환영합니다. 리액트 짱짱맨" />
    );
  }
}

export default App;
```

#### PropTypes란?

컴포너넌트의 props에 지정한 데이터 타입과 다른 타입의 값이 들어왔을 때 오류로 그 내용을 표시해준다.

- 설치법
> npm i prop-types

#### 참고 사이트

[JSX 소개](https://ko.reactjs.org/docs/introducing-jsx.html) <br>
[JSX 이해하기](https://ko.reactjs.org/docs/jsx-in-depth.html) <br>
[Props 사용법](https://ko.reactjs.org/tutorial/tutorial.html#passing-data-through-props) <br>
[PropTypes를 사용한 타입 검사](https://ko.reactjs.org/docs/typechecking-with-proptypes.html) <br>

</details>

<details markdown="2">

<summary>📑 2. Component State</summary>

#### Component State란?

컴포넌트 내부에서 선언하며 수정하는 데이터

- setState()는 컴포넌트의 state 객체에 대한 업데이트를 실행합니다. (state 변경 시 필수 실행)
- 사용법
``` javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  ...
}

export default App;
```

#### Component life cycle

##### Mounting (마운트)

아래 메서드들은 컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될 때에 순서대로 호출됩니다.

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

##### Updating (업데이트)

props 또는 state가 변경되면 갱신이 발생합니다. 아래 메서드들은 컴포넌트가 다시 렌더링될 때 순서대로 호출됩니다.

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

##### Unmounting (마운트 해제)

아래 메서드는 컴포넌트가 DOM 상에서 제거될 때에 호출됩니다.

- componentWillUnmount()

##### Error Handling (오류 처리)

- 아래 메서드들은 자식 컴포넌트를 렌더링하거나, 자식 컴포넌트가 생명주기 메서드를 호출하거나, 또는 자식 컴포넌트가 생성자 메서드를 호출하는 과정에서 오류가 발생했을 때에 호출됩니다.

- static getDerivedStateFromError()
- componentDidCatch()

#### 참고 사이트

[컴포넌트 생명주기](https://ko.reactjs.org/docs/react-component.html) <br>
[컴포넌트 State](https://ko.reactjs.org/docs/faq-state.html) <br>

</details>

<details markdown="3">

<summary>📑 3. Axios</summary>

#### Axios란?

Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.

- 설치법
> npm i axios

### github page

- 사용법

> npm i gh-pages
package.json
``` json
"scripts": {
  "deploy": "gh-pages -d build",
  "predeploy": "npm run build"
},
"homepage": "https://{your github username}.github.io/{the name of your project in github}"
```
> npm run deploy

#### 참고 사이트

[async 가이드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function) <br>
[axios 가이드](https://xn--xy1bk56a.run/axios/guide/usage.html) <br>

</details>