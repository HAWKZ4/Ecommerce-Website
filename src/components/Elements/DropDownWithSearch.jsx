import React, { useState } from "react";

import Select from "react-select";
// import { colourOptions } from "../data";



const options = [
  { value: "usa", label: "United States" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "uk", label: "United Kingdom" },
  { value: "gr", label: "Germany" },
  { value: "cn", label: "China" },
  { value: "fr", label: "France" },
  { value: "it", label: "Italy" },
  { value: "ca", label: "Canada" },
  { value: "jp", label: "Japan" },
  { value: "sp", label: "Spain" },
];

const isDarkModeActive = JSON.parse(localStorage.getItem("dark")) || false
console.log(isDarkModeActive)

export const DropDownWithSearch = () => {


  return (
    <div className=" flex justify-center items-center my-2 ">
      <Select
        className="basic-single w-full z-30"
        classNamePrefix="Country"
        isClearable={true}
        isSearchable={true}
        name="country"
        options={options}
        styles={{

          input: (provided) => ({
            ...provided,
            height: '38.6px', // Adjust the height value as per your requirement
            
            
          }),
          control: (provided, state) => ({
            ...provided,
            borderRadius: '8px', // Adjust the border radius value as per your requirement
            borderColor: state.isFocused ? (isDarkModeActive ? "blue" : "rgb(210, 63, 87)") : provided.borderColor,
            boxShadow: state.isFocused ? (isDarkModeActive ? "0 0 0 1px blue" : "0 0 0 1px rgb(210, 63, 87)") : provided.boxShadow,
            outlineColor: state.isFocused ? (isDarkModeActive ? "blue" : "rgb(210, 63, 87)") : provided.outlineColor,
            backgroundColor: `${isDarkModeActive ? "#aaa" : "#fff"}`,
            '&:hover': {
              // borderColor: 'red',
              // boxShadow: 'none',
              borderColor: state.isFocused ? (isDarkModeActive ? "blue" : "rgb(210, 63, 87)") : provided.borderColor,
              boxShadow: state.isFocused ? (isDarkModeActive ? "0 0 0 0px blue" : "0 0 0 0px rgb(210, 63, 87)") : provided.boxShadow,
            },
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: `${isDarkModeActive ? "#aaa" : "#fff"}`, // Set the desired background color for the dropdown menu
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor:  `${isDarkModeActive ? "#aaa" : "#fff"}`, // Set the background color for selected and unselected options
            // color:  '#000'  // Set the text color for selected and unselected options
          }),
          
        }}
        placeholder="Country"
      />

      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "2em",
          

        }}
      ></div>
    </div>
  );
};
