import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, useNaving } from "react-router-dom"
import { AreaChart, ComposedChart, Legend, Bar, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { addMonths, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, parse, set, startOfDay, startOfISOWeek, startOfMonth, startOfWeek, subMonths } from 'date-fns'
import moment from 'moment';
import './App.css';

export default App;

const endDay=moment().format('YYYYMMDD');

const pagerow=30;

function fetchData({ startday, page ,pagerow }) {

  const url = `https://apis.data.go.kr/B500001/drghtSGIIdex_20211020/operInfoList_20211020?serviceKey=%2BeKIiP9KuILfRQMYW6mwid1FuD6OBJvjLh02%2FwqpUdnFfeK6KePliqFYtnqxnSQALgi0pHrlQPK6XD%2BXh2tfyg%3D%3D&pageNo=${page}&numOfRows=${pagerow}&obsrvtCd=11749&stDt=${startday}&edDt=${endDay}&_type=json`;


  const promise = fetch(url)
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })

  return promise;
}


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [startday, setStartDay] = useState("20190101");
  const [page, setPage] = useState(1);
  const [active, setActive]=useState(false);
  const [pagerow, setPageRow]=useState(30);

  useEffect(() => {
    fetchData({ startday, page, pagerow })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error)
        setError(error)
      })
      .finally(() => setIsLoaded(true))
  }, [startday, page, pagerow])

  if (error) {
    return <p>failed to fetch</p>
  }
  if (!isLoaded) {
    return <p>fetching data...</p>
  }


  //2019년
  const sibgu = moment("20190101").startOf("year").format("YYYYMMDD");
  console.log(sibgu)
  //2020년
  const esib = moment("20200101").startOf("year").format("YYYYMMDD");
  console.log(esib)
  //2021년
  const esibl = moment("20210101").startOf("year").format("YYYYMMDD");
  console.log(esibl)
  //2022년
  const esibe = moment("20220101").startOf("year").format("YYYYMMDD");
  console.log(esibe)

   const style={
    display:active?"block":"none"
  }
  const today=moment().format('YYYYMMDD');
  console.log(today)
  console.log(data)

 function sibgubutton(e){
  setStartDay(sibgu);
  setPage(1);
 }
 function esibbutton(e){
  setStartDay(esib);
  setPage(1);
 }
 function esiblbutton(e){
  setStartDay(esibl);
  setPage(1);
 }
 function esibebutton(e){
  setStartDay(esibe);
  setPage(1);
 }

 function nexbutton(e){
   if(pagerow != 30){
     
    }else{
      setPage(page +1);
    }
 }
 
    // return;
  return (
    <>
      <h1>가뭄 정보 조회</h1>

      <p>오늘 날짜 : {moment().format('YYYY년 MM월 DD일')} </p>
      {data.response.body.items.item.map( (item,index) => {
        if(item["anldt"] == "20221205" )(
          <li key={item[index]} >{"오늘 가뭄 분석 결과 :" }{item["anlrst"]}</li>
          )})}

      <h2>상세정보</h2>
      <button  onClick={()=>setActive(true)}>더보기</button>
      <button  onClick={()=>setActive(false)}>닫기</button>

      <div style={style}>
      <h3>조회시점</h3>
      <button onClick={sibgubutton}>2019년</button>
      <button onClick={esibbutton}>2020년</button>
      <button onClick={esiblbutton}>2021년</button>
      <button onClick={esibebutton}>2022년</button>
      <br></br>
      <button style={{visibility:page===1&&"hidden"}} onClick={() => setPage(page - 1)}>pre</button>
      <button style={{visibility:pagerow !== 30 &&"hidden"}} onClick={() => setPage(page + 1)}>nex</button>
      <button style={{visibility:page === 12 &&"hidden"}} onClick={() => setPage(page + 1)}>nex</button>
      <ul>
      {data.response.body.items.item.map((item, index) => {
        return <li key={item[index]}>{"분석일자 : "}{item["anldt"]}{" "} {"지하수위 : "}{item["ugrwtrl"]}{" "} {"분석결과 : "}{item["anlrst"]}</li>
      })}
      </ul>
      </div>

      <h2>차트</h2>
      <button onClick={() => setPage(page - 1)}>pre</button>
      <button onClick={() => setPage(page + 1)}>nex</button>
      <Rechart data={data} />


    </>
  )
}

function Rechart({ data }) {
  const newData = data.response.body.items.item.map(item => {
    return {
      "분석일자": item["anldt"],
      "지하수위": item["ugrwtrl"],
      "분석결과": item["anlrst"]
    }
  })
  console.log(data)
  console.log(newData)
  // 가뭄지수
  // 지하수

  //7일 기간 데이터 만들어서 출력
  //1년 기간 데이터 만들어서 출력
  //오늘 도넛

  return (
    <ComposedChart width={730} height={250} data={newData}>
      <XAxis dataKey="분석일자" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="지하수위" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="분석결과" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="지하수위" stroke="#ff7300" />
    </ComposedChart>
  )

}