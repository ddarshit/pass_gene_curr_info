import React, { useState } from "react";

function Bgchanger() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("lime")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "lime" }}
          >
            Lime
          </button>
          <button
            onClick={() => setColor("Fuchsia")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Fuchsia" }}
          >
            Fuchsia
          </button>
          <button
            onClick={() => setColor("Violet")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Violet" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bgchanger;
