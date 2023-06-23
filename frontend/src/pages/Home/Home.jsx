import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// libs
import moment from "moment";
// mui
import CheckIcon from "@mui/icons-material/Check";
import { Box, CircularProgress, Fab, Typography } from "@mui/material";
// services
import { getAllPins } from "../../services/ApiServices/Home/homeService";
// images
import logo from "../../assests/bg.jpg";
import FullScreenLoader from "../../components/Loading/FullScreenLoader";

const arr = [
  { label: "Arrays", total: 32, solved: 32, per: 1 },
  { label: "Strings", total: 22, solved: 21, per: 1 },
  { label: "Two Pointers", total: 16, solved: 3, per: 1 },
];

const Home = () => {
  // ========= USE-STATES =============

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

  if (loading) {
    return <FullScreenLoader open={loading} title="loading content..." />;
  }

  return (
    <div className="h-[calc(100vh-5rem)] bg-slate-100 p-2">
      <p className="text-[2rem] font-semibold text-slate-500 text-center p-2 mb-4 font-sans">
        Explore
      </p>
      <div className="flex justify-center items-center">
        <div className="grid  grid-cols-1  md:grid-cols-4 lg:grid-cols-6  gap-10 w-[80%] ">
          {arr?.map(({ label, total, solved, per }, index) => (
            <NavLink
              to={`/explore/${label.toLowerCase()}`}
              className="h-[20rem] col-span-2 rounded-lg shadow-xl  bg-white p-2 hover:shadow-red-200 transform transition-all hover:scale-105 cursor-pointer"
              key={index}
            >
              <div className="relative w-full h-[75%] ">
                <p className="absolute top-2 left-2 text-white font-semibold text-2xl">
                  {label}
                </p>
                <img
                  src={logo}
                  srcSet={logo}
                  alt="image"
                  className="h-full w-full rounded-md"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-around items-center h-[25%]">
                <SubPara label="solved" value={solved} />
                <SubPara label="total" value={total} />

                {solved === total ? (
                  <Fab aria-label="save" color="primary">
                    <CheckIcon />
                  </Fab>
                ) : (
                  <CircularProgressWithLabel
                    value={Math.round((solved / total) * 100)}
                  />
                )}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
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
      <CircularProgress size={50} variant="determinate" {...props} />
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
