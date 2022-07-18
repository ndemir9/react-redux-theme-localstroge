import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, changeLanguage } from "./stores/settingsSlice";
import React, { useState, useEffect, useRef } from "react";
import { CgMoon } from "react-icons/cg";
import { RiSunLine } from "react-icons/ri";
import { useAutoAnimate } from '@formkit/auto-animate/react'

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.settingsSlice);
  const { language } = useSelector((state) => state.settingsSlice);

  const [animationParent] = useAutoAnimate()

  return (
    <div className="bg-slate-900  text-white h-screen">
      <div className="text-3xl font-bold underline">mevcut theme = {theme}</div>
      <div className="text-3xl font-bold underline">mevcut dil = {language}</div>

      <div
        onClick={() => dispatch(changeTheme())}
        style={{ cursor: "pointer" }}
      >
        {theme == "light" ? <CgMoon size="24px" /> : <RiSunLine size="24px" />}
      </div>

      <div
        onClick={() => dispatch(changeLanguage())}
        style={{ cursor: "pointer" }}
      >
        {language == "tr" ? <span>english</span> : <span>turkish</span>}
      </div>

      {/* <button onClick={() => dispatch(changeLanguage())}>dili degiştir</button> */}
    </div>
  );
}

export default App;
