// ==##1004
// # JacaScript 기초

// # DATA TYPE
// -종류 : Number, Boolean, Null, Undefiend, String, BigInt, Symbol

// ## 할당 연산자
// 종류 : =, +=, -=, *=, /=(몫), %=(나머지), **=

// ## 수리 연산자
// 종류 : +,-,*,/,++,--,**,%(나머지)

// ## 비교 연산자
// 종류 : ==, ===, !=, !==, >, <. <=, >=, ?
// boolean을 return한다 (True/False)

// ==
// value만 비교한다

// console.log(1==true)
// console.log(0==false)

// console.log(null==undefined)        //true
// console.log(""==0)                  //true
// console.log(""==false)              //ture

// ==
// value와 type 모두 비교한다. (엄격한 비교)

// console.log(1===true)
// console.log(0===false)

// console.log(null===undefined)
// console.log(""===0)
// console.log(""===false)

// != (다르다)
// value만 비교를 한다.

// !==
// value와 type을 비교한다.

// console.log(1!="1")
// console.log(1!=="1")
// console.log(1!=true)
// console.log(1!==true)

// ? (삼항연산자, Ternary)
// 조건 ? 참일때 : 거짓일때

// var r =1>0 ? "foo" : "bar"
// console.log(r)

// ### 논리 연산자 (Logical operator)
// 종류 : &&(AND), ||(OR), !(NOT,반대)
// boolean을 return한다. (true/ false)

// // &&(AND)
// var x=1>0 && 1<2;
// console.log(x)

// // ||(OR)
// var c=1>0 ||1<2;
// console.log(c)

// // !

// console.log(!true)
// console.log(!false)
// console.log(!(1>3))             //숫자는 괄호로 묶어주는 것이 좋다
// var x=1>0;
// console.log(!x)

// ### 타입 연산자
// 종류 : typeof, instanceof
// value의 타입을 return 한다.

// console.log(typeof 0)
// console.log(typeof null)            //object
// console.log(typeof undefined)       //undefined

// ==##1004
// # 조건문
// if/else/elseif
// switch

// if 단독으로 쓰일 때

// if (1>2){
//     console.log("foo")
// }

// if(1>2){
//     console.log("foo")  //조건이 참인 경우 실행
// }else{
//     console.log("bar")  //조건이 거짓인 경우 실행
// }

// if(1>2){
//     console.log("Foo")
// } else if (3>2){
//     console.log("bar")
// }else{
//     console.log("baz")
// }

// 조건 부분에 boolean이 아닌 데이터 타입이 올 경우

// console.log(1>0)    //비교연산자는 boolean을 return한다.

// if(""{      //조건에서 빈문자는 false를 취급 >> 오류발생
//     console.log("foo")
// })

// if("hello"){    //빈문자가 아닌 경우 true로 취급한다.
//     console.log("Foo")
// }

// if(null){   //false로 실행되지 않음.
//     console.log("foo")
// }

// if(undefined){  //false로 실행되지 않음
//     console.log("foo")
// }

// var x;  //선언 O, 정의 X 
// if(x){  //undefined >> false로 취급되어 실행되지 않음
//     console.log("foo")
// }

// if(0){      //false로 실행X
//     console.log("foo")
// }

// if(1){      //True로 실행 O
//     console.log("baz")
// }
// if(-2){     //True
//     console.log("bar")
// }

// Switch
// 엄격비교

// var result;

// switch(2){                  //case 적을 때 라인을 잘 맞추어야 한다.
//     // break; //break 없으면 다음 case로 넘어간다. (break 또는 default가 나올 때까지)
//     case 1:
//         result="foo";
//         break;
//     case 2:            
//         result="bar";
//         break;
//     case 3:
//         result="baz";
//         break;
//     default:
//         result="null";
// }
// console.log(result)

// # 반복문
// For
// While

// // For 반복문

// var sum=0;

// for(var i=0; i<=10; i++){
//     sum+=i;     //sum=sum+i
// }
// console.log(sum);

// for 문에서 break와 continue 키워드

// for(var i=0; i<=10; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i)
// }

// for(var i=1; i<=10; i++){
//     if(i===5){      //건너 뛴다. 5는 출력되지 않음.
//         continue;
//     }
//     console.log(i);
// }

// while

// var sum=0;
// var i=1;
// while(i<=10){
//     sum+=i;
//     i++;
// }
// console.log(sum)

// == Q. 1부터 10까지의 숫자중 짝수만 출력해보세요.
// "use strict";           // <엄격모드> 변수선언해주지 않으면 error가 발생한다
// for(let i=1;i<=10;i++){     //변수선언을 해주어야한다. let i=1 O, i=1 X
//     if(i%2===0){
//         console.log(i)
//     }
// }

// // 강사님 답안(1) : 증가연산자
// for (let i=2;i<=10; i+=2){
//     console.log(i)
// }

// # 함수(FUNCTION)
// 호출될 때만 실행되는 한 블록의 코드

// 함수를 선언하는 방식(function declaration)
// 1 함수선언식
// 2 함수표현식
// 3 화살표함수

// 함수선언식
// function f(){
//     // {block}안 : 함수 정의 (function definition)
//     console.log("Foo")
// }

// // 호출
// f()

// 함수표현식
// 변수에 익명함수(이름이 없는 함수-->fucntion 뒤에 name 없이 ()괄호인 구조)를 할당한다
// var f=function(){
//     console.log("foo");
// }

// f()

// 화살표함수
// var f=()=>{
//     console.log("foo")
// }

// // 호출
// f()

// Hoisting (게양) : 호출이 선언보다 위에 위치할 때
// 함수선언식에만 적용된다.

// 함수 호출
// f()

// // 함수 선언
// // 함수의 선언이 호출 시점보다 위로 올라간다.
// function f(){
//     console.log("foo")
// }

// console.log(f)          //undefined
// f();                     //error

// // hosting이 되지 않는다.
// var f = ()=>{
//     console.log("foo")
// }

// 함수에서의 return

