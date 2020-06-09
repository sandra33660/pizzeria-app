import { arrayOf, node, bool, string, func, shape } from "prop-types";
import React from "react";
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
  Dialog,
} from "@material-ui/core";
export default function Popin({ open, title, children, actions, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions.map(({ label, onClick, primary }) => (
          <Button
            key={label}
            color={primary ? "primary" : "secondary"}
            onClick={onClick}
          >
            {label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

Popin.propTypes = {
  open: bool,
  title: string,
  children: node.isRequired,
  actions: arrayOf(
    shape({
      label: string,
      onClick: func,
    })
  ),
  onClose: func,
};

Popin.defaultProps = {
  open: false,
  title: null,
  actions: [],
  primary: bool,
  onClose: Function.prototype,
};
