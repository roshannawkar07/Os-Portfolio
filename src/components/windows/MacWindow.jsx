import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "45vw",
  height = "55vh",
  windowName,
  setWindowsState,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Rnd
      default={{
        width: isMobile ? "95vw" : width,
        height: isMobile ? "80vh" : height,

        // 👉 Position change here
        x: isMobile ? 20 : 300,
        y: isMobile ? 200 : 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() =>
                setWindowsState((state) => ({
                  ...state,
                  [windowName]: false,
                }))
              }
              className="dot red"
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>roshan_nawkar</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
