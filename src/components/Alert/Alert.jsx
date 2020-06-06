import React, { useState } from "react";
import "./Alert.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FaPencilAlt } from "react-icons/fa";
import firebase from "firebase";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const [userUid] = useState(props);

  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Doe");
  const [mail, setMail] = useState("JohnDoe@gmail.com");

  const handleClickOpen = () => {
    setOpen(true);
  };

  //Edit user from fbdb
  const handleClose = (uid) => {
    console.log("handleClose -> uid", typeof(uid));
    console.log("handleClose -> uid", uid);
    let ref =
      typeof uid == "string" ? firebase.database().ref("/user/") : null
      if(!!ref) {
          ref.child(uid).update({ 'name': name })
          ref.child(uid).update({ 'surname': surname })
          ref.child(uid).update({ 'email': mail })
          console.log("Hecho")
      }
    setOpen(false);
  };

  return (
    <div className="Alert">
      <FaPencilAlt size="3vh" id="edit" onClick={handleClickOpen} />
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
            defaultValue="John"
            fullWidth
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            margin="dense"
            id="surname"
            label="Apellidos"
            type="text"
            defaultValue="Doe"
            fullWidth
            onChange={(event) => setSurname(event.target.value)}
          />
          <TextField
            margin="dense"
            id="mail"
            label="Mail"
            type="email"
            defaultValue="johndoe@gmail.com"
            fullWidth
            onChange={(event) => setMail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => handleClose(userUid.userUid)}
            color="primary"
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
