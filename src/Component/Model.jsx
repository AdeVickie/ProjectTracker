import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

export default function Model({ closeModel }) {
  return (
    <div className="">
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Employee Invitation</DialogTitle>

        <DialogContent>
          <Stack spacing={2} margin={2}></Stack>
          <TextField
            varient="outline"
            label="Email address"
            fullWidth
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success">
            SEND
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => closeModel(false)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
