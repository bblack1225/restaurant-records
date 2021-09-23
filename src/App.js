import { Button } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import RecordDetail from "./components/RecordDetail";
import Records from "./components/Records";

function App() {
  return (
    <Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", md: "center" },
        }}
      >
        <Records />
        <RecordDetail />
      </Box>
      <Box sx={{ m: 2, display: "flex" }}>
        <Button variant="contained" sx={{ width: "100%" }}>
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default App;
