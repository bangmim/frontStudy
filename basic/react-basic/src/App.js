import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet,useParams, useNaving} from "react-router-dom"
import './App.css';

export default App;

// function App(){
//     return <h1>Hello React</h1>
// }

// # JSX
// JavaScript의 확장 문법
// 선언형 문법
// Babel이 JSX를 JavaScript Object로 변환한다.

// function App(){
//   // HTML형식으로 보이지만 virtual DOM이라고 한다.
//   return <h1>Hello React</h1>
// }

// JSX 없이 Virtual DOM 만들기
// function App(){
//   const h1=React.createElement('h1','null','Hello Hello React');

//   return h1
// }

// # JSX 문법

// function App(){
//   return(
//   <div>
//     <h1>element는 하나의 element로 감싸져야 한다.</h1>
//     <div>Foo</div>
//     <div>Bar</div>
//     <div>Baz</div>
//   </div>
//   )
// }

// function App(){
//   return (
//     <h2>element를 하나의 element로 감싸지 않은 경우 에러 발생</h2>
//     <div>Foo</div>
//     <div>Bar</div>
//     <div>Baz</div>
//   )
// }

// React.Fragment
// 하나의 element로 감싸야한다 > 불필요한 div로 인해 구조가 복잡해진다.
// 이럴 때 사용하는 것이 React.Fragment이다.

// function App(){
//   return (
//     //DOM에 element를 추가하지 않고 자식을 그룹화 할 수 있다.
//     <React.Fragment>
//       <h2>React.Fragment</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </React.Fragment>
//   )
// }

// function App(){
//   return (
//     <>
//     <h2>React.Fragment</h2>
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
//       <li><a href="#" target="_blank ">Foo</a></li>
//       <li><img src="" alt="Bar"/></li>
//       <li><input type="text" placeholder="Baz" autoComplete="off"/></li>
//     </ul>
//     </>
//   )
// }

// function App(){
//   return (
//     <>
//     <h2>JSX inline style</h2>
//     {/* style attribute에 Object를 인자로 전달한다 */}
//     <ul style={{border:"1px solid"}}>
//     <li style={{textDecoration:"underline"}}>Foo</li>
//     <li>Bar</li>
//     <li>Baz</li>
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
//     <div>{"Ba"+"r"}</div>
//     <div>{"Baz".valueOf()}</div>
//     </>
//   )
// }

// ==##Q.JavaScript 변수와 inline style을 사용하여 virtualDOM을 완성시켜보세요.

// function App(){
//   const dutchBeer="Heineken";
//   const irishBeer="Guinness";
//   const japaneseBeer="Asahi";

//   const soldOut={
//     textDecoration:"line-through",
//     color:"#ddd"
//   };

//   return(
//     <>
//     <h2>Beers</h2>
//     <ul>
//       <li>{dutchBeer}</li>
//       <li style={soldOut}>{irishBeer}</li>
//       <li>{japaneseBeer}</li>
//     </ul>
//     </>
//   )
// }

// JSX 내에서 조건문 사용하기
// 논리 연산자, 삼항 연산자
// &&(AND) : expr1 && expr2
// ||(OR) : expr1 || expr2
// ! (NOT) : !expr
// 삼항연산자 (Ternary) : 조건 ? expr if true(true일 때 실행값) : expr if false(false일 때 실행 값)

// function App(){

//   return(
//     <>
//     <h2>JSX 내에서 조건문 사용하기</h2>
//     <div>{true && "Foo"}</div>
//     <div>{false || "Bar"}</div>
//     <div>{!true ? "" : "Baz"}</div>
//     </>
//   )
// }

// JSX 내에서 반복문 사용하기
//반복문 또한 JavaScript 코드이기 때문에 사용할 때에는 중괄호 안에서 사용해야한다.
//주로 .map을 사용한다.

// function App(){
//   const arr=["Foo","Bar","Baz"];

//   return(
//     <>
//     <h2>JSX에서 반복문</h2>
//     <ul>
//       {arr.map((item,index)=>(
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//     </>
//   )
// }

// function App(){
//   const arr=["Foo","Bar","Baz"];

//   const list=arr.map((item,index)=>(
//     <li key={index}>{item}</li>
//   ))

//   return(
//     <>
//     <h2>JSX 반복문</h2>
//     <ul>
//       {list}
//     </ul>
//     </>
//   )
// }

// ==##Q. 반복문을 사용해서 맥주 리스트를 출력해보세요
// const beers=[
//   {name:"Heineken",origin:"Netherlands"},
//   {name:"Guinness",origin:"Ireland"},
//   {name:"Asahi",origin:"Japan"},
// ]

// function App(){
//   const list=beers.map((beer,index)=>{
//     return (
//       <li key={index}>{beer.name} , {beer.origin}</li>
//     )
//   })
// // console.log(list)

// // const list = beers.map((beer,index)=>(   //중괄호 생략 (return이 1개인 경우 가능하다)
//   // <li key={index}>{beer.name} , {beer.origin}</li>
//   // ))

//   return(
//     <>
//     <h2>Beers</h2>
//     <ul>
//       {list}
//     </ul>
//     </>
//   )
// }

// # COMPONENTS (컴포넌트)
// 정의 : 복잡한 UI를 빌드하기 위한 재사용 가능하고 독립적인 부품

//컴포넌트 기본 : 함수 컴포넌트와 클래스 컴포넌트(잘 사용하지 않음)가 있다.

// APP 컴포넌트
// 함수 컴포넌트는 기본적으로 함수이다.
// function App(){

//   // 코드작성
//   console.log("App Loaded!")

//   // VirtualDOM을 return 한다.
//   return <h1>App</h1>
// }

// 컴포넌트 합성(Composition)
// 코드를 재사용한다.

