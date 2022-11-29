import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  MdFirstPage,
  MdLastPage,
  MdCalendarToday,
  MdFiberManualRecord,
} from "react-icons/md";
import "./Body.scss";

const Body = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  let [m, setMonth] = useState(currentMonth);
  let [y, setYear] = useState(currentYear);

  const dayName = {
    text: [
      [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      ["Mo", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    ],
    color: [
      "#ffff00",
      "#ffdde1",
      "#008000",
      "#ffa500",
      "#00bfff",
      "#800080",
      "#ff0000",
    ],
  };

  const monthName = new Date(y, m + 1, 0).toLocaleString("en-US", {
    month: "long",
  });

  let days = [];
  let dayBefore = [];
  let dayAfter = [];

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const dayNameIndex = windowSize.innerWidth > 768 ? 0 : 1;

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function _findDayOfMonth(year, month) {
    days = [];
    const day = new Date(year, month + 1, 0).getDate();
    for (let index = 0; index < day; index++) {
      days.push("");
    }
  }
  _findDayOfMonth(y, m);

  function _findBeforeAfterDay(year, month) {
    const previous = new Date(
      year,
      month,
      0
    ).getDay(); /* last day of previous month */

    const next = new Date(
      year,
      month + 1,
      1
    ).getDay(); /* first day of next month */

    // dayBefore = previous !== 6 ? new Array(previous).fill("") : [];
    // dayAfter = next !== 6 ? new Array(next).fill("") : [];
    dayBefore = new Array(previous).fill("");
    dayAfter = new Array(next).fill("");
  }
  _findBeforeAfterDay(y, m);

  function onNextMonth(number) {
    if (m + 1 > 11) {
      setMonth((m = 0));
      setYear((y = y + 1));
    } else {
      setMonth((m) => m + number);
    }
  }

  function onPreviousMonth(number) {
    if (m - 1 < 0) {
      setMonth((m = 11));
      setYear((y = y - 1));
    } else {
      setMonth((m) => m + number);
    }
  }

  return (
    <div className="body">
      <div className="body_content">
        <div className="_calendar">
          <div className="_controls">
            <Button
              disabled={m === currentMonth && y === currentYear}
              className="_control"
              onClick={() => {
                setMonth((m = currentMonth));
                setYear((y = currentYear));
              }}
            >
              <MdCalendarToday />
            </Button>
            <Button
              className="_control"
              onClick={() => {
                onPreviousMonth(-1);
              }}
            >
              <MdFirstPage />
            </Button>
            <Button
              className="_control"
              onClick={() => {
                onNextMonth(1);
              }}
            >
              <MdLastPage />
            </Button>
          </div>

          <div className="_title">
            <span className="_month_name">{monthName}</span>
            <span className="_year_number">{y}</span>
          </div>

          <div className="_head normal">
            {dayName.text[dayNameIndex].map((day, index) => {
              return (
                <div className="_day headerDate" key={index}>
                  {day}
                  {/* <MdFiberManualRecord
                    color={dayName.color[index]}
                    className="_icon"
                  /> */}
                </div>
              );
            })}
          </div>

          <div className="_body">
            {dayBefore.map((day, index) => {
              return <div className="_day outOfDate" key={index}></div>;
            })}
            {days.map((day, index) => {
              return (
                <div className="_day" key={index}>
                  {index + 1}
                </div>
              );
            })}
            {dayAfter.map((day, index) => {
              return <div className="_day outOfDate" key={index}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
