import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./App.css";
import RecordDetail from "./components/RecordDetail";
import Records from "./components/Records";
import db from "./firebase";
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import AddRecordDialog from "./components/AddRecordDialog";

function App() {
  const [text, setText] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  //addDoc是由firestore自動為我們建立collection的識別id
  const handleSaveClick = async () => {
    try {
      const docRef = await addDoc(collection(db, "restaurant-records"), {
        id: 2,
        item: text,
      });
      console.log("docRef", docRef);
    } catch (e) {
      console.log("error", e);
    }
    await setDoc(doc(db, "restaurant-records", text), {
      name: text,
      rating: 4,
    });
  };
  const handleGetRecordsClick = async () => {
    const docDef = collection(db, "restaurant-records");
    const snap = await getDocs(docDef);
    console.log("snap", snap);
    snap.forEach((doc) => console.log(doc.data()));
  };

  const handleDialogOpen = () => setAddDialogOpen(true);
  const handleDialogClose = () => setAddDialogOpen(false);
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
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleDialogOpen}
        >
          新增紀錄
        </Button>
      </Box>
      {/* <Box sx={{ m: 2, display: "flex" }}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleGetRecordsClick}
        >
          Get
        </Button>
      </Box> */}
      <AddRecordDialog onClose={handleDialogClose} open={addDialogOpen} />
    </Box>
  );
}

export default App;
