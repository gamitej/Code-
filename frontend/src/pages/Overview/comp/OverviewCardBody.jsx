import React from "react";
// mui
import { Divider } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
// utils
import colorCode from "../../../utils/colorCode.json";
import { Link } from "react-router-dom";

const OverviewCardBody = ({
  cardType,
  cardBodyData = [],
  setCardData = () => {},
}) => {
  // ============== EVENT-HANDLER ==================
  const handleMark = (id, value) => {
    setCardData((prevCards) => {
      const updatedCards = [...prevCards];

      // Find the card with cardType "cardType" and body id "id"
      const easyCard = updatedCards.find((card) => card.cardType === cardType);
      const bodyItem = easyCard.body.find((item) => item.id === id);

      // Update the solved value to true
      if (bodyItem) {
        bodyItem.solved = !value;
      }

      return updatedCards;
    });
  };

  return (
    <div id="hideScrollBar" className="overflow-auto h-[calc(20rem-4rem)]">
      {cardBodyData?.map(({ name, url, platform, solved, id }) => (
        <React.Fragment key={id}>
          <div className="grid grid-cols-8 p-4 hover:bg-slate-100 cursor-pointer">
            <TaskAltIcon
              onClick={() => handleMark(id, solved)}
              className="col-span-1 hover:text-slate-400"
              style={{
                color: solved ? colorCode["done"] : colorCode["skip"],
              }}
            />
            <p className="col-span-6 text-slate-600">
              <Link
                to={url}
                target="_blank"
                className="hover:underline hover:text-blue-400"
              >
                {name}
              </Link>
            </p>
            <p className="col-span-1 text-slate-400">{platform}</p>
          </div>
          <Divider />
        </React.Fragment>
      ))}
    </div>
  );
};

export default OverviewCardBody;