// function f(){
//     console.log("foo");
//     return;                 //return 아래의 코드는 실행되지 않는다.
//     console.log("bar");
// }

// f();

// function f(){
//     return console.log("Foo");      //return 옆에는 실행된다. 아래만 실행되지 않는다.
//     console.log("bar")
// }
// f()

// 함수의 인자(parameter, argument)

// function f(data){   //data -->parameter
//     console.log("argument: "+data);
// }

// f("foo")        //"foo" -->argument

// function f(a,b){
//     return a+b;
// }

// console.log(f(1,2));

// == Q.사칙연산 함수를 만들어보세요
// 함수 이름음 add, substract, multiply, divide
// 함수의 return 값을 변수에 담아 출력해보세요.

// function add (a,b){
//     return a+b;
// }
// function substract (a,b){
//     return a-b;
// }
// function multiply (a,b){
//     return a*b;
// }
// function divide (a,b){
//     return a/b;
// }

// console.log(multiply(4,5))

// // 강사님 답안
// // 함수 선언 이후 변수에 담기

// var a= add(1,2);
// var b=substract(1,2)
// var c=multiply(1,2);
// var d=divide(1,2)

// console.log(a,b,c,d)

// # callback
// 다른 함수의 인자가 되는 함수 = callback함수라고 부른다

// function f1(callback){      //callback -->parameter
//     var r = callback()
//     console.log(r)
// }

// function f2(){
//     return"foo"
// }

// f1(f2);                 //"Foo"
// console.log(f1(f2))     //undefiend
// console.log(f2(f1))     //"Foo"
// console.log(f2())       //"Foo"

// function f1(callback){
//     var r = callback();
//     console.log(r)
// }

// f1(function(){              //익명함수가 callback일 때
//     return "foo";
// })

// function f1(callback){
//     var r=callback();
//     console.log(r)
// }

// function f2(){
//     return "Foo"
// }

// f1(function(){          //익명함수가 callback이다
//     return f2()
// })

// f1( () => {
//     return f2();
// })

// ==##1005

// function f1(cb){      //f1()만 사용 X
//     let r=cb();
//     console.log(r)
// }

// function f2(){          //f2()는 "foo"를 return하는 함수
//     return "Foo"
// }

// function f1(callback){
//     let r=callback()
//     console.log(r)
// }

// // callback이 익명함수일때
// f1(function (){
//     return "Foo"
// })

// function f1(callback){
//     let r=callback()
//     console.log(r)
// }

// function f2(a,b){
//     return a+b
// }

// // f1(f2(1,2))      //error >f1(3) callback 함수가 함수가 아닌 3이 되어 error

// f1(function(){      // f1에 대입할 익명함수 필요
//     return f2(1,2)
// })

// function f1(callback){
//     var r=callback(1,2);
//     console.log(r)
// }

// function f2(a,b){
//     return a+b;
// }

// f1(function(x,y){
//     return f2(1,2)
// })

// # 변수의 종류
// var, let, const

// -----------
// var
// -----------
// 변수(foo)를 선언하고 값(value "bar")을 정의한다
// var foo="bar";
// console.log(foo)

// 선언과 정의를 따로 할 수 있다.
// var foo;            //번수(foo) 선언
// foo="Bar"           //value("Bar") 정의

// console.log(foo)

// var foo;        
// foo="bar"
// foo="baz";              //다시 정의 가능

// console.log(foo)

// var foo = "bar"             //선언, 정의
// var foo = "Baz"             //재선언, 재정의

// console.log(foo)

// -----------
// let
// -----------
// let foo="bar"               //초기화(변수 선언 + 정의)
// console.log(foo)

// let foo;                    //선언
// foo="bar"                   //정의 따로 가능

// console.log(foo)

// let foo;                        //선언
// foo="bar"                       //정의
// foo="Baz";                      //다시정의
// console.log(foo)

// let foo="Bar";                      //선언
// let foo="baz";                      //재선언 불가

// console.log(foo)

// -----------
// const (constant, 상수: 변하지 않고, 항상 일정한 값을 갖는 수)   엄격. 변하면 안된다.
// -----------

// const foo="bar"             //선언 및 정의 (초기화)
// console.log(foo)

// const foo;                      //선언
// foo="bar";                      //정의 따로 불가

// console.log(foo)                //error: Missing initializer in const declaration :선언에 initializer 누락

// const foo="bar"
// const foo="baz"                  //재선언 불가

// console.log(foo)                //error:Identifier 'foo' has already been declared

// # 변수의 범위 (scope)
// 전역 범위 : 함수나 블록 밖에서 선언된 변수의 범위
// 블록 범위 : 블록 안에서 선언된 변수의 범위
// 함수(지역) 범위 : 함수 안에서 선언된 변수의 범위

// -----------------------
// 전역범위 (global scope)
// -----------------------
// const foo="bar";

// f()
// function f(){
//     // 함수 내부에서 전역변수에 접근 가능
//     console.log(foo)
// }

// {   //block (조건문, 반복문, 그냥 사용할 수도 있다)
//     // 블록 내부에서 전역변수에 접근 가능
//     console.log(foo)
// }

// // 함수, 블록이 아닌 범위에서 전역변수에 접근 가능
// console.log(foo)

// -----------------------
// 함수(지역) 범위
// -----------------------
// f()
// function f(){
//     // 함수(지역)범위를 가지는 변수
//     let foo="bar"

//     // 함수 내부에서 접근 가능
//     console.log(foo)
// }

// 함수 외부에서 지역변수에 접근 불가
// console.log(foo)             //foo is not defined : 정의되지 않은 함수

// -----------------------
// 블록 범위 (block)
// -----------------------

// {
//     var foo="foo";
//     let bar ="bar";
//     const baz="Baz";
// }

// console.log(foo)            //가능
// console.log(bar)            //불가능
// console.log(baz)            //불가능

// # 함수의 범위
// 전역 범위 : 블록 또는 함수 외부에서 선언된 함수의 범위
// 블록 범위 : 블록 안에서 선언된 함수의 범위
// 함수(지역) 범위 : 함수 안에서 선언된 함수의 범위