// 컴포넌트의 첫글자는 대문자여야 한다. (소문자로 작성하면 일반 함수로 처리한다.)
// 모두 컴포넌트 (함수 컴포넌트)
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
//       {/* (함수)컴포넌트를 합성했다. */}
//       <Foo/>
//       <Bar/>
//       <Baz/>
//     </ul>
//     </>
//   )
// }

// ==##Q.맥주표를 table element를 이용해서 완성해보세요.
// function DutchBeer() {
//   return (
//     <tr>
//     <td>Heineken</td>
//     <td>Netherlands</td>
//     <td>Yes</td>
//     </tr>
//   )
// }

// function IrishBeer() {
//   return (
//     <tr>
//     <td>Guinness</td>
//     <td>Irend</td>
//     <td>No</td>
//     </tr>
//   )
// }

// function JapaneseBeer() {
//   return (
//     <tr>
//     <td>Asahi</td>
//     <td>Japan</td>
//     <td>Yes</td>
//     </tr>
//   ) 
// }

// function App() {
//   return (
//     <>
//     <h1>Beers</h1>
//     <table>
//       <thead>
//         <tr>
//           <th>Brand</th>
//           <th>Origin</th>
//           <th>Available</th>
//         </tr>
//       </thead>
//       <tbody>
//         <DutchBeer/>
//         <IrishBeer/>
//         <JapaneseBeer/>
//       </tbody>
//     </table>
//     </>
//   )
// }

// # props
// 컴포넌트에 전달되는 인자 (parameter)

// function C(props){      //properties >> Object라고 할 수 있다.
//   console.log(props);   //{key:value, ...}
//   const 변수=props.변수;  //(변수)=props(인자).변수(사용자가 정의 가능. '변수'라고 해도 되고, props1이라고 해도 된다. 보통 변수와 이름을 일치시키는 거 같다.)

//   return <li>{변수}</li>  //출력할 때에는 변수로 출력
// }

// function App(){
//   return(
//     <>
//     <h1>App</h1>
//     <ul>
//       {/* C 컴포넌트를 재사용했다. */}
//       {/* 인자(props)를 다르게 사용했다. */}
//       {/* 사용할 때에는 인자 뒤의 메서드(.prop1) */}
//       <C 변수="Foo"/>
//       <C 변수="Bar"/>
//       <C 변수="Baz"/>
//     </ul>
//     </>
//   )
// }

// ==##Q
// function Beer(props){
//   const name=props.name;
//   const origin=props.origin;

//   return <li>{name}, {origin}</li>
// }
// function App(){
//   return (
//     <>
//     <h1>Beers</h1>
//     <ul>
//     <Beer name="Heineken" origin="Netherlands"/>
//     <Beer name="Guinness" origin="Ireland"/>
//     <Beer name="Asahi" origin="Japan"/>
//     </ul>
//     </>
//   )
// }

// Object props

// function C(props){
//   console.log(props);

//   //o object를 선언하여 object의 속성들을 사용한다.
//   const o=props.o;

//   return(
//     <ul>
//       <li>prop1:{o.prop1}</li>
//       <li>prop2:{o.prop2}</li>
//       <li>prop3:{o.prop3}</li>
//     </ul>
//   )
// }

// const o={prop1:"Foo",prop2:"Bar",prop3:"Baz"};

// function App(){
//   return(
//     <>
//     <h1>o</h1>
//     <C o={o}/>
//     </>
//   )
// }

// ==##Q.
// function Beer(props){
// const beer=props.beer;

// return(
//   <ul>
//   <li>Name:{beer.name}</li>
//   <li>Origin:{beer.origin}</li>
//   <li>Available:{beer.available ?"Yes":"No"}</li>
// </ul>
// )
// }

// const irishBeer={name:"Guinness",origin:"Ireland",available:false};

// function App(){

//   return(
//     <>
//     <h2>Beer</h2>
//     {/* Beer 함수에 irishBeer를 인자로 전달한다. 호출할 때에는 선언한 변수 = {사용할 인자} */}
//     <Beer beer={irishBeer}/>
//     </>
//   )
// }

// ==##Q.컴포넌트 반복적으로 출력하기
//JSX에서 Array.map()를 사용하세요
//Object.props 전달
// const beers=[
//   {name:"Heineken",origin:"Netherlands"},
//   {name:"Guinness",origin:"Ireland"},
//   {name:"Asahi",origin:"Japan"}
// ]

// function Beer(props){
//   const beer=props.beer;

//   return <li>{beer.name},{beer.origin}</li>
// }

// function App(){
//   const list=beers.map((item,index)=>(
//     //Beer li로 출력하기
//     <Beer key={index} beer={item}/>
//   ))
// return(
//   <>
//   <h2>Beer</h2>
//   <ul>
//     {list}
//   </ul>
//   </>
// )
// }

//children props;

// function C(props){
//   //children은 속성키가 children이다. (.chi)
//   const children=props.children;

//   return(
//     <fieldset>
//       <legend>C</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Foo(){
//   return <div>Foo</div>
// }

// function App(){
//   return(
//     <>
//     <h1>App</h1>
//     <C>
//       {/* Foo 컴포넌트는 C 컴포넌트의 children이다
//       트리형태를 통해 children임을 바로 확인할 수 있다. */}
//       <Foo/>
//     </C>
//     </>
//   )
// }

// ==##Q. children props를 이용해서 맥주 리스트를 만들어보세요

// function Beer(props){
//   const beer=props.children;

//   return(
//     <>
//     <h1>Beers</h1>
//     {beer}
//     </>
//   )
// }

// function DutchBeer(){
//   return(
//     <>
//     <h3>Heineken</h3>
//     <p>Dutch beer</p>
//     </>
//   )
// }

