import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import SwipeableTextMobileStepper from "../components/Slider";
import axios from "axios";
import Cards from "../components/Cards";
import { CircularProgress, Grid } from "@mui/material";
import Footer_Component from "../components/Footer_Component";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "../store/slices/UserSlices";

export function Home() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.issloggedin_Checked);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const fetched = axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(loading(false));
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar />
      <SwipeableTextMobileStepper />

      {loader.loading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="mx-10 my-5">
          <div className="border border-yellow-500  border-e-0 border-s-0 border-t-0">
            <h1 className="text-3xl p-4 px-6">All Products</h1>
          </div>
          <div className="mx-10">
            <Grid container>
              {data.map((e, i) => {
                return (
                  <Grid
                    item
                    key={i}
                    xs={12}
                    sm={12}
                    md={4}
                    lg={3}
                    xl={3}
                    gap={3}
                  >
                    <Cards
                      image={e.image}
                      desc={e.description}
                      title={e.title}
                      id={e.id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      )}
      <Footer_Component />
    </div>
  );
}