// ==(1)
// function f(){
//     return "foo"
// }

// // 블록 또는 함수 외부에서 접근
// console.log(f())

// // 블록 내부에서 접근
// {console.log(f())}

// // 함수 내부에서 접근
// x()
// function x(){
//     console.log(f())
// }

// ==(2)
// f1()                            //함수 내부의 값이 출력되려면 함수가 선언되어야 한다.
// function f1(){
//     // 지역범위를 갖는 함수
//     function f2(){}
//     console.log(f2)
// }

// console.log(f2)                 //error

// ==(3)
// {
//     // 블록 안에서 선언된 함수
//     function f(){}
// }

// console.log(f)

// ==Q. 콘솔에 현재시간을 알려주는 시계를 만들어보세요
// setInterval(callback,ms)
// ms간격으로 callback 실행
// 1s=1000ms

// console.log(new Date().toLocaleTimeString());


// setInterval(function f(){
//         return console.log(new Date().toLocaleTimeString())
// },10000)

// // 강사님 답안
// // 변수 선언 및 정의 후 출력
// setInterval(function(){
//     let time=new Date().toLocaleTimeString();
//     console.log(time)
// }, 1000)

// #Array(배열)
// 한개 이상의 값을 가진 상태

// let arr = [10,20,30]

// console.log(arr)

// console.log(arr[0])             //배열의 0번째 index value에 접근
// console.log(arr.length)         //배열의 value 개수

// let arr=["foo",20,"baz"]

// console.log(arr)

// // update
// arr[1]="bar"
// console.log(arr)

// // add
// arr[3]=40;
// console.log(arr)

// 반복문으로 Array 순회하기
// let arr=["foo","bar","baz"]


// // array의 item(value) 모두 출력 가능
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// ==Q.1부터 10까지의 숫자로 이루어진 배열을 만들어보세요

// let arr=[];

// for(let i=0; i<10; i+=1){
//     arr[i]=i+1
// }
// console.log(arr)

// // 강사님 답안
// for(let i=0; i<10; i++){
//     arr[i]=i+1;
// }

// console.log(arr)

// # Object
// 관련된 데이터와 함수의 집합

// const cat={
//     // key(property, 속성) : value
//     name:"Kitty",
//     age:2,
//     home:null,
//     // value가 함수인 것을 메서드(method)라고 부른다
//     sound:function(){
//         return "meow"
//     }
// }

// // 객체에 접근
// console.log(cat)
// // cat의 name 속성에 접근
// console.log(cat.name)
// // cat의 sound 메서드에 접근
// console.log(cat.sound())

// 객체를 업데이트 하기

// const cat={
//     name:"Kitty",
//     age:2,
//     home:null,
//     sound:function(){
//         return "meow"
//     }
// }

// cat의 home 속성값 변경
// cat.home="Mapo-gu"
// console.log(cat)

// cat의 age 속성 삭제
// delete cat.age;
// console.log(cat)

// cat에 새로운 속성 color 추가
// cat.color="Mixed"
// console.log(cat)

// == Q. 숫자를 대입하면 4칙연산의 결과값을 return 하는 함수를 만들어 보세요.

// function calc(a,b){
// }



// function calc(a,b){
//     const calc={
//         add:function(a,b){
//             return a+b
//         },
//         sub:function(a,b){
//             return a-b
//         },
//         mul:function(a,b){
//             return a*b
//         },
//         divi:function(a,b){
//             return a/b
//         },
//     }
    
// }

// 강사님 답안
// return object 형식으로 만들기
// (1)함수 정의 , (2)함수 선언 (3) 호출

// function calc(a,b){
//     return {
//         add:a+b,
//         sub:a-b,
//         mul:a*b,
//         div:a/b
//     }
// }

// let r=calc(4,5)
// console.log(r)

// ==## 1008
// # 에러와 에러처리

// f()                     //ReferenceError > app crashed

// (1) try catch 구문을 이용한 에러 처리

// try{
//     // 코드를 작성한다
// f()
// }catch(err){
//     // 에러가 발생할 경우 catch 블록에서 처리한다
//     console.error(err)
// }                       //ReferenveError > clean exit

// try{
//     // SyntaxError (문법에러)는 compile 에러를 발생시킨다.
//     // compile : 컴파일러가 코드를 실행시키기 위해 읽는 단계
//     // try catch에서 compile에러는 처리할 수 없다
//     f());
// }catch (err){
//     console.error(err)      
// }                           //SyntaxError > app crashed

// error 객체의 종류
// 1.RangeError
// 2.ReferenceError
// 3.SyntaxError
// 4.TypeError
// 5.URIError

// error 객체의 속성(property)
// name
// message
// stack

// try{
// f();
// }catch(err){
//     console.error("name : ",err.name)           //ReferenceError
//     console.error("message : ",err.message)     //f is not defined
//     // console.error("stack : ", err.stack)
// }

// 1.RangeError
// try{
//     const pi=Math.PI;
//     console.log(pi)

//     // RangeError : 값이 정해진 범위를 벗어났을 때 발생한다.
//     // toPrecision() : 인자는 1에서 100 사이어야 한다.
//     console.log(pi.toPrecision(200))
// }catch(err){
//     console.error(err)
// }

// 2.ReferenceError
// try{
//     // 존재하지 않는 변수를 참조(refer)했을 때 발생한다
//     console.log(x)
// }catch(err){
//     console.error(err)
// }

// 3.SyntaxError
// try{
//     // SyntaxError(문법에러)
//     // SyntaxError는 컴파일에러를 발생시킨다.
//     console.log(2022))
// }catch(err){
//     console.error(err)
// }

// 4.TypeError
// try{
//     //TypeError(타입에러)
//     // 값이 예상된 타입이 아닐 때 발생한다.

//     // setInterval(callback,ms)
//     setInterval(null,1000)
//     // TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received null
// }catch(err){
//     console.error(err)
// }