// function IrishBeer(){
//   return(
//     <>
//     <h3>Guinness</h3>
//     <p>Irish beer</p>
//     </>
//   )
// }
// function App(){
//   return(
//     <Beer>
//       <hr/>
//       <DutchBeer/>
//       <hr/>
//       <IrishBeer/>
//     </Beer>
//   )
// }

//강사님 답안
// function Beer(props){
//   const children=props.children;
//   return(
//     <div style={{borderTop:"1px solid"}}>
//       {children}
//     </div>
//   )
// }

// function App(){
//   return(
//     <>
//     <h3>Beer</h3>
//     <Beer>
//       <DutchBeer/>
//     </Beer>
//     <Beer>
//       <IrishBeer/>
//     </Beer>
//     </>
//   )
// }

//Component tree

// function Foo(props){
//   const children=props.children;

//   return(
//     <fieldset>
//       <legend>Foo</legend>
//       {children}
//     </fieldset>
//   )
// }
// function Bar(props){
//   const children=props.children;

//   return(
//     <fieldset>
//       <legend>Bar</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Baz(){
//   return <div>Baz</div>
// }

// function App(){
//   return (
//     <Foo>
//       <Bar>
//         <Baz/>
//       </Bar>
//     </Foo>
//   )
// }

//==##Q.
// function Beers(props){
//   const children=props.children;

//   return(
//     <fieldset>
//       <legend>Beers</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Europ(props){
//   const beer=props.children;
//   return(
//     <fieldset>
//       <legend>European beers</legend>
//       {beer}
//     </fieldset>
//   )
// }
// function Europeanbeers(){
//   return(
//     <ul>
//       <li>Heineken</li>
//       <li>Guinness</li>
//     </ul>
//   )
// }
// function Asia(props){
//   const beer=props.children;
//   return(
//     <fieldset>
//       <legend>Asian beers</legend>
//       {beer}
//     </fieldset>
//   )
// }
// function Asianbeers(){
//   return(
//     <ul>
//     <li>Asahi</li>
//     <li>Kloud</li>
//     </ul>
//   )
// }

// function App(){
//   return (
//     <Beers>
//       <Europ>
//         <Europeanbeers/>
//       </Europ>
//       <Asia>
//         <Asianbeers/>
//       </Asia>
//     </Beers>
//   )
// }

//강사님 답안

// +구조분해할당
// function Beers({children}){   //인자에 {children}을 적으면 따로 children을 선언하지 않아도 children을 사용할 수 있다.
//   return(
//     <fieldset>
//       <legend>Beers</legend>
//       {children}
//     </fieldset>
//   )
// }
// function Europ({children}){
//   return(
//     <fieldset>
//       <legend>European beers</legend>
//       <ul>
//       {children}
//       </ul>
//     </fieldset>
//   )
// }
// function DutchBeer(){
//   return <li>Heineken</li>
// }
// function IrishBeer(){
//   return <li>Guinness</li>
// }
// function Asia(props){
//   const beer=props.children;
//   return(
//     <fieldset>
//       <legend>Asian beers</legend>
//       <ul>
//       {beer}
//       </ul>
//     </fieldset>
//   )
// }
// function JapaneseBeer(){
//   return<li>Asahi</li>
// }
// function  KoreaBeer(){
//   return <li>Kloud</li>
// }

// function App(){
//   return (
//     <Beers>
//       <Europ>
//         <DutchBeer/>
//         <IrishBeer/>
//       </Europ>
//       <Asia>
//         <JapaneseBeer/>
//         <KoreaBeer/>
//       </Asia>
//     </Beers>
//   )
// }

// function Foo(){
//   return <li>Foo</li>
// }
// function Bar(){
//   return <li>Bar</li>
// }
// function Baz(){
//   return <li>Baz</li>
// }
// function C(props){
//   const children=props.children;

//   return <ul>{children}</ul>
// }
// function App(){
//   return(
//     <>
//     <h1>App</h1>
//     <C>
//       <Foo/>
//       <Bar/>
//       <Baz/>
//     </C>
//     </>
//   )
// }

// children에 props 전달하기

// const FooContext=createContext();

// function Foo(props){
//   const children=props.children;

//   const foo="FOO"

//   return(
//     <fieldset>
//       <legend>Foo</legend>
//       <FooContext.Provider value={foo}>
//         {children}
//       </FooContext.Provider>
//     </fieldset>
//   )
// }

// function Bar(props){
//   const children=props.children;

//   return(
//     <fieldset>
//       <legend>Bar</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Baz(){
//   const foo=useContext(FooContext);

//   return <div>{foo}</div>
// }

// function App(){
//   return(
//     <Foo>
//       <Bar>
//         <Baz/>
//       </Bar>
//     </Foo>
//   )
// }

// ==##Q.
// const BeerContext =createContext();

// function Beers({children}){

//   const availability={
//     guinness:false,
//     asahi:false,
//     kloud:true
//   }

//   return(
//     <>
//     <h1>Beers &#127866;</h1>
//     <BeerContext.Provider value={availability}>
//       {children}
//     </BeerContext.Provider>
//     </>
//   )
// }

// function EuropeanBeers({children}){
//   return(
//     <>
//     <h2>European beers</h2>
//     {children}
//     </>
//   )
// }
// function IrishBeer(){
//   const availability=useContext(BeerContext)
//   return (
//   <>
//   <h3>GUINNESS</h3>
//   <p>Available:{availability.guinness?"Yes":"No"}</p>
//   </>
//   )
// }
// function AsianBeers({children}){
//   return(
//     <>
//     <h2>Asian beers</h2>
//     {children}
//     </>
//   )
// }
// function JapaneseBeer(){
//   const availability=useContext(BeerContext)
//   return (
//     <>
//     <h3>ASAHI</h3>
//     <p>Available:{availability.asahi?"Yes":"No"}</p>
//     </>
//   )
// }
// function KoreanBeer(){
//   const availability=useContext(BeerContext)
//   return (
//   <>
//   <h3>KLOUD</h3>
//   <p>Available:{availability.kloud?"Yes":"No"}</p>
//   </>
//   )
// }

