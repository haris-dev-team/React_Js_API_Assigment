import { Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebasse_config";

export function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const onSubmited_Handling = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("isloggedin", true);
        navigate("/");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center h-[100dvh]">
      <Paper sx={{ padding: "15px", borderRadius: "0.375rem" }} elevation={3}>
        <form onSubmit={onSubmited_Handling}>
          <Input
            className="p-3 border border-yellow-500 outline-yellow-500 rounded-md w-[350px]"
            placeholder="Email Address"
            required={true}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="email"
          />
          <br />
          <Input
            className="p-3 border border-yellow-500 outline-yellow-500 rounded-md w-[350px]"
            placeholder="Password"
            required={true}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
          />
          <br />
          <Button
            sx={{ width: "100%", padding: "10px", borderRadius: "0.375rem" }}
            variant="contained"
            color="warning"
            type="submit"
          >
            Login
          </Button>
          <br />
          <br />
          <Typography
            className="w-full flex justify-center items-center p-3"
            component="p"
          >
            I Dont have an Account?{" "}
            <Link
              className="mx-1 hover:underline focus:text-yellow-600"
              to="/signup"
            >
              Register Now
            </Link>
          </Typography>
        </form>
      </Paper>
    </div>
  );
}