// 5.URIError
// (URI(전체) > URL(소속))
// try{
//     decodeURI("%")
//     // URIError: URI malformed      // uri가 잘못 형성되었다.
// }catch(err){
//     console.error(err)
// }

// ==##1011
// ##커스텀 에러 객체(Object)로 커스텀 에러 발생시키기

// try{
//     const foo="baz";

//     if (foo !=="bar"){
//         // 커스텀 에러 객체를 생성한다
//         const err={
//             name:"CustomError",
//             message:"bar만 가능합니다"
//         }

//         // 커스텀 에러 객체를 throw 한다.
//         throw err;
//     }

// } catch (err){
//     console.error(err)
// }

// ## try catch finally

// try {
//     console.log("foo")
// } catch(err){
//     console.error(err)
// }finally{
//     // finally{} : 에러 발생 유무와 상관없이 항상 실행된다.
//     console.log(".")
// }

// == Q. 15살 소녀가 CU에서 술을 사려고 한다.
// 커스텀 에러를 발생시켜서 이 상황을 중단시켜보세요

// try {
//     const age = 2
    
//     console.log(age,"세 여자가 CU에서 술을 사려고 한다")

//     if(age<20){

//         // err Object는 name, message로 이루어져있다.
//         // 이후에 출력할 메세지는 if 구문 안에서 throw 절 이전에 console.log()를 입력하여 출력하면 되겠다.
//         const err={
//             name:"AgeError",
//             message:"20세 이하의 청소년은 구입 불가 상품입니다."  
//         }
//         // 20-age=0 인 경우에도 출력이 된다. > 조건문에 있는 등호 때문. 
//         // 등호 없이 부등호로 조건문을 표현하는 것이 좋겠다.
//         console.log(20-age,"년 이후에 다시 오세요")

//         // throw 밑에 코드는 실행되지 않는다
//         throw err;
//     }

//     console.log("술사기 성공")
    
// } catch(err){
//     console.error(err)
// }

// app crashed
// throw "Error!"          //throw 했지만 catch 하지 않았기 때문에 error 발생

// ## class
// 객체 생성을 위한 템플릿. 첫 문자가 대문자여야 한다.

// class Cat {             //첫 문자 대문자

//     // constructor (생성자)
//     // 인스턴스를 생성하자마자 실행되는 특별한 메서드
//     // constructor는 아무것도 return할 수 없다.
//     // 인스턴스의 초기 속성을 설정하는데 주로 사용된다.
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// // cat1은 Cat의 인스턴스이다.
// // cat1은 Object 이다.
// const cat1=new Cat("kitty", 2);
// const cat2=new Cat("Alfredo",3);

// console.log(cat1)
// console.log(cat2)

// console.log(cat1 instanceof Cat)    //true
// console.log(cat2 instanceof Cat)    //true

// ## class의 속성과 메서드

// class MapoguCat{
//     constructor(name){
//         this.name=name;
//     }

//     // MapoguCat의 속성
//     home="Mapo-gu";

//     // MapoguCat의 메서드
//     sound(){
//         return "meow"
//     }
// }

// const cat = new MapoguCat("kitty")

// console.log(cat)
// console.log(cat.home)       //name만 정의했는데, home 속성을 상속(inheritance)받았다
// console.log(cat.sound())    //sound 메서드를 상속받았다

// 인스턴스는 해당 클래스의 속성과 메서드를 상속받는다.

// ==Q. 삼산동에 살고있는 하얀색 말티즈를 생성하기 위한 템플릿을 작성해보세요

// class SamsandongMaltese {
//     // constructor가 있을 수도 있고, 없을 수도 있다. // 없어도 된다.
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     color="white";
//     home="Samsan-dong"

//     sound(){
//         return "bow"
//     }
// }

// const maltese=new SamsandongMaltese("salgu",2)

// // SamsandongMaltese의 속성과 메서드를 상속받았다
// console.log(maltese)
// console.log(maltese.home)
// console.log(maltese.sound())
// console.log(maltese.name)

// ==Q. 평리단길에 있는 고양이를 생성하기 위한 템플릿을 생성해보세요
// 메서드에 인자를 전달해보세요.

// class PyungridanCat {
//     constructor(name,age,color){
//         this.name=name;
//         this.age=age;
//         this.color=color;
//     }
//     home="Pyungridan-gil"

//     // 전달받은 인자를 호출하는 용도로 사용된다
//     sound(x){
//         return x; 
//     }
// }

// const cat1=new PyungridanCat("titi", 2,"yellow")

// console.log(cat1)

// // cat의 sound 메서드 호출
// // console.log(cat1.sound())

// // 클래스 내부가 아닌 밖에서 인자를 전달한다.
// console.log(cat1.sound("야옹"))
// console.log(cat1.sound("meow"))

// # 클래스의 static 속성과 static 메서드
// 크래스 자체의 속성과 메서드이다.
// 인스턴스는 호출할 수 없다.
// 클래스와 관련된 인스턴스 등에 유틸리티를 제공하는 역할을 한다

// class Cat{
//     constructor(name,months){
//         this.name=name;
//         this.months=months;
//     }

//     // static 속성
//     static description = "고양이는 18개월 이상이 되면 성체가 됩니다."

//     // static 메서드
//     static isAdult(months){
//         if(months<18){
//             return "아기고양이"
//         }else {
//             return "성체 고양이"
//         }
//     }

// }

// const cat =new Cat("Kitty",12)
// console.log(cat)

// // Cat의 인스턴스에서 static 속성과 static 메서드를 호출할 수 없다.
// // console.log(cat.description)        //undefined
// // console.log(cat.isAdult())          //cat.isAdult is not a function

// // Cat클래스가 자체적으로 호출한다.
// // Cat 클래스 또는 Cat 클래스의 인스턴스 등에 유틸리티를 제공한다.
// console.log(Cat.description)
// console.log(Cat.isAdult())
// console.log(Cat.isAdult(12))
// console.log(Cat.isAdult(22))

