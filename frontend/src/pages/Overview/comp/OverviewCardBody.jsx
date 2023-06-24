import React from "react";
// mui
import { Divider, Tooltip } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
// utils
import colorCode from "../../../utils/colorCode.json";

const OverviewCardBody = ({ cardBodyData }) => {
  return (
    <div id="hideScrollBar" className="overflow-auto h-[calc(20rem-4rem)]">
      {cardBodyData?.map(({ name, url, platform, solved }, index) => (
        <React.Fragment key={index}>
          <div className="grid grid-cols-8 p-4 hover:bg-slate-100 cursor-pointer">
            <Tooltip title="mark it as done" placement="top" arrow>
              <TaskAltIcon
                className="col-span-1 hover:text-slate-400"
                style={{ color: colorCode["done"] }}
              />
            </Tooltip>
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