// function App(){
//   return(
//     <Beers>
//       <EuropeanBeers>
//         <IrishBeer/>
//       </EuropeanBeers>
//       <AsianBeers>
//         <JapaneseBeer/>
//         <KoreanBeer/>
//       </AsianBeers>
//     </Beers>
//   )
// }

// #Event

// function App(){
//   function handleClick(e){
//     console.log(e.target)
//   }

//   //attribute:onEventName(callbak)
//   //자바: addEventListener("click",callback)

//   return(
//     <>
//     <h1>click event</h1>
//     {/* event 처리: element의 attribute(onClick)으로 처리한다. */}
//     <button onClick={handleClick}>Button</button>
//     </>
//   )
// }

// callback에 인자를 전달하지 않을 떄
// document.body.addEventListever("click",f);
// function f(e){
//   console.log(e)
// }

// // 위와 동일(익명함수 사용)
// document.body.addEventListener("click",(e)=>{
//   console.log(e)
// })

// callback에 인자가 있을 때
// document.body.addEventListener("click",()=>{
//   f(Foo)   //클릭하면 f함수 실행 : Foo return 될 것임.
// })
// function f(foo){
//   console.log(foo) // 해석 : f함수는 인자를 그대로 return하는 함수이다.
// }

// function App(){
//   function handleClick(foo){
//     console.log(foo)
//   }

//   return(
//     <>
//     <h1>click event</h1>
//     <button onClick={()=>handleClick("Foo")}>Button</button>
//     </>
//   )
// }

// function App(){
//   function handleClick(x){
//     console.log(x)
//   }

//   return(
//     <>
//     <h1>Accordion</h1>
//     <button onClick={()=>handleClick("Foo")}>Foo</button>
//     <button onClick={()=>handleClick("Bar")}>Bar</button>
//     <button onClick={()=>handleClick("Baz")}>Baz</button>
//     </>
//   )
// }

// change 이벤트

// function App(){
//   function handleChange(e){
//     console.log(e.target.value)
//   }

//   return(
//     <>
//     <h1>change</h1>
//     <input type="text" onChange={handleChange}/>
//     </>
//   )
// }

// ==##Q.
// function App(){
//   // function handleChange(e){
//   //   const username=document.getElementById("username")
//   //   const password=document.getElementById("password")
//   //   return(
//   //     {username:console.log("username:",username.value)},
//   //     {password:console.log("password:",password.value)}
//   //   )
//   // }
// // 강사님 답안
// // e.target의 name 값을 적용하여 속성값을 사용해 출력하였다.
// function handleChange(e){
//   // console.log(e.target)
//   const name=e.target.name;
//   const value=e.target.value;

//   console.log(name,value)
// }
//   return(
//     <>
//     <form>
//       <h1>Login</h1>
//       <div>
//       <label>Username</label>
//       <input type="text"
//       id="username"
//       name="username"
//       onChange={handleChange}
//       autoComplete="off"/>
//       </div>
//       <div>
//       <label>Password</label>
//       <input type="password"
//       id="password"
//       name="password"
//       onChange={handleChange}
//       autoComplete="off"/>
//       </div>

//     </form>
//     </>
//   )
// }

// submit event
// function App(){
//   function handleSubmit(e){
//     // form이 제출되지 않음.
//     e.preventDefault();

//     console.log("제출되지 않았습니다")
//   }

//   return(
//     <form onSubmit={handleSubmit}>
//       <h1>Form</h1>
//       <p>...</p>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// #DOM 업데이트
// function App(){
//   // const [state, setState]=useState(initialValue);
//   // state : 변수
//   // setState : state를 업데이트하는 메서드
//   // initialValue : state의 초기값

//   const [count, setCount]=useState(0);

//   return(
//     <>
//     <h1>Count</h1>
//     <p>{count}</p>
//     <button onClick={()=>setCount(count+1)}>Add</button>
//     </>
//   )
// }

//state Hook 없이 DOM 업데이트 하기 : 불가능
// function App(){
//   let count =0;

//   // DOM을 업데이트하기 위해서는 virtualDOM을 다시 return 해야한다.
//   // virtualDOM을 다시 return 하기 위해서는 컴포넌트를 다시 실행해야 한다.
//   // setState는 컴포넌트를 다시 실행한다
//   // DOM에 업데이트 된다.
//   function handleClick(e){
//     count++;
//     console.log(count)    //console에 증가됨이 표현되지만, 화면에 update되지 않는다.
//   }

//   return (
//     <>
//     <h1>Count</h1>
//     <p>{count}</p>
//     <button onClick={handleClick}>Add</button>
//     </>
//   )
// }

//시계
// function App(){
//   const initialTime = new Date().toLocaleTimeString();    //현재 시간을 변수에 담았다.
//   const [time, setTime]=useState(initialTime);  //초기값 : 현재 시간

//   setTimeout(()=>{
//     const updatedTime=new Date().toLocaleTimeString();
//     setTime(updatedTime);   //update이후 다시 app 컴포넌드 실행 > 다시 setTime함수 실행 > update > app 실행 > ... >
//   },1000)

//   return (
//     <>
//     <h1>시계</h1>
//     <p>{time}</p>
//     </>
//   )
// }

//==##Q.1
// function App(){
// const [count, setCount]=useState(0);

// return(
//   <>
//   <h1>Count</h1>
//   <p>{count}</p>
//   <button onClick={()=>(setCount(count -1))}>-</button>
//   <button onClick={()=>(setCount(count +1))}>+</button>
//   </>
// )
// }