// // static 메서드로만 이루어진 클래스
// class Calculator{
//     static add(a,b){
//         return a+b
//     }
//     static substract(a,b){
//         return a-b
//     }
//     static multiply(a,b){
//         return a*b
//     }
//     static divide(a,b){
//         return a/b
//     }
// }

// // class 자체적으로 호출
// console.log("add :",Calculator.add(1,2))
// console.log("substract :",Calculator.substract(1,2))
// console.log("multiply :",Calculator.multiply(1,2))
// console.log("divide : ", Calculator.divide(1,2))

// # JavaScript의 미리 정해진 클래스 (빌트인 클래스)
// 종류
// 문자처리 : String
// 숫자 및 날짜 : Number, Math, Date
// Indexed collection : Array
// 에러 : Error, SyntaxError, ReferenceError, TypeError, ...
// 기타 : Promise, JSON

// 빌트인 클래스의 인스턴스 만들기
// 부제 : JavaScript에서 모든 데이터는 Object 이다

// const foo=new String("bar")

// (1)빌트인 클래스의 인스턴스 만들기
// console.log(foo)            //String:'bar'
// console.log(typeof foo)     //object (속성과 메서드를 가질 수 있다.)

// (2)literal표기법을 이용하여 인스턴스 만들기
// string 클래스의 인스턴스를 literal 표기법을 이용해 생성한다.
// const foo="bar"                 //literal 표기법 (클래스를 호출하지 않고 값을 정의한다)
// console.log(foo)
// console.log(typeof foo)         //string        //string 클래스의 인스턴스이다       //object이다

// (1),(2)의 typeof 가 다르다고 해도 둘다 object이며 String 클래스의 인스턴스인 것이다.


// console.log("foo".toUpperCase())    //string 클래스의 메서드를 호출할 수 있다.

// const num=new Number(10)
// console.log(num)
// console.log(typeof num)

// const num=2
// console.log(num)
// console.log(typeof num)

// // Date 클래스는 literal 표기법이 적용되지 않는다.
// const date=new Date()
// console.log(date)
// console.log(typeof date)

// const bool =new Boolean(true)
// console.log(bool)
// console.log(typeof bool)

// const bool=true
// console.log(bool)

// const arr = new Array("foo","bar","baz")
// const arr=["foo","bar","baz"]               //literal
// console.log(arr)

// Math의 static 속성(인스턴스를 생성하지 않고 바로 출력) 'PI'
// const pi = Math.PI;
// console.log(pi)

// // Error 클래스는 다양한 종류의 Error의 인스턴스 생성에 사용된다.
// const err = new Error("Something's broken!")
// // console.log(err)
// console.log(err.name)       //Error, 에러 인스턴스의 이름은 클래스와 같다.
// console.log(err.message)    //Something's broken!   //인자로 전달한 값

// // 빌트인 클래스의 인스턴스로 커스텀 에러 발생시키기

// // 사용자가 정의한 함수 f
// function f(data){
//     if(typeof data !=="string"){
//         // throw : 커스텀 에러
//         // 빌트인 클래스의 인스턴스(TypeError)를 사용했다
//         throw new TypeError("인자는 문자여야만 합니다.")
//     }
//     // 에러 발생시 throw 아래 코드는 실행되지 않는다.
//     console.log("인자:",data)
// }

// try{
//     // 함수를 호출했다.
//     f(2)
// } catch(err){
//     console.error(err)
// }

// ==Q. 빌트인 클래스인 RangeError의 인스턴스를 사용해서
// 15세 소녀가 CU에서  술을 사용하려고 하는 것을
// 막아보세요

// function f(age){
//     console.log(age,"세 사람이 술을 사러 CU에 가고 있다")
    
//     if (age<20) {
//         console.log(age,"세 미성년자는 구입할 수 없습니다.")
//         console.log(20-age,"년 이후에 다시 오세요")
//         throw new RangeError ("나이에러")
//     }

//     console.log("술 사기 성공")

// }
// try{
//     f(15)
// }catch(err){
//     console.error(err)
// }

// // 강사님 답안
// // try 블록 안에서 다 해결했다.

// try{
//     const age=14;
//     console.log(age,"세 소녀가 술을 사러 CU에 가고있다")
   
//     if (age<20){
//         const err = new RangeError("나이에러")
//         console.log(20-age,"년 이후에 다시 오세요")
//         // throw : 커스텀 에러를 발생시킨다
//         throw err;
//     } 

//     console.log(age,"세 술을 사는데 성공했다!")
// } catch(err){
//     console.error(err)
// }

// # 빌트인 클래스의 인스턴스들의 속성과 메서드 사용하기

// String

// const foo="bar"
// console.log(foo.length)
// console.log(foo.toUpperCase())
// console.log(foo.split("a"))     //인자를 기분으로 문자열을 분할하여 Array형태로 return한다.
// console.log(foo.replace("r","z"))   //.replace(a,b) : 문자열 중에 a를 b로 대체한다

// Number
// const year=2022;
// console.log(year)               //Number타입
// console.log(year.toString())    //Number 타입을 String으로 변환한다.
// console.log(year.toString(2))   //toString(기수) : 해당 인자의 기수 법으로 변환한다
// console.log(year.toPrecision(10))   //정밀도. 숫자의 개수를 인자에 맞게 출력한다.
// console.log(Number.isNaN(year))         //static메서드. 인스턴스가 아닌 class로 호출한다.   //NaN(Not a Number), isNaN(인자) : 인자가 NaN인지 판별(true/false)한다.

// Math
// console.log(Math.random())      //0에서 1사이의 소수를 return한다.
// console.log(Math.PI)            //Pi
// console.log(Math.round(0.5))        //인자 반올림
// console.log(Math.ceil(2.1))         //올림
// console.log(Math.floor(3.9))        //내림
// console.log(Math.pow(2,7))          //거듭제곱  //.pow(a,b) : a의 b승
// console.log(Math.sqrt(16))          //제곱근 (squre root)
// console.log(Math.max(10099,2))       //최대값    //.max(a,b) : a와 b중에 최대값
// console.log(Math.min(2,108))         //최소값

