import React, { useEffect, useRef, useState } from "react";
import SliderTrack from "./SliderTrack";
import { MdDarkMode } from "react-icons/md";
import NumberInput from "./NumberInput";
import History from "./History";
import handleData from "./util/data";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

export default function NumberGuessingGame() {
  const dataLocal = JSON.parse(localStorage.getItem("data")) || {
    SliderTrack: 10,
    darkMode: true,
    payload: [],
  };

  const [numberTrack, setNumberTrack] = useState(dataLocal.SliderTrack);
  const [darkMode, setDarkMode] = useState(dataLocal.darkMode);
  const saveNumber = useRef([]);
  const [count, setCount] = useState(7);
  const [randomNumber, setRandomNumber] = useState(0);
  const [input, setInput] = useState(true);
  const newRandomNumber = Math.floor(Math.random() * (numberTrack - 5)) + 5;
  console.log("randomNumber", randomNumber);
  console.log("saveNumber", saveNumber.current);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleCheckNumber = (number) => {
    const newEntry = {
      inputHistory: [...saveNumber.current, number],
      playTimes: count,
      enterMax: `${saveNumber.current.length + 1}/7`,
      ratio: `${Math.round(((7 - count) / 7) * 100)}%`,
    };
    if (count < 1) {
      handleData(numberTrack, darkMode, newEntry);
      setInput(false);
      saveNumber.current = [];
      toast.info("Bạn đã hết lượt");
      return;
    }
    if (+number === randomNumber) {
      toast.success("Bạn đã trả lời đúng!");
      handleData(numberTrack, darkMode, newEntry);
      setInput(false);
      saveNumber.current = [];
      return;
    }

    if (number > randomNumber) {
      setCount(count - 1);
      toast.info("Hãy nhập số bé hơn!");
    } else if (number < randomNumber) {
      setCount(count - 1);
      toast.info("Hãy nhập số lớn hơn!");
    }
  };

  useEffect(() => {
    setRandomNumber(newRandomNumber);
    handleData(numberTrack, darkMode);
  }, [numberTrack]);

  useEffect(() => {
    if (dataLocal) {
      setRandomNumber(
        Math.floor(Math.random() * (dataLocal.SliderTrack - 5)) + 5
      );
    }
  }, []);

  useEffect(() => {
    const updatedData = handleData(numberTrack, darkMode);
    localStorage.setItem("data", JSON.stringify(updatedData));
  }, [darkMode]);

  return (
    <div
      className={`flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 right-0 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-4/5 max-w-md m-auto pt-10 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Chào mừng bạn đến với trò chơi đoán số!
        </h1>
        <h2 className="text-xl">Bạn còn {count}/7 lần</h2>
        <h3 className="text-lg mt-2">
          Bạn cần tìm kiếm số từ 1 đến {numberTrack}
        </h3>
      </div>

      <div
        className="absolute top-4 right-4 cursor-pointer transition-transform transform hover:scale-110"
        onClick={handleToggleDarkMode}
      >
        <div
          className={`p-2 rounded-lg border ${
            darkMode ? "border-white bg-black" : "border-gray-800 bg-white"
          } shadow-lg`}
        >
          <MdDarkMode
            className={`text-2xl ${darkMode ? "text-white" : "text-black"}`}
          />
        </div>
      </div>

      <SliderTrack onChange={setNumberTrack} darkMode={darkMode} />

      {input ? (
        <NumberInput
          darkMode={darkMode}
          handleCheckNumber={handleCheckNumber}
          randomNumber={randomNumber}
          saveNumber={saveNumber}
        />
      ) : (
        <button
          className="border border-solid border-black rounded-xl p-4 hover:bg-slate-300"
          onClick={() => {
            setRandomNumber(newRandomNumber);
            setInput(true);
            saveNumber.current = [];
          }}
        >
          Chơi lại
        </button>
      )}
      {dataLocal.payload.length > 0 && <History />}
    </div>
  );
}
