import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// comp
import Navbar from "./pages/Navbar/Navbar";

import BasicRouter from "./routes/BasicRouter";
import { CircularProgress } from "@mui/material";

function App() {
  return (
    <div>
      <ToastContainer />
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Suspense fallback={<Loading />}>
        <BasicRouter />
      </Suspense>
    </div>
  );
}

const Loading = () => {
  return (
    <div
      className="h-[90vh] w-full flex justify-center
   items-center"
    >
      <div>
        <CircularProgress />
      </div>
    </div>
  );
};

export default App;