//==##Q.2
// function App(){
//   const [subscribe, setSubscribe]=useState(false);

//   console.log(subscribe)
//   return(
//     <>
//     <h1>구독 버튼</h1>
//     <button
//     onClick={()=>setSubscribe(!(subscribe))}
//     >
//       {!subscribe ? "구독하기":"구독중"}
//     </button>
//     </>
//   )
// }

// ==##Q.3
// function App(){
//   const [subscribe, setSubscribe]=useState(false);
//   const [subscriber, setSubscriber]=useState(0);

//   return (
//     <>
//     <h1>Subscribe</h1>
//     <p>구독자수 : {subscriber} </p>
//     <button
//     onClick={()=>{
//       if(subscribe === false){
//         return (
//           setSubscriber(subscriber +1),
//           setSubscribe(!subscribe)
//   )}
//   else if(subscribe === true){
//     return (
//       setSubscriber(subscriber -1),
//       setSubscribe(!subscribe)
// )}
//     }}
//     >
//       {!subscribe?"구독하기":"구독중"}
//     </button>
//     </>
//   )
// }

/**
 강사님 답안: handleClick(subscribe) 함수 만들어 적용하기
 */

//  function App(){
//   const [subscribe, setSubscribe]=useState(false);
//   const [subscriber, setSubscriber]=useState(0);

//   //이벤트 함수가 길어질 경우 따로 이름있는 함수를 만들어 사용할 수 있다.

//   function handleClick(subscribe){
//    if(subscribe){
//     setSubscribe(false);    //return을 사용하지 않고 여러개의 코드를 사용할 때 : 코드 뒤에 ;를 사용한다. , 사용하면 error
//     setSubscriber(subscriber -1);
//    }else{
//     return (    
//       setSubscribe(true),   //return으로 여러개의 코드를 사용할 때 : 코드 뒤에 ; 대신 ,를 사용한다.
//       setSubscriber(subscriber +1)
//     )
//    }
//   }

//   return (
//     <>
//     <h1>Subscribe</h1>
//     <p>구독자수 : {subscriber} </p>
//     <button
//     onClick={()=>handleClick(subscribe)}>
//       {!subscribe?"구독하기":"구독중"}
//     </button>
//     </>
//   )
// }

// # Form 다루기

// function App(){
//   const [username, setUsername]=useState("");

//   function handleSubmit(e){
//     // console.log(e.target)   //form
//     e.preventDefault();         //제출되지 않도록 우선 막기
//     console.log("username :", username);
//     console.log({username});
//     setUsername("")
//   }

//   function handleChange(e){
//     const value=e.target.value;
//     const username=value.trim();    //공백 처리

//     // console.log(username);          //handleChange 함수의 지역변수 (State의 변수 아님)
//     setUsername(username);        //setState로 전달

//     // console.log(value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>로그인</h1>
//       <input
//       type="text"
//       placeholder='Username'
//       value={username}
//       onChange={handleChange}
//       />
//       <button
//       type="submit"
//       disabled={!username}
//       >
//         로그인
//       </button>
//     </form>
//   )
// }

// ==## Q.Password toggle
// function App(){
//   const [type, setType]=useState("password")

//   function handleClick(){
//     if(type==="password"){
//       setType("text")
//     }else if(type==="text") {
//       setType("password")
//     }
//   }

//   return (
//     <form>
//       <h1>Login</h1>
//       <input
//       type={type}
//       placeholder='Password'
//       />
//       <button
//       type="button"        //type을 button으로 하면 submit되지 않는다.
//       onClick={handleClick}
//       >{type==="password"?"show":"hide"}</button>
//     </form>
//   )
// }

// function App(){
//   const [beers, setBeers]=useState([]);

//   function handleChange(e){
//     const name=e.target.value;

//     if(!name){
//       setBeers([]);
//       return;
//     }

//     // console.log(name);

//     const DATA =[
//       {id:"b1", name:"Heineken"},
//       {id:"b2", name:"Guinness"},
//       {id:"b3", name:"Kloud"},
//       {id:"b4", name:"Asahi"},
//       {id:"b5", name:"KGB"},
//     ];

//     const updatedBeers=DATA.filter(beer =>{
//       //String.startsWith(p):String이 p로 시작하면 true 아니면 false를 return 한다.
//       if (beer.name.startsWith(name)){
//         return beer;
//       }
//     })

//     setBeers(updatedBeers);

//     console.log(updatedBeers)
//   }

//   const beerList=beers.map((beer,index)=>(
//     <li key={index}>{beer.name} </li>
//   ))

//   return(
//     <>
//     <h1>Live Search</h1>
//     <input
//     type="text"
//     onChange={handleChange}
//     placeholder="search"
//     />
//     <ul>
//       {beerList}
//     </ul>
//     </>
//   )
// }

// Beer form : create

// const initialBeer=[
//   {id:"a1", name:"Heineken"},
// ]

// function App(){
//   const [beers, setBeers]=useState(initialBeer);
//   const [name, setName]=useState("");

//   const beerList=beers.map((beer)=>(
//     <li key={beer.id}>{beer.name}</li>
//     ))
//     // console.log(beerList)

//   function handleChange(e){
//     const name=e.target.value;
//     // console.log(name)
//     setName(name)
//   }

//   function handleSubmit(e){
//     e.preventDefault();
//     console.log("name:",name)

//     // beerList와 같은 형식의 object를 만든다
//     const newBeer={id:Math.random(), name:name}

//     //beers에 (기존 array)에 newBeer(새 array)를 추가한다.
//     const updatedBeers=[...beers, newBeer];

//     //beers state를 업데이트한다.
//     setBeers(updatedBeers)   

//     //버튼 클릭 후 input 값 비우기
//     setName("")
//   }

//   return (
//     <>

