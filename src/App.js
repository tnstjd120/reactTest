import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let title = '제목1';

  let style = { color: 'orangered', fontSize: '40px' };

  let [arr_title, arr_set] = useState(['title1', 'title2', 'title3']);
  let [like, likePlus] = useState(0);


  function data() {
    return "제목2"
  };

  // function likeClick() {
  //   return likePlus(like + 1);
  // }

  function titleSet() {
    let newArr = [...arr_title];

    newArr[0] = 'title11';

    arr_set(newArr);
  }

  return (
    <div className="App">
      <div className="nav">타이틀</div>
      <button onClick={titleSet}>제목 변경</button>
      <div className="list">
        <h2>{arr_title[0]} <span onClick={() => { likePlus(like + 1) }}>❤️</span> {like} </h2>

        <p>5월 25일 발행</p>

        <hr />
      </div>

      <div className="list">
        <h2>{arr_title[1]}</h2>

        <p>5월 25일 발행</p>

        <hr />
      </div>

      <div className="list">
        <h2>{arr_title[2]}</h2>

        <p>5월 25일 발행</p>

        <hr />
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

export default App;
