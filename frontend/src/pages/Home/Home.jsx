import { useEffect, useState } from "react";
import logo from "../../assests/img.jpg";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import { getAllPins } from "../../services/ApiServices/Home/homeService";

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

  console.log(import.meta.env.BASE_URL);

  return (
    <div className="h-[calc(100vh-5rem)] mt-8">
      <p className="text-[2rem] font-semibold text-slate-500 text-center p-2 mb-4 font-sans">
        Explore More{" "}
      </p>
      {loading && (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="flex flex-col justify-center items-center gap-y-2 h-[60vh]">
            <CircularProgress />
            <p className="font-semibold text-slate-400 font-sans">
              loading pinterests...
            </p>
          </div>
        </div>
      )}
      {!loading && (
        <div className="flex justify-center items-center">
          <div className="grid  grid-cols-1 lg:grid-cols-6  md:grid-cols-4 gap-10 w-[80%] ">
            {data?.map(({ username, imagePath, created, id, caption }) => (
              <div
                key={id}
                className="col-span-2 rounded-tr-xl rounded-bl-xl rounded-tl-[2.5rem] rounded-br-[2.5rem]  cursor-pointer ease-in-out"
                onMouseEnter={() => handleMouseEvent(id)}
                onMouseLeave={() => setShow({ hide: false, id: "" })}
              >
                <div>
                  <div className="relative">
                    <img
                      src={logo}
                      alt="logo"
                      className="rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl  h-[auto] max-w-[100%] opacity-[0.5] hover:opacity-[1] shadow-md"
                      loading="lazy"
                    />
                    <div
                      className="absolute top-1 p-2 ml-3 ease-in-out"
                      style={{
                        display: show.hide && show.id === id ? "" : "none",
                      }}
                    >
                      <p className="text-xl font-semibold capitalize text-white">
                        {username}
                      </p>
                    </div>
                    <div
                      className="absolute top-1 right-2 p-2"
                      style={{
                        display: show.hide && show.id === id ? "" : "none",
                      }}
                    >
                      <p className="text-xl font-semibold capitalize text-white">
                        {handleDate(created)}
                      </p>
                    </div>
                    <div className="absolute bottom-1 left-2 p-2">
                      <p className="text-xl font-semibold text-white">
                        #{caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