// Date
// const date = new Date()
// console.log(date)           //object    //GMT시간 (그리니치 평균시)
// console.log(date.toLocaleString())      //현지시간(문자열로 출력)
// console.log(date.toLocaleTimeString())  //현지 시간만 출력 (문자열)

// Array
// const arr=["foo","bar"]
// console.log(arr)

// arr.push("baz")             //새로운 item을 마지막에 추가한다.
// console.log(arr)

// const arr=["foo","bar","baz"]
// arr.pop()                       //마지막 item을 제거한다.
// console.log(arr)

// const arr=["foo","bar","baz"]

// const r=arr.slice(1,2)              //.slice(시작, (끝)) : 새로운 array(시작:포함, 끝:미포함 -> 끝-1번쨰 포함)를 return한다. 끝은 생략이 가능하다
// console.log(arr)
// console.log(r)
// const r=arr.slice(1)
// console.log(r)

// const arr=["foo","bar","baz"]

// console.log(arr.sort())             //알파벳 순서대로 정렬  //기본형으로 사용할때는 문자열 Array에만 정상적으로 작동한다.   

// const arr=[100,25]
// console.log(arr.sort())         //100과 25를 문자열로 변환한뒤 비교하여 정렬한다. (숫자 순서대로 정렬되지 않음)

// const arr=[20,10,30]

// console.log(arr.sort(function(a,b){     //숫자를 정렬할 때 sort의 인자를 수정한다. 
//     return a-b
// }))

// const arr1=["foo","bar"]
// const arr2=["baz"]
// const arr3=arr1.concat(arr2)            //arr1.concat(arr2) : arr1뒤에 arrr2를 연결한다

// console.log(arr3)

// ==Q. slice 메서드를 사용해서 b부터 f로 구성된 Array를 만들어보세요
// const arr=['a','b','c','d','e','f','g']

// console.log(arr.slice(1,6))

// map() 
// const arr=["foo","bar","baz"]

// // map(callback) 익명함수가 callback 함수이다.
// // callback에 배열의 value, index, array를 인자로 전달한다.
// // Array를 순회하면서 item에 특정한 메서드를 적용할 수 있다.
// // 새로운 Array를 return한다.
// console.log(arr.map(function (value,index,array){
//     return value.toUpperCase()
// }))

// const arr=[1,2,3,4,]

// console.log(arr.map(function(value, index, array){
//     return value*10
// }))

// // filter()
// const arr=["foo","bar","baz"]

// // Array를 순회하며 특정한 조건에 맞는 value로 구성된 새로운 Array를 return한다.
// console.log(arr.filter(function(value,index,array){
//     if(value.charAt(1)==='o'){      //charAt(index) : 문자열에서 index에 해당하는 문자를 return 한다 
//         return value
//     }
// }))

// Object

// const o={prop1:"foo",prop2:"bar", prop3:"baz"}

// console.log(Object.keys(o))     // Object의 key값(문자열의 형태)으로 이루어진 Array가 return된다.

// const o={prop1:"foo",prop2:"bar", prop3:"baz"}

// console.log(Object.entries(o))      // Object의 [key,value]를 value로 가진 Array형태로 return한다.

// const arr=[1,2,3,4,5,]

// console.log(arr.filter(function(value,index){
//     if(value>2){
//         return value
//     }
// }))

// ==Q.
// 1.origin으로만 구성된 Array를 만들어보세요(string)
// 2.유럽 맥주로만 구성된 Array를 만들어보세요(object)
// const beers=[
//     {
//         name:"Heineken", origin:"Netherlands"
//     },
//     {
//         name:"Kloud",origin:"S.Korea"
//     },
//     {
//         name:"Guiness",origin:"Ireland"
//     },
//     {
//         name:"Asahi",origin:"Japan"
//     }
// ]


// // 1.
// console.log(beers.map(function (value,index){
//     return value.origin
// }))

// // 2.
// console.log("European beers",beers.filter(function(value,index){
//     // && (and), ||(or)
//     if (value.origin==="Netherlands" || value.origin==="Ireland"){
//         return value
//     }
// }))

// # Destructing assignment (구조분해할당)
// (1) Array : Array의 item들을 개별적으로 변수에 담을 수 있게 한다.
// (2) Object : Object의 속성들을 개별적으로 변수에 담을 수 있게 한다.
// react에 주로 사용한다.

// (1) Array
// const arr=["foo","bar","baz"]

// // 기존의 방법
// // 변수 만들기
// const item0=arr[0]
// const item1=arr[1]
// const item2=arr[2]

// console.log(item0)
// console.log(item1)
// console.log(item2)

// const arr=["foo","bar","baz"]

// // 단순해진 문법
// const [item0,item1,item2]=arr;

// console.log(item0)
// console.log(item1)
// console.log(item2)

// function calculator(x,y){
//     return [x+y,x-y,x*y,x/y]
// }

// // return object 형태가 아닌 단순해진 문법
// const [add,substract,multiply,divide]=calculator(1,2)

// console.log("add:",add)
// console.log('substract:',substract)
// console.log("multiply:",multiply)
// console.log("divide:",divide)

// const beers=[
//     {name:"Heineken", origin:"Netherlands"},
//     {name:"Kloud",origin:"S.Korea"},
//     {name:"Guiness",origin:"Ireland"},
//     {name:"Asahi",origin:"Japan"}
// ]

// const [DeutchBeer,KoreanBeer,IrishBeer,JapaneseBeer]=beers;
// console.log(IrishBeer)      //value > object이다. object가 출력된다.

// (2) Object ({key:value}로 이루어졌다.)
// const o={prop1:"foo",prop2:"bar",prop3:"baz"}

// // Object의 속성들을 변수에 담았다
// const prop1=o.prop1;        //속성(property) (.속성(key))
// const prop2=o.prop2;
// const prop3=o.prop3;

// console.log(prop1)      //key로 접근하여 value를 출력했다.
// console.log(prop2)
// console.log(prop3)

// const o={a:"foo",b:"bar",c:"baz"}

// // 더 단순해진 문법
// const {a,b,c}=o;        //{object의 key로만 이루어짐}=object

