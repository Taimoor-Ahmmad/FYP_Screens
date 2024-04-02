import React from "react";

const Links = ({ text }) => {
  return (
    <button>
      <div className="text-white text-sm font-normal font-['Noto Sans']">
        {text}
      </div>
    </button>
  );
};

export default Links;
