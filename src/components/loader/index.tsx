import React from "react";

interface Props {
  show: boolean;
}

const Loader: React.FC<Props> = ({ show }) => {
  return (
    <>
      {show && (
        <div className="fixed z-50 inset-0 bg-black opacity-50 flex items-center justify-center">
          <svg className="animate-spin h-10 w-10 text-white" viewBox="0 0 24 24">
            <circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-100"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 018 8v-2a6 6 0 00-6-6h-2zm-4 4a4 4 0 100-8 4 4 0 000 8z"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default Loader;
