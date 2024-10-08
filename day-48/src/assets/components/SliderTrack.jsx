import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

export default function SliderTrack({ onChange, darkMode }) {
  const [value, setValue] = useState(5);
  const dataLocal = JSON.parse(localStorage.getItem("data")) || {};
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  useEffect(() => {
    setValue(dataLocal.SliderTrack);
  });

  const marks = [
    { value: 100, label: "100" },
    { value: 512, label: "512" },
    { value: 1024, label: "1024" },
    { value: 1536, label: "1536" },
  ];

  return (
    <div className="w-4/5 m-auto mt-4">
      <Slider
        value={value}
        onChange={handleChange}
        aria-label="Custom marks"
        valueLabelDisplay="auto"
        step={1}
        min={5}
        max={1536}
        marks={marks}
        sx={{
          color: darkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
          "& .MuiSlider-markLabel": {
            color: darkMode ? "white" : "black",
          },
        }}
      />
    </div>
  );
}
