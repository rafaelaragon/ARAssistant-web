import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FaPencilAlt } from "react-icons/fa";
import firebase from "firebase";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Doe");
  const [mail, setMail] = useState("JohnDoe@gmail.com");

  const handleClickOpen = () => {
    setOpen(true);
  };

  //TODO edit user
  const handleClose = (uid) => {
    console.log("handleClose -> uid", uid);
    let ref =
      typeof uid == "string" ? firebase.database().ref("/user/") : null
      if(!!ref) {
          ref.child(uid).set({'name': name, 'surname': surname, 'email': mail})
      }
    setOpen(false);
  };

  return (
    <div>
      <FaPencilAlt size="3vh" color="#decc45" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Modo Edición</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            margin="dense"
            id="surname"
            label="Apellidos"
            type="text"
            fullWidth
            onChange={(event) => setSurname(event.target.value)}
          />
          <TextField
            margin="dense"
            id="mail"
            label="Mail"
            type="email"
            fullWidth
            onChange={(event) => setMail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => handleClose("8RRHzxpmHhZMrdcZkfos9lqJz2R2")}
            color="primary"
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
