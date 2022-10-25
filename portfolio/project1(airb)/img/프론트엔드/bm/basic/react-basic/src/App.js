import React from 'react';
import './App.css';

// function App(){
//   return <h1>Hello React</h1>
// }

export default App;

// # JSX
// JavaScript의 확장문법
// 선언형 문법
// Babel이 JSX를 JavaScript Object로 변환한다
// Babel : JavaScript 컴파일러

// function App(){
//   return <h1>Hello React</h1>
// }

// JSX 없이 Virtual DOM 만들기
// function App(){
//   const h1=React.createElement('h1','null','Hello React');

//   return h1;
// }

// # JSX 문법

// function App(){
//   return (
//     <div>           
//    // div로  감싸져있다.
//       <h2>elements는 하나의 element로 감싸져야 한다</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </div>
//   )
// }

// function App(){
//   return (
//     <div>
//       <h2>elements를 하나의 element로 감싸지 않은 경우 에러 발생</h2>
//       {/* // Adjacent JSX elements must be wrapped in an enclosing tag. */}
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </div>
//   )
// }

// React.Fragment

// function App(){
//   return(
//     // DOM에 element를 추가하지 않고 자식을 그룹화 할 수 있다. (하나의 element로 감싸는 대신 사용. 개발자도구 elements에서도 표시되지 않는다.)
//     <React.Fragment>
//       <h2>React.Fragment</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </React.Fragment>
//   )
// }

// ==##1014

// function App(){
//   return (
//     // <React.Fragmenmt> 대신 <> 빈 태그를 이용한다.
//     <>                            
//     <h2>React.Fragement</h2>
//     <div>Foo</div>
//     <div>Bar</div>
//     <div>Baz</div>
//     </>
//   )
// }

// JSX attribute

// function App(){
//   return (
//     <>
//     <h2>JSX attribute</h2>
//     <ul>
//       <li><a href="#" target="_blank">Foo</a></li>
//       <li><img src=""alt="Bar" /></li>
//       <li><input type="text" placeholder="Baz" autoComplete="off"/></li>
//     </ul>
//     </>
//   )
// }

// JSX inline style attribute

// function App(){
//   return (
//     <>
//     <h2>JSX inline style</h2>
//     {/* style attribute에 object를 인자로 전달한다 */}
//     <ul style={{border:"1px solid"}}>
//       <li style={{textDecoration:"underline"}}>Foo</li>
//       <li>Bark</li>
//       <li>Baz</li>
//     </ul>
//     </>
//   )
// }

// JSX 내에서 JS 코드 작성하기
// function App(){
//   const foo="Foo";

//   return(
//     <>
//     <h2>JSX 내에서 코드 작성하기</h2>
//     <div>{foo}</div>
//     <div>{'Ba'+"r"}</div>
//     <div>{"Baz".valueOf()}</div>
//     </>
//   )
// }

// ==## Q. Complete DOM with JS Object
// JavaScript 변수와 inline style을 사용하여 virtualDOM을 완성시켜보세요
// function App(){
//   const dutchBeer="Heineken"
//   const irishBeer="Guinness"
//   const japeneseBeer="Asahi"

//   const soldOut={
//     textDecoration:"line-through",
//     color:"#ddd"
//   }

//   return(
//     <>
//     <h2>Beers</h2>
//     <ul>
//       <li>{dutchBeer}</li>
//       <li style={soldOut}>{irishBeer}</li>
//       <li>{japeneseBeer}</li>
//       <li>{japeneseBeer + irishBeer}</li>
//       <li>{japeneseBeer + 2}</li>
//       <li>{japeneseBeer + "abcdfreds"}</li>
//     </ul>
//     </>
//   )
// }

// JSX 내에서 조건문 사용하기
// 논리연산자, 삼항연산자
// &&(AND) : expr1 && expr2
// ||(OR) : expr1 || expr2
// ! (NOT) : !expr 
// 삼항연산자(Ternary) : 조건 ? expr if true : expr if false
// '조건' ? '참인 경우 출력 값' : '거짓인 경우 출력 값'
// var r= 1 > 5 ? "foo" : "bar"
// function App(){

//   // &&
//   console.log(true && 1)  //1
//   console.log(1&&0) //0
//   console.log(0&&1) //0
//   console.log(0&&false) //0

//   // ||
//   console.log(1||true)  //1
//   console.log(1||0) //1
//   console.log(0||1) //1
//   console.log(false||0) //0    //앞이 false니까 || 뒤 조건이 출력된다.      
//   console.log(false||2312412) //2312412   //앞이 false니까 || 뒤 조건이 출력된다.       

//   return (
//     <>
//     <h2>JSX 내에서 조건문 사용하기</h2>
//     <div>{true&&"Foo"} </div>
//     <div>{false||"Bar"}</div>         
//     <div>{!true ? "":"Baz"}</div>
//     </>
//   )
// }

// JSX 내에서 반복문 사용하기

// function App() {
//   // 선언은 return 이전에 한다.
//   const arr = ["Foo", "Bar", "Baz"];

