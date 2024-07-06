import { Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../config/Firebasse_config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export function Signup() {
  const [data, setData] = useState({});
  //   console.log(data)
  const navigate = useNavigate();

  const onClick_Handling = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("isloggedin", true);
        navigate("/login");
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  const OnClick_Handle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("isloggedin",true)
        navigate("/");
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
  };
  return (
    <div className="h-[100dvh] flex justify-center items-center">
      <Paper sx={{ padding: "15px", borderRadius: "0.375rem" }} elevation={3}>
        <form onSubmit={onClick_Handling}>
          <Input
            placeholder="Full Name"
            className="p-3 outline-yellow-500 w-[350px] border border-yellow-500 rounded-md"
            type="text"
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
          <br />
          <Input
            placeholder="Email Address"
            className="p-3 outline-yellow-500 w-[350px] border border-yellow-500 rounded-md"
            required={true}
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <br />
          <Input
            placeholder="Password"
            className="p-3 outline-yellow-500 w-[350px] border border-yellow-500 rounded-md"
            required={true}
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <br />
          <Button
            sx={{ width: "100%", padding: "10px" }}
            variant="contained"
            color="warning"
            type="submit"
          >
            Register Now
          </Button>
        </form>
        <br />
        <Button
          sx={{ width: "100%", padding: "10px" }}
          variant="contained"
          color="warning"
          onClick={OnClick_Handle}
        >
          <FcGoogle className="mx-2 text-2xl" /> SignUp With Google
        </Button>

        <Typography
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: "10px",
          }}
          component="p"
        >
          I Already have an Account?{" "}
          <Link className="hover:underline focus:text-yellow-700" to="/login">
            Login
          </Link>
        </Typography>
      </Paper>
    </div>
  );
}
