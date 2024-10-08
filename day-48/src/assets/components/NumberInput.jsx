import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";

export default function NumberInput({
  darkMode,
  handleCheckNumber,
  randomNumber,
  saveNumber,
}) {
  const [inputValue, setInputValue] = useState("");
  const forcuInput = useRef();

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      if (value === "" || String(value).length <= String(randomNumber).length) {
        setInputValue(value);
      }
    } else {
      toast.error("Bạn chỉ được nhập số!");
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setInputValue((prevValue) => String(Number(prevValue) + 1));
        break;
      case "ArrowDown":
        setInputValue((prevValue) => String(Number(prevValue) - 1));
        break;
      case "Enter":
        if (!saveNumber.current.includes(+inputValue)) {
          handleCheckNumber(inputValue);
          saveNumber.current.push(+inputValue);
        } else {
          toast.error("Bạn đã nhập số này trước đó !");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-[80%] mt-3 p-[2rem]">
      <TextField
        ref={forcuInput}
        id="standard-number"
        label="Nhập số của bạn"
        maxRows={4}
        variant="outlined"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        fullWidth
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: darkMode ? "rgba(31, 41, 55, 1)" : "white",
            color: darkMode ? "white" : "black",
            borderRadius: "0.5rem",
          },
          "& .MuiInputLabel-root": {
            color: darkMode ? "white" : "black",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: darkMode ? "rgba(255, 255, 255, 0.5)" : "gray",
          },
        }}
      />
    </div>
  );
}
