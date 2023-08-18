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

export const DropDownWithSearch = () => {
  

  return (
    <div className=" flex justify-center items-center my-2 ">
      <Select
        className="basic-single w-full z-30 "
        classNamePrefix="Country"
        isClearable={true}
        isSearchable={true}
        name="color"
        options={options}
        styles={{
          
          input: (provided) => ({
            ...provided,
            height: '38.6px', // Adjust the height value as per your requirement
            
          }),
          control: (provided) => ({
            ...provided,
            borderRadius: '8px', // Adjust the border radius value as per your requirement
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
