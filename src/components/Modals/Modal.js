import React from "react";
import { Modal } from "@mui/material";
import { useStyles } from "./styles";

const CustomModal = ({ isOpen, setIsOpen, showFeedback }) => {
  const classes = useStyles();
  let body;

  if (isOpen && showFeedback) {
    body = (
      <div className={classes.paper}>{/* ... your form content ... */}</div>
    );
  } else {
    body = (
      <div className={classes.paper}>
        {/* ... your instructions content ... */}
      </div>
    );
  }

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      {body}
    </Modal>
  );
};

export default CustomModal;
