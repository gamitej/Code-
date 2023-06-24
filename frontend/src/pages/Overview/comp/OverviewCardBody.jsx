import React from "react";
// mui
import { Divider } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const OverviewCardBody = ({ cardBodyData }) => {
  return (
    <div className="overflow-auto h-[calc(20rem-4rem)]">
      {cardBodyData?.map(({ name, url, platform, solved }, index) => (
        <React.Fragment key={index}>
          <div className="grid grid-cols-8 p-4 hover:bg-slate-100 cursor-pointer">
            <TaskAltIcon className="col-span-1" />
            <p className="col-span-6">{name}</p>
            <p className="col-span-1">{platform}</p>
          </div>
          <Divider />
        </React.Fragment>
      ))}
    </div>
  );
};

export default OverviewCardBody;