// console.log(a)
// console.log(b)
// console.log(c)

// 함수에서 Destructing 사용하기

// const o={prop1:"foo",prop2:"bar",prop3:"baz"}

// f(o)
// function f(props){
//     const prop1=props.prop1
//     const prop2=props.prop2
//     const prop3=props.prop3

//     console.log(prop1)
//     console.log(prop2)
//     console.log(prop3)
// }

// function f(props){
    // 변수(a,b,c,)가 key값과 달라도 된다.
//     const a=props.prop1
//     const b=props.prop2
//     const c=props.prop3

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// const o={prop1:"foo",prop2:"bar",prop3:"baz"}

// f(o)
// function f({prop1,prop2,prop3}){
    // f({object의 key값들로 이루어져야한다.})
//     console.log(prop1)
//     console.log(prop2)
//     console.log(prop3)
// }

// ==Q. 다음과 같은 문장을 출력하는 함수를 정의해보세요 (구조분해할당을 사용하여 함수 파라미터를 정의)
// Guiness is originated in the brewery at Ireland.
// const irishBeer={name:"Guiness",origin:"Ireland"}

// const {name,origin}=irishBeer;

// // 문자열 사이에 , 대신 + 도 가능하다
// console.log(name, "is origineted in the brewery at",origin)

// // ==Q. 원산지에 일치하는 맥주이름의 변수를 만들어보세요.(구조분해할당 사용)
// const origins=["Netherlands","S.Korea","Irend","Japen"]

// const [Heineken,Kloud,Guiness,Asahi]=origins

// console.log(Heineken)

// 강사님 답안
// (1)
// 문자열 연결에 + 사용
// f(irishBeer)
// function f({name,origin}){
//     console.log(name+"is originated in the brewery at" + origin)
// }

// ==##1016

// # Spread Syntax (전개구문)
// Array: Array의 item을 간단하게 복사할 수 있다.
// Object: Object의 속성을 간단하게 복사할 수 있다.
// ...

// Array
// ...array이름 : push() 메서드와 비슷하다. item을 복사한다.
// const arr=["foo","bar"];
// const r=[...arr,"baz"];

// console.log(r);

//concat(): concatenation(연결) 메서드와 유사하다.
// const arr1=["foo","bar"];
// const arr2=["baz"];

// const r=[...arr1, ...arr2];
// console.log(r)

// const r=[...arr2,...arr1]
// console.log(r)

//slice()와 유사하다.
// const arr=["foo","bar","baz"];

// const [item0, ...rest]=arr;         //...rest : 나머지 item을 담은 array
// console.log(item0)
// console.log(rest)

//==##Q. Spread 문법을 사용하여 일본 맥주를 추가해 보세요.

// const beers=[
//     {name:"Heineken",origin:"Netherlands"},
//     {name:"Kloud",origin:"S.Korea"},
//     {name:"Guinness",origin:"Ireland"}
// ]

// const JapaneseBeer={name:"Asahi",origin:"Japan"}        //array가 아니다. array 메서드를 사용하면 적용이 안된다.

// console.log(...beers)       //array item을 출력한다.

// const arr=[...beers,JapaneseBeer]
// console.log(arr)

// Object

// 속성 업데이트
// const o={prop1:"foo", prop2:"bar", prop3:"baz"}
// const r={...o,prop2:null};      //...o : object의 속성을 복사한다. 같은 object 끼리 가능하다.

// console.log(r)

// const o={prop1:"foo",prop2:"baz"}
// //속성 추가
// const r={...o,prop3:"baz"}

// console.log(r)      

// ==## Q.duchBeer에 현재 이용가능한 맥주인지를 나타내는 새로운 속성 available : true를 추가해보세요.
// (Object의 Spread 문법 사용)

// const dutchBeer={name:"Heineken",origin:"Netherlands"}

// const a={...dutchBeer,available:"true"}
// console.log(a)

// //강사님 답안
// console.log({...dutchBeer,available:"true"})

// ==##Q. 기네스 맥주가 재입고가 되었다.
// Guinness 맥주의 available의 값을 true로 바꾸어 보세요.
// (map()메서드와 Spread 문법을 사용)

// const beers=[
//     { name:"Heineken",origin:"Netherlands",available:true},
//     {name:"Kloud",origin:"S.Korea",available:true},
//     {name:"Guinness",origin:"Ireland",available:false}
// ]


// const [item0,item1,item2]=beers
// console.log({...item2,available:true})


// 강사님 답안
// return 오브젝트로 리턴하였다. > 속성 업데이트
// (1)
// console.log(beers.map(function(value,index){
//         return {...value,available:true}       //{...value}Array의 아이템만 출력된다.
// }))

// (2)
// const r=beers.map(beers=>{
//     if (beers.name=="Guinness"){        
//         return {...beers,available:true}        //if의 return
//     }
//     return beers;               //map메서드의 function에 대한 return
// })

// console.log(r)

// (3) 
// const r= beers.map(value=>{
//     value.available=true;           //map() : value의 available 속성값을 모두 true로 바꾼다.
//     return value
// })

// console.log(r)

// ==##1017
// # JavaScript 비동기(Asynchronous) 프로그래밍
// 작업과정에 blocking(막힘)을 다루기 위한 방법이다
// 예)서버로부터 데이터를 요청하는 것과 그 처리

// function f(callback){
//     callback()
// }

// f함수는 동기(synchronous)함수이다.
// 호출된 순서대로 실행된다

// f(()=>{
//     console.log("foo")
// })
// console.log("bar")

// setTimeout(()=>{
//     console.log("foo")
// },1000)

// setTimeout : 대표적인 비동기 함수이다.
// 비동기 함수는 가장 마지막에 실행된다.
// setTimeout(()=>{
//     console.log("foo")
// },1000)
// console.log("bar")

// real world 예제
// 서버에게 데이터 요청하기

// 함수 정의(callback)
// function fetchData(callback){
//     const o={foo:"bar"}

