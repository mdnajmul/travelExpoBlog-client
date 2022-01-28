import React, { useState } from "react";
import { Alert, Button, Box, TextField, Typography, Grid } from "@mui/material";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const useremail = sessionStorage.getItem("email");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    console.log(user);
    fetch(
      `https://mighty-savannah-90389.herokuapp.com/make-admin?useremail=${useremail}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire(
            "Good job!",
            "Role Status Changed Successfully!",
            "success"
          );
          e.reset();
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <Box
      className="mt-5"
      sx={{
        background: "#fff",
        p: "5%",
        mx: "20%",
        mt: "5%",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "#251D58", fontWeight: "900" }}
        gutterBottom
      >
        Make Admin
      </Typography>
      <Grid container justifyContent="center">
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "100%" }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <br />
          <Button
            sx={{ mt: 4, background: "#251D58", color: "#fff" }}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </Grid>
      {false && (
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mt: 4 }}
          gutterBottom
        >
          <Alert severity="success">Made Admin successfully!</Alert>
        </Typography>
      )}
    </Box>
  );
};

export default MakeAdmin;