//     <h1>Beers</h1>
//     <form onSubmit={handleSubmit}>
//     <input 
//     type="text"
//     placeholder="beer"
//     onChange={handleChange}
//     value={name}
//     />
//     <button
//     type="submit"
//     disabled={!name}
//     >Add</button>
//     </form>
//     <ul>
//       {beerList}
//     </ul>
//     </>
//   )
// }

// # delete

// const initialBeers=[
//   {id:"b1", name:"Heineken"},
//   {id:"b2", name:"Guinness"},
//   {id:"b3", name:"Kloud"},
// ]

// function App(){
//   const [beers, setBeers]= useState(initialBeers);

//   function deleteBeer(beerId){

//     // console.log(beerId);
//     // return;

//  const updatedBeer = beers.filter(beer=>{
//    if (beer.id != beerId) {
//     return beer;
//    }
//   })

//     setBeers(updatedBeer);

//   }

//   const beerList=beers.map(beer=>(
//     <li key={beer.id}>
//       {beer.name} {" "}
//       <button onClick={()=>deleteBeer(beer.id)}>Delete</button>
//     </li>
//   ))

//   return (
//     <>
//     <h1>Beers</h1>
//     <form>
//       <input
//       type="text"
//       placeholder="Guinness"
//       disabled={true}
//       />
//       <button
//       type="submit"
//       disabled={true}
//       >
//         Add
//       </button>
//     </form>
//     <ul>
//       {beerList}
//     </ul>
//     </>
//   )

// }

// # Update

// const initialBeer=[
//   {id:"b1", name:"Heineken", available:true},
//   {id:"b2", name:"Guinness", available:false},
//   {id:"b3", name:"Kloud", available:true},
// ]

// function App(){
//   const [beers, setBeers] = useState(initialBeer);

//   function editBeer(beerId){
//     // console.log(beerId);

//     const editedBeer = beers.map(beer=>{
//       if (beerId === beer.id){
//         return  {...beer, available:!beer.available}
//   }
//   return beer
// })
//     setBeers(editedBeer);

//   }

//   const beerList = beers.map(beer=>(
//     <li key={beer.id}>
//       {beer.name} {" "}
//       <button onClick={()=> editBeer(beer.id)}>
//         {beer.available ? "판매중":"품절"}
//       </button>
//     </li>
//   ))

//   return (
//     <>
//     <h1>Beers</h1>
//     <form>
//       <input
//       type="text"
//       placeholder="Guinness"
//       disabled={true}
//       />
//       <button
//       type="submit"
//       disabled={true}
//       >
//         Add
//       </button>
//     </form>
//     <ul>
//       {beerList}
//     </ul>
//     </>
//   )
// }

// ## 합치기
// const initialBeer=[
//   {id:"b1", name:"Heineken", available:true},
//   {id:"b2", name:"Guinness", available:false},
//   {id:"b3", name:"Kloud", available:true},
// ]

// function App(){
//   const [beers, setBeers]=useState(initialBeer)
//   const [name, setName]=useState("");

//   function handleSubmit(e){
//     e.preventDefault();
//     const newBeer={id:Math.random(), name:name, available:true}
//     const updateBeer=[...beers, newBeer]
//     console.log(updateBeer);

//     setBeers(updateBeer);
//   }

//   function Delete(e){
//     // console.log(e)
//     const bbb = beers.filter(beer=>{
//       if (beer.id !== e){
//         return beer
//       }
//     })
//     // console.log(bbb)
//     setBeers(bbb);
//   }

//   function handleClick(e){
//     // console.log(e)
//     const aaa = beers.map(beer=>{
//       if(beer.id===e){
//         return {...beer, available:!beer.available};
//       }
//      return beer;
//     })
//     setBeers(aaa);
//   }

//   const beerList= beers.map(beer=>(
//     <li key={beer.id}>{beer.name} {" "}
//     <button onClick={()=>{Delete(beer.id)}}>Delete</button> 
//     <button onClick={()=>{handleClick(beer.id)}}>
//       {beer.available ? "판매중":"품절"}
//       </button> 
//     </li>
//   ))

//   function handleChange(e){
//     const name = e.target.value;
//     setName(name);
//   }


//   return (
//     <>
//     <h1>Beers</h1>
//     <form onSubmit={handleSubmit}>
//     <input
//     type="text"
//     placeholder="Guinness"
//     onChange={handleChange}
//     value={name}
//     />
//     <button
//     type="submit"
//     disabled={!name}
//     >Add</button>
//     </form>
//     <ul>
//       {beerList}
//     </ul>
//     </>
//   )
// }



// ## form을 분리하는 경우

// const initialBeer = [
//   { id: "b1", name: "Heineken", available: true },
//   { id: "b2", name: "Guinness", available: false },
//   { id: "b3", name: "Kloud", available: true },
// ]

// function App() {
//   const [beers, setBeers] = useState(initialBeer);

//   function addBeer(newBeer) {
//     console.log(newBeer)
//     //beers 업데이트
//     const updateBeer = [...beers, newBeer];

//     setBeers(updateBeer)
//   }

//   function deleteBeer(beerId) {
//     // console.log(beerId);
//     const restBeer = beers.filter(beer => {
//       if (beer.id !== beerId) {
//         return beer
//       }
//     })
//     // console.log(restBeer)
//     setBeers(restBeer);
//   }

//   function editBeer(beerId) {
//     // console.log(beerId)

//     const edit = beers.map(beer=>{
//       if(beer.id === beerId){
//         return { ...beer, available: !beer.available }
//       }
//       return beer      
//     })
//     console.log(edit)
//     setBeers(edit);
//   }