//     setTimeout(()=>{
//         callback(o)
//     },1000)         //0초로 적어도 비동기함수이므로 가장 마지막에 실행된다.
// }

// // 함수 실행 > 비동기 함수이므로 나머지 작업이 모두 수행된 이후에 마지막에 수행된다. 
// fetchData(data=>{
//     console.log("data",data)
// })

// console.log("다른작업")

// 비동기에서 에러 다루기
// 서버에 데이터 요청하는 예제

// function fetchData(id, callback){
//     // id X (err)
//     if (!id){               //=>null, undefined, "" 
//         const err=new Error("id is required")

//         setTimeout(()=>{
//             callback(err,null)
//         },0)
//         return
//     }

//     // id O
//     const o={foo:"bar"}

//     setTimeout(()=>{
//         callback(null,o)
//     },1000)
// }

// // fetchData() 함수 호출
// fetchData(1,(err,data)=>{      
//     if(err){
//         throw err;
//     }
    
//     // err 아닌 경우 data를 정의한 함수에 전달. 
//     console.log("Data",data)
// })

// f는 동기함수 : 호출된 순서대로 실행된다.
// function f(callback){
//     callback()
// }

// f(()=>{
//     console.log("foo")
// })

// console.log("bar")

// f는 비동기 함수(setTimeout) : 호출된 순서와 상관없이 가장 마지막에 실행된다.
// function f(callback){
//     setTimeout(()=>{
//         callback()
//     },1000)
// }

// f(()=>{
//     console.log("foo")
// })

// console.log("bar")

// 실제 사용예시
// 블로킹을 방지할 수 있다.

// function fetchData(callback){
//     const o={foo:"bar"}

//     setTimeout(()=>{
//         callback(o)
//     },1000)
// }

// fetchData((data)=>{
//     console.log("data",data)
// })

// console.log("다음작업")

// 비동기 함수에서 에러처리
function fetchData(id, callback){
    if(!id){
        const err=new Error("id is required")
        setTimeout(()=>{
            callback(err,null)
        },1000)
        return
    }

    const o={foo:"bar"}

    setTimeout(()=>{
        callback(null,o)
    },1000)

}

//에러처리
// fetchData(null, (err,data)=>{
//     try{    //error
//         if(err){
//             throw err;
//     }
//     console.log("data",data)
// }catch (error){
//     console.error(error)
// }
// })

// # Promise
// Promise 객체는 비동기 작업의 성공/실패 여부와 그 결과값을 나타낸다.
// 비동기 작업의 가독성을 높이기 위해 사용된다.

// 구조 
// Promise class를 이용하여 인스턴스 만들기

// const o = new Promise((res,rej)=>{
// // res:resolve(fullfilled)
// // 비동기 작업의 성공
// // res("foo")

// // rej:rejected
// // 비동기 작업의 실패
// rej("bar")
// })

// console.log(o)      //상태 : fullfilled, 결과값 : "foo"
// console.log(o)      //상태 : rejected, 결과값 : "bar"

// async function을 사용해서 인스턴스 만들기
// async function f(){
//     // resolve(fullfilled)
//     // 비동기 작업의 성공
//     // return "foo"

//     // rejected
//     // 비동기 작업의 실패
//     throw "bar"
// }

// 실제 사용예시
// Promise 객체는 비동기적으로 작동한다.
// async function fetchData(){
//     const o={foo:"bar"}
//     return o;
// }

// fetchData()
// .then(data=>{           //.then()메서드 : Promise객체의 메서드
//     console.log(data)
// })

// console.log("다음작업")

// Promise 객체에서 에러처리
// async function fetchData(id){
//     if(!id){
//         const err=new Error("id is required!");
//         throw err
//     }

//     const o={foo:"bar"}
//     return o
// }

// //(1)Promise를 사용한 에러처리 방법 
// fetchData(null)
// .then(data=>{                   //데이터 처리(try {블록}과 유사하다)
//     console.log("data",data)
// })
// .catch(err=>{                   //에러 처리(캐치 메서드 안에서 해결한다.(catch{블록}과 유사하다))
//     console.error(err)
// })

// //(2)비동기 함수를 이용한 에러처리방법
// fetchData(null, (err,data)=>{
//     try{
//         if(err){
//             throw err;
//         }
//         console.log("data",data)
//     }catch(error){
//         console.error(error)
//     }
// })

// Promise의 async/await 문법
// 비동기 작업을 동기 작업처럼 할 수 있게 만든다
// 가독성면에서 가장 좋다.

// async function fetchData(id){
//     if(!id){
//         const err=new Error("id is required")
//         throw err;
//     }
//     const o={foo:"bar"}
//     return o
// }

// f()
// async function f(){
//     try{
//         // await : 비동기 작업이 끝날 때까지 기다린다.
//         // await은 async 함수 내부에서만 사용할 수 있다.
//         const data = await fetchData(null)      //data에 따라 err가 처리되거나 또는 data가 출력된다.
//         console.log(data)       //{foo:"bar"}
    
//         console.log("다음작업")
//     }catch (error){
//         console.error(error)
//     }
// }

// # JSON
// JavaScript Object Notation (JavaScript 객체 표기법)
// JavaScript 객체를 저장하거나 전송하기 위한 텍스트 포맷
// object를 표기하기 위해 텍스트 포맷으로의 변경이 필요하다. <형태 : `{오브젝트("key값도 쌍따옴표로 묶는다.":"value")}`로 감싼다.

// const o={foo:"bar"}
// const json=`{"foo":"bar}`

// console.log(o)          //object
// console.log(json)       //json포맷(텍스트)

// const o={foo:"bar"}
// // JSON.stringfy(object) : Object를 json 포맷으로 변환한다.
// const r= JSON.stringify(o)

// console.log(r)

// const json=`{"foo":"bar"}`
// // JSON.parse(json) : JSON포맷을 Object로 변환한다.
// const r=JSON.parse(json)

// console.log(r)       //object

const arr=`[{"prop1":"foo","prop2":"bar"}]`
const r=JSON.parse(arr)

console.log(r)





















































































































