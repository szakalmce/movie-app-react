import React, { useContext } from "react";
import Button from "../atoms/Button";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { appContext } from "../../context/context";

const Pagination = () => {
  const context = useContext(appContext);

  return (
    <div className="pagination-wrapper">
      <Button
        disabled={context.page === 1 ? true : false}
        onClick={context.handlerPrevPage}
        className="pagination-button"
      >
        <MdArrowBack className="pagination-icon" />
      </Button>
      <p className="pagination-value">{context.page}</p>
      <Button onClick={context.handlerNextPage} className="pagination-button">
        <MdArrowForward className="pagination-icon" />
      </Button>
    </div>
  );
};

export default Pagination;
