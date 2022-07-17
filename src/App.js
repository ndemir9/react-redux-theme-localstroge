import "./App.css";
import { useDispatch } from "react-redux";
import { changeTheme, changeLanguage } from "./stores/settingsSlice";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.settingsSlice);
  const { language } = useSelector((state) => state.settingsSlice);

  return (
    <div className="App">
      <div>hello world</div>
      <div>mevcut theme  = {theme}</div>
      <div>mevcut dil  = {language}</div>
      <button onClick={() => dispatch(changeTheme())}>temayı degiştir</button>
      <button onClick={() => dispatch(changeLanguage())}>dili degiştir</button>
    </div>
  );
}

export default App;