//   const beerList = beers.map(beer => (
//     // deleteBeer와 editBeer를 속성에 추가해야 업데이트 된 state로 사용할 수 있다.
//     <Beer
//       key={beer.id}
//       beer={beer}
//       deleteBeer={deleteBeer}
//       editBeer={editBeer}
//     />
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <Form addBeer={addBeer} />
//       {beerList}
//     </>
//   )

// }

// function Form({ addBeer }) {
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     const newBeer = { id: Math.random(), name: name, available: true };

//     addBeer(newBeer);

//     setName("");  //2. name 초기화 == input의 value 초기화
//   }

//   function handleChange(e) {
//     const name = e.target.value;
//     setName(name);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         onChange={handleChange}
//         value={name}  //input 값 비우기위해 1. value={name}으로 설정
//       />
//       <button
//         type="submit"
//         disabled={!name}
//       >Submit</button>
//     </form>
//   )
// }

// // function Beer({ beer, deleteBeer, editBeer }) {

// //   function Delete(e) {
// //     // console.log(e);
// //     deleteBeer(e);
// //   }

// //   function handleClick(e) {
// //     editBeer(e)
// //   }

// //   return (
// //     <li>{beer.name}
// //       <button onClick={() => { Delete(beer.id) }} >
// //         Detete</button>
// //       <button onClick={() => { handleClick(beer.id) }}>{beer.available ? "판매중" : "품절"}</button>
// //     </li>
// //   )
// // }

// function Beer({ beer, deleteBeer, editBeer }) {
//   /*
//   Beer 강사님 답안
//   함수를 추가로 선언하지 않아도
//   App()에서 가져온
//   deleteBeer와 editBeer 함수를 이용할 수 있다.
//   */
//   return (
//     <li>{beer.name}
//       <button onClick={() => { deleteBeer(beer.id) }} >
//         Detete</button>
//       <button onClick={() => { editBeer(beer.id) }}>{beer.available ? "판매중" : "품절"}</button>
//     </li>
//   )
// }

// function App(){
//   const [active, setActive]=useState(false);

//   const style={
//     position : "fixed",
//     bottom:"0",
//     left:"0",
//     width:"100%",
//     // dynamic style
//     maxHeight: active?"100px":"0",
//     backgroundColor:"#eee",
//     transition:"0.2s",
//   }

//   const drawer=(
//     <div style={style} onClick={()=>setActive(false)}>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </div>
//   )

//   return (
//     <>
//     <h1>Drawer</h1>
//     <button
//     onClick={()=>setActive(true)}
//     >
//       Button
//     </button>
//     {drawer}
//     </>
//   )
// }

// function App(){
//   const [active, setActive]=useState(false)
  
//   // const style={
//   //   position:"fixed",
//   //   // backgroundColor:"#eee",
//   //   left:"0",
//   //   top:"0",
//   //   bottom:"0",
//   //   // dynamic
//   //   width:active?"300px":"0",
//   //   display:active?"block":"none"
//   // }

//   // const navigation = (
//   //   <div style={style} onClick={()=>setActive(false)}>
//   //     <ul>
//   //       <li>list item</li>
//   //       <li>list item</li>
//   //       <li>list item</li>
//   //     </ul>
//   //   </div>
//   // )
//   // return(
//   //   <>
//   //   <h1>Navigation</h1>
//   //   <button onClick={()=>setActive(true)}>
//   //     Button
//   //   </button>
//   //   {navigation}
//   //   </>
//   // )

//   /**강사님 답안 : style 속성으로 사이드바와 오버레이를 나누었다. */
//   const style={
//     sideBar:{
//       position:"fixed",
//       backgroundColor:"#fff",
//       top:"0",
//       // dynamic
//       left:active?"0":"-300px",
//       zIndex:"1",
//       width:"300px",
//       height:"100%",
//       transition:"0.2s",
//     },
//     overlay:{
//       position:"fixed",
//       top:"0",
//       left:"0",
//       width:"100%",
//       height:"100%",
//       backgroundColor: "rgba(0 0 0 / 0.2)",
//       // dynamic
//       display:active?"block":"none"
//     }
//   }

//   return(
//     <>
//     <h1>Navigation</h1>
//     <button onClick={()=>setActive(true)}>
//       Button
//     </button>

//     {/* Navigation */}
//     <nav style={style.sideBar}>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </nav>

//     {/* Overlay */}
//     <div
//     style={style.overlay}
//     onClick={()=>setActive(false)}
//     >
//     </div>
//     </>
//   )
// }

// function App(){
//   const [index, setIndex]=useState(0);

//   const images=["foo.jpg","bar.jpg","baz.jpg"];

//   const container={
//     width: "100px",
//     height:"100px",
//     backgroundColor:"#ddd",
//     display:"inline-flex",
//     //dynamic
//     transform:`translateX(-${index*100}px)`,
//     transition:"0.2s"
//   }

//   const item={
//     width:"100%",
//     height:"100%",
//     border:"1px dashed",
//     flexShrink:"0",
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center"
//   }

//   const list=images.map(img=>(
//     <div key={img} style={item}>
//       {img}
//     </div>
//   ))

//   return(
//     <>
//     <h1>Carousel</h1>

//     {/* img */}
//     <div className=''>
//       <h3>Images</h3>
//       <div className="cotainer" style={container}>
//         {list}
//       </div>
//     </div>

//     {/* nav */}
//     <div className=''>
//       <h3>Navigation</h3>
//       <button
//       onClick={()=>setIndex(index -1)}
//       style={{visibility: index===0 && "hidden"}}
//       >
//         Pre
//       </button>
//       <button
//       onClick={()=>setIndex(index+1)}
//       style={{visibility:index===2 && "hidden"}}
//       >
//         Next
//       </button>
//     </div>

//     {/* indicator */}
//     <div className=''>
//       <h3>Indicator</h3>
//       <div>
//         {images.map((img,dot)=>(
//           <span
//           key={dot}
//           style={{color:dot===index && "red"}}
//           >
//             =
//           </span>
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }

