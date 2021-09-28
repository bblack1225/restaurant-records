import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function TypeSelect(props) {
  const { types, onSelect, selectType } = props;
  return (
    <>
      <FormControl fullWidth sx={{ mr: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">種類</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectType}
          label="Age"
          onChange={onSelect}
        >
          {types.map((type, index) => {
            return (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">評分</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectType}
          label="Age"
          onChange={onSelect}
        >
          {types.map((type, index) => {
            return (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
