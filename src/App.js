import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import RecordDetail from "./components/RecordDetail";
import Records from "./components/Records";
import db from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import AddRecordDialog from "./components/AddRecordDialog";
import TypeSelect from "./components/TypeSelect";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [records, setRecords] = useState({
    data: [],
    isFetching: true,
  });
  const [currentRecord, setCurrentRecord] = useState({
    isVisible: false,
    data: {},
  });

  const [restaurantOptions, setRestaurantOptions] = useState({
    name: [],
    type: [],
  });

  const [selectType, setSelectType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docDef = collection(db, "restaurant-records");
      const snap = await getDocs(docDef);
      snap.forEach((doc) => {
        const data = doc.data();
        setRecords((prev) => ({
          ...prev,
          data: [...prev.data, data],
        }));
        setRestaurantOptions((prev) => ({
          name: [...prev.name, data.name],
          type: [...new Set(prev.type), data.type],
        }));
      });
      setRecords((prev) => ({
        ...prev,
        isFetching: false,
      }));
    };

    fetchData();
  }, []);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => setIsDialogOpen(false);

  const handleSaveRecord = async (data) => {
    setRecords((prev) => ({
      ...prev,
      isFetching: true,
    }));
    await setDoc(doc(db, "restaurant-records", data.name), {
      ...data,
    }).then(() => {
      setRecords((prev) => ({
        isFetching: false,
        data: [...prev.data, data],
      }));
      setIsDialogOpen(false);
    });
  };

  const handleRecordClick = (name) => {
    const current = records.data.find((record) => record.name === name);
    setCurrentRecord({
      isVisible: true,
      data: current,
    });
  };

  const handleTypeSelect = (typeName) => {};

  return (
    <Box>
      {records.isFetching ? (
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", md: "center" },
              padding: 2,
            }}
          >
            <TypeSelect
              types={restaurantOptions.type}
              onSelect={handleTypeSelect}
              selectType={selectType}
            />
          </Box> */}
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "center" },
            }}
          >
            <Records
              recordData={records.data}
              onRecordClick={handleRecordClick}
            />
            {currentRecord.isVisible && (
              <RecordDetail currentRecord={currentRecord.data} />
            )}
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
          <AddRecordDialog
            onClose={handleDialogClose}
            open={isDialogOpen}
            onSave={handleSaveRecord}
            options={restaurantOptions}
          />
        </>
      )}
    </Box>
  );
}

export default App;
