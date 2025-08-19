import React from "react";

const Filetry = () => {
  // Example data
  const data = [
    { id: 1, color: "bg-amber-300", show: true, text: "Box 1" },
    { id: 2, color: "bg-amber-400", show: false, text: "Box 2" },
    { id: 3, color: "bg-amber-500", show: true, text: "Box 3" },
    { id: 4, color: "bg-amber-600", show: true, text: "Box 4" },
    { id: 5, color: "bg-amber-700", show: false, text: "Box 5" },
  ];

  return (
    <div className="grid grid-cols-5 h-full bg-amber-800">
      {data.map((item) => (
        <div key={item.id} className={item.color + " flex items-center justify-center"}>
          {/* condition check */}
          {item.show ? <span className="text-white">{item.text}</span> : null}
        </div>
      ))}
    </div>
  );
};

export default Filetry;
