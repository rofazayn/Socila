import React from "react";
import { Styled } from "./style";
import { Dialog, Typography, IconButton } from "@material-ui/core";
import { ReactComponent as CloseIconSvg } from "../../../assets/icons/bx-x.svg";

const CustomDialog = ({
  children,
  icon,
  title,
  open,
  setOpen,
  keepMounted,
  className,
}) => {
  function handleClose() {
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      keepMounted={keepMounted || false}
      disableScrollLock={true}
      disablePortal
      fullWidth
      maxWidth="xs"
      className={className}
    >
      <Styled.CustomDialog className="creator">
        <div className="dialog-header">
          <div className="text">
            {icon}
            <Typography variant="body2">{title}</Typography>
          </div>
          <IconButton size="medium" onClick={handleClose}>
            <CloseIconSvg className="close-icon" />
          </IconButton>
        </div>
        {children}
      </Styled.CustomDialog>
    </Dialog>
  );
};

export default CustomDialog;
