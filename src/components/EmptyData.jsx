/** @format */

import { Link } from "react-router-dom";

const EmptyData = ({ message, reason, to, go }) => {
  return (
    <div className="modal-box bg-[rgb(0,0,0,0.5)] mx-auto my-20">
      <h3 className="font-bold text-lg">{reason}</h3>
      <p className="py-4">{message}</p>
      <div className="modal-action justify-between">
        <Link to={to}>
          <button className="primary-btn">{go}</button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyData;