// # Router
// function Home(){
//   return <h1>Home</h1>
// }

// function Posts(){
//   return(
//     <>
//     <h1>Posts</h1>
//     <ul>
//       <li>
//         <Link to="/post/p1">Post1</Link>
//       </li>
//       <li>
//         <Link to="/post/p2">Post2</Link>
//       </li>
//       <li>
//         <Link to="/post/p3">Post3</Link>
//       </li>
//     </ul>
//     </>
//   )
// }

// function Post(){
//   //useParams(): url로 전달된 parameter를 가지고 있는 객체를 return 한다.
//   const params = useParams();
//   const postId=params.postId;

//   return(
//     <>
//     <h1>Post</h1>
//     <p>{postId}</p>
//     </>
//   )
// }

// function Contact(){
//   return <h1>Contact</h1>
// }

// function NotFound(){
//   return <h1>404 NotFound</h1>
// }


// function App(){
//   return(
//     <Router>

//       {/* Navigation */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/posts" element={<Posts/>}/>
//         <Route path="/post/:postId" element={<Post/>}/>
//         <Route path="/contact" element={<Contact/> }/>
//         <Route path="*" element={<NotFound/>}/>
//       </Routes>

//     </Router>
//   )
// }

// const AuthContext = createContext();

// function AuthProvider({children}){
//     //AuthProvider의 children은 user(State)에 접근이 가능하다
//     const [user, setUser]= useState(null);

//     function signIn(username){
//         setUser(username)
//     }

//     function signOut(){
//         setUser(null)
//     }

//     const value= {user, signIn, signOut};

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// function Home(){
//     return <h1>Home</h1>
// }

// function Posts(){
//     return (
//         <>
//         <h1>Posts</h1>
//         <ul>
//             <li>
//                 <Link to="/post/p1">Post1</Link>
//             </li>
//             <li>
//                 <Link to="/post/p2">Post2</Link>
//             </li>
//         </ul>
//         </>
//     )
// }

// function Post(){
//     const auth = useContext(AuthContext);

//     const params = useParams();
//     const postId = params.postId;

//     if(!auth.user){ // 인증구현
//         // 로그인 하지 않은 경우 페이지를 볼 수 없음
//         return <p>Unauthorized</p>
//     }

//     return (
//         <>
//         <h1>Post</h1>
//         <p>{postId}</p>
//         </>
//     )
// }

// function NotFound(){
//     return <h1>404 NotFound</h1>
// }

// function Login(){
//     const auth = useContext(AuthContext);
//     const [username, setUsername]=useState("");

//     function handleSubmit(e){
//         e.preventDefault();
//         auth.signIn(username);
//     }

//     const loginTemplate=(
//         <form onSubmit={handleSubmit}>
//             <h1>Sign in</h1>
//             <input
//             type="text"
//             onChange={(e)=>setUsername(e.target.value)}
//             />
//             <button type="submit">login</button>
//         </form>
//     )

//     const logoutTemplate=(
//         <div>
//             <h1>Sign out</h1>
//             <p>Hello! {auth.user}</p>
//             <button onClick={auth.signOut}>logout</button>
//         </div>
//     )

//     return auth.user? logoutTemplate : loginTemplate;
// }

// function App(){
//     return (
//         <Router>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="posts">Posts</Link>
//                     </li>
//                     <li>
//                         <Link to="login">Login</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <AuthProvider>
//                 <Routes>
//                     <Route path="/" element={<Home/>}/>
//                     <Route path="posts" element={<Posts />}/>
//                     <Route path="post/:postId" element={<Post/>}/>
//                     <Route path="login" element={<Login/>}/>
//                     <Route path="*" element={<NotFound/>}/>
//                 </Routes>
//             </AuthProvider>
//         </Router>
//     )
// }

// # fetch data (데이터 요청하기)

// function App(){
//     const [count, setCount]= useState(0);

//     // useEffect(Hook)
//     // 비동기적으로 작동한다.

//     // 사용방법
//     // useEffect(callback) : 컴포넌트가 실행될 때마다 callback이 실행된다.
//     // useEffect(callback, []) : 컴포넌트의 최초 실행시에만 callback이 실행된다.
//     // useEffect(callback, [dep1, ... ]) : 컴포넌트의 최초 실행시, dependency가 없데이트 될 때마다 callback이 실행된다.
    
//     useEffect(()=>{
//         const time = new Date().toLocaleTimeString();
//         console.log(time);
//     },[])

//     return(
//         <>
//         <h1>App</h1>
//         <p>App이 {count}번 렌더링 되었습니다</p>
//         <button onClick={()=>setCount(count+1)}>Add</button>
//         </>
//     )
// }

function fakeApi(){
    const beers=[
        {id:"b1", name:"Heineken"},
        {id:"b2", name:"Guinness"},
        {id:"b3", name:"Asahi"},
    ]

    const promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(beers)
        },2000)
    })

    return promise;
}

function App(){
    const [beers, setBeers] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded]= useState(false);

    useEffect(()=>{
        fakeApi()           // return promise;
        .then(data =>{      // promise.then : 성공했을 때
            setBeers(data)
        })
        .catch(error=>{     //promise.catch : 실패했을 때
            setError(error)
        })
        .finally(()=>setIsLoaded(true)) // 성공|실패 여부와 상관 없이 반드시 실행됨
    },[])

    if(error){
        return <p>failed to fetch</p>
    }
    if (!isLoaded){
        return <p>fetching data...</p>
    }

    return(
        <>
        <h1>Beers</h1>
        <ul>
            {beers.map(beer=>(
                <li key={beer.id}>{beer.name}</li>
            ))}
        </ul>
        </>
    )


}
