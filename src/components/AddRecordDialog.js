import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import moment from "moment";

const mockRestaurants = ["和美冰果室", "蘿蔔蹲", "盈咖哩"];
const mockRestaurantTypes = ["小吃", "牛排", "義大利麵", "火鍋"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

export default function AddRecordDialog(props) {
  const { open, onClose, onSave, options } = props;
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [ratingFromTing, setRatingFromTing] = useState(60);
  const [ratingFromYu, setRatingFromYu] = useState(60);

  const handleSaveClick = () => {
    onSave({
      name,
      type,
      address,
      ratingFromTing,
      ratingFromYu,
      createdTime: moment().format(),
    });
  };
  const handleNameChange = (event, newValue) => setName(newValue);

  const handleNameInputChange = (e) => setName(e.target.value);

  const handleTypeChange = (event, newValue) => setType(newValue);

  const handleTypeInputChange = (e) => setType(e.target.value);
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              新增餐廳紀錄
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSaveClick}>
              儲存
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <DialogContentText>
            記錄留起來，看看我們到底懂不懂吃
          </DialogContentText>
          <Box sx={{ m: 3 }} />
          <Autocomplete
            freeSolo
            onChange={handleNameChange}
            onInputChange={handleNameInputChange}
            id="combo-box-demo"
            value={name}
            options={options.name}
            renderInput={(params) => <TextField {...params} label="餐廳名稱" />}
          />
          <Box sx={{ m: 3 }} />
          <Autocomplete
            freeSolo
            onChange={handleTypeChange}
            onInputChange={handleTypeInputChange}
            id="combo-box-demo"
            value={type}
            options={options.type}
            renderInput={(params) => <TextField {...params} label="餐廳種類" />}
          />
          <Box sx={{ m: 3 }} />
          <TextField
            margin="dense"
            id="address"
            label="餐廳地址"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
          />
          <Box sx={{ m: 3 }} />
          <Typography sx={{ mb: 3 }}>方俞的評分</Typography>
          <IOSSlider
            aria-label="ios slider"
            onChange={(e) => setRatingFromYu(e.target.value)}
            value={ratingFromYu}
            valueLabelDisplay="on"
          />
          <Box sx={{ m: 3 }} />
          <Typography sx={{ mb: 3 }}>昱廷的評分</Typography>
          <IOSSlider
            aria-label="ios slider"
            onChange={(e) => setRatingFromTing(e.target.value)}
            value={ratingFromTing}
            valueLabelDisplay="on"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
