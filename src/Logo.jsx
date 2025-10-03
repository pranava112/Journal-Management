// import "./Logo.css"; // optional external css if you want to extract styles

import React, { useEffect, useRef, useState } from "react";

const Logo = () => {
  const [title, setTitle] = useState("YOUR BRAND • QUALITY • TRUST • YOUR BRAND •");
  const [accent, setAccent] = useState("#2b6ef6");
  const [size, setSize] = useState(360);
  const textPathRef = useRef(null);

  // Create repeating text
  const makeRepeatingText = (text) => {
    const sep = " • ";
    const base = text.trim();
    if (!base) return "";
    return Array(6).fill(base).join(sep);
  };

  // Animate text rotation
  useEffect(() => {
    let offset = 0;
    const textElem = textPathRef.current;

    function frame() {
      offset = (offset + 0.02) % 100;
      if (textElem) {
        textElem.setAttribute("startOffset", offset + "%");
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }, []);

  return (
    <div className="logo-wrap" style={{ ["--size"]: `${size}px`, ["--accent"]: accent }}>
      <div className="card">
        <svg viewBox="0 0 360 360" aria-labelledby="logoTitle" role="img">
          <title id="logoTitle">Circular Logo Demo</title>

          <defs>
            <path
              id="ringPath"
              d="M 180,30 a 150,150 0 1,1 0,300 a 150,150 0 1,1 0,-300"
            />
          </defs>

          <circle
            cx="180"
            cy="180"
            r="150"
            fill="none"
            className="outer-ring"
            strokeWidth="1"
          />

          <circle
            cx="180"
            cy="180"
            r="132"
            className="path-ring"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="8"
          />

          <text fill="var(--accent)">
            <textPath
              ref={textPathRef}
              startOffset="50%"
              textAnchor="middle"
              xlinkHref="#ringPath"
            >
              {makeRepeatingText(title)}
            </textPath>
          </text>

          <g className="center-badge" transform="translate(180,180)">
            <circle r="70" fill="white" stroke="#e8f0ff" strokeWidth="6" />
            <g className="center-shape" transform="translate(-20,-20) scale(0.9)">
              <path
                d="M50 18 L57 18 L61 12 L69 15 L72 23 L79 25 L79 34 L75 40 L79 47 L74 54 L66 56 L62 63 L55 61 L48 66 L38 63 L34 55 L25 51 L19 53 L13 47 L15 39 L12 32 L16 24 L22 20 L29 16 L35 11 L43 12 L48 18 Z"
                fill="var(--accent)"
                opacity="0.98"
              />
              <circle
                cx="40"
                cy="40"
                r="10"
                fill="#fff"
                stroke="var(--accent)"
                strokeWidth="3"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* Controls */}
      <div className="controls">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Accent:
          <input
            type="color"
            value={accent}
            onChange={(e) => setAccent(e.target.value)}
          />
        </label>
        <label>
          Size:
          <input
            type="range"
            min="220"
            max="560"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default Logo;