//   return (
//     <>
//       <h2>JSX에서 반복문</h2>
//       <ul>
//         {/* 반복문으로는 주로 .map이  사용된다. (.for X )
//         callback 에 배열의 value, index, array를 인자로 전달한다.
//         Array를 순회하면서 item에 특정한 메서드를 적용할 수 있다.
//         새로운 Array를 return한다. */}
//          문법
//         {/* arr.map(function(value,index,array) */}

//         {/* arr.map((value,indes,array)=>())    // 이 때 사용하는 괄호는 JSX를 도와주는 괄호이다. */}
//         {arr.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}

//         {/* 화살표 함수 아닌 function 함수는 괄호가 아닌 중괄호로 사용하며, 적용이 되지 않는다. */}
//         {/* {arr.map(function(value,index){
//           <li key={index}>{value}</li>
//         })} */}       
//       </ul>
//     </>
//   )
// }

// function App(){

//   const arr=["Foo","Bar","Baz"]

//   // 리스트를 먼저 만들고 return 한다.
//   const list=arr.map((item,index)=>(
//     <li key={index}>{item}</li>
//   ))

//   return (
//     <>
//     <h2>JSX 반복문</h2>
//     <ul>
//       {list}
//     </ul>
//     </>
//   )
// }

// ==##Q.반복문을 사용해서 맥주 리스트를 출력해보세요
// function App(){

//   const beers=[
//     {name:"Heineken", origin:"Netherlands"},
//     {name:"Guinness", origin:"Ireland"},
//     {name:"Asahi", origin:"Japan"},
//   ]

//   // 변수 값은 상황에 맞게 바꿀 수 있다. item->beer
//   const list = beers.map((beer,index)=>(
//   //   // object를 출력할 때에는 한꺼번에 출력하지 못하고, key 이름을 , 로 연결하여 출력한다.
//     <li key={index}>{beer.name},{beer.origin}</li>
//   ))

//   // () 괄호로 묶어도 되고, 안묶어도 된다. 하나만 있어도 된다. 중요한 것은 return 되는 값이다.
//   // const list = beers.map((beer,index)=>
//   //   <li key={index}>{beer.name},{beer.origin}</li>
//   //   )


//   // const list=beers.map((beer,index)=>{
//   //   // li에 key={index}를 정의하지 않으면 콘솔에 Warining 메세지가 뜬다.
//   //   return <li key={index}>{beer.name},{beer.name}</li>
//   //   // return (<li key={index}>{beer.name},{beer.name}</li>)      //() 괄호로 묶어도 되고, 안묶어도 된다. 보통 한줄이면 안묶는다.
//   // })

//   return(
//     <>
//     <h2>Beers</h2>
//     <ul>
//       {list}
//     </ul>
//     </>
//   )
// }

// // 화살표함수에서 {} (중괄호)가 없으면 화살표 뒤의 값을 return한다
// // const f=()=>"foo"
// // =
// // const f=()=>{
// //   return "foo"
// // }

// # COMPONENTS (컴포넌트)
// 정의 : 복잡한 UI를 빌드하기 위한 재사용이 가능하고 독립적인 부품

// 컴포넌트 기본
// 함수 컴포넌트와 클래스 컴포넌트(잘 쓰지 않는다. 배우지X)가 있다.

// App 컴포넌트
// 함수 컴포넌트는 기본적으로 함수이다.
// function App(){

//   // 코드작성
//   console.log("App Loaded!")

//   // VirtualDOM을 return한다
//   return <h1>App</h1>
// }

// 컴포넌트 합성(Composition)
// 코드를 재사용한다

// 컴포넌트의 첫글자는 대문자여야 한다.
// function Foo(){
//   return <li>Foo</li>
// }
// function Bar(){
//   return <li>Bar</li>
// }
// function Baz(){
//   return <li>Baz</li>
// }

// function App(){
//   return (
//     <>
//     <ul>
//       {/* 컴포넌트 합성 : 미리 만들어진 함수 컴포넌트를 합성한다. 모양 중요 : <Name /> 닫힌태그! */}
//         <Foo />
//         <Bar />
//         <Baz />
//     </ul>
//     </>
//   )
// }

// ==## Q.

function DutchBeer() {
  return (
    <>
      <td>Heineken</td>
      <td>Netherland</td>
      <td>Yes</td>
    </>
  )
}
function IrishBeer() {
  return 
  // ,로 연결하는 것이 아니라 React.Fragment를 사용한다.
  <>
  <td>{"Guinness"}</td>
  <td>{"Ireland"}</td>
  <td>{"No"}</td>
  </>
  }
function JapaneseBeer() {
  return <>
  <td>{"Asahi"}</td>
  <td>{"Japan"}</td>
  <td>{"Yes"}</td>
  </>
  }

function App() {
  return (
    <>
      <h2>Beers</h2>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>{"Origin"}</th>
            <th>{"Available"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <DutchBeer />
          </tr>
          <tr>
          <IrishBeer />
          </tr>
          <tr>
          <JapaneseBeer />
          </tr>
        </tbody>
      </table>
    </>

  )
}








