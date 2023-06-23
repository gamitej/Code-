import { useEffect, useState } from "react";
import logo from "../../assests/bg.jpg";
import { Box, CircularProgress, Typography } from "@mui/material";
import moment from "moment";
import { getAllPins } from "../../services/ApiServices/Home/homeService";

const arr = [
  { label: "Arrays", total: 32, solved: 2, per: 1 },
  { label: "Strings", total: 22, solved: 5, per: 1 },
];

const Home = () => {
  // ========= STATES =============

  const [show, setShow] = useState({ hide: false, id: "" });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMouseEvent = (id) => {
    setShow({ hide: true, id });
  };

  const handleDate = (date) => {
    const newDate = moment(date).format("DD-MM-YYYY");
    return newDate;
  };

  // ========= CALL ALL PINS API =============

  useEffect(() => {
    const callHomeApi = async () => {
      setLoading(true);
      const { data } = await getAllPins();
      setData(data?.content);
      setLoading(false);
    };
    callHomeApi();
  }, []);

  return (
    <div className="h-[calc(100vh-5rem)] bg-slate-100 p-2">
      <p className="text-[2rem] font-semibold text-slate-500 text-center p-2 mb-4 font-sans">
        Explore
      </p>
      {loading && (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="flex flex-col justify-center items-center gap-y-2 h-[60vh]">
            <CircularProgress />
            <p className="font-semibold text-slate-400 font-sans">
              loading content...
            </p>
          </div>
        </div>
      )}
      {!loading && (
        <div className="flex justify-center items-center">
          <div className="grid  grid-cols-1 lg:grid-cols-6  md:grid-cols-4 gap-10 w-[80%] ">
            {arr?.map(({ label, total, solved, per }, index) => (
              <div
                className="col-span-2 rounded-lg shadow-xl  bg-white p-2 hover:shadow-red-200 transform transition-all hover:scale-105 cursor-pointer"
                key={index}
              >
                <div className="w-[100%] h-[75%]">
                  <img src={logo} alt="" className="h-[100%] w-[100%]" />
                </div>
                <div className="flex justify-around items-center h-[25%]">
                  <SubPara label="solved" value={solved} />
                  <SubPara label="total" value={total} />
                  <CircularProgressWithLabel
                    value={Math.round((solved / total) * 100)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function SubPara({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-3xl font-semibold">{value}</p>
      <p className="text-md font-semibold text-stone-400">{label} </p>
    </div>
  );
}

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default Home;
