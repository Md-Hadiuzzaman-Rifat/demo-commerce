import React from "react";
import "./Control.scss";
import ControlForm from "../../components/ControlForm/ControlForm";
import ControlTable from "../../components/ControlTable/ControlTable";

const Control = () => {
  return (
    <div className="Control">
        <h1>Admin Controller</h1>
      <div className="container">
        <ControlForm></ControlForm>
        <ControlTable></ControlTable>
      </div>
    </div>
  );
};

export default Control;
