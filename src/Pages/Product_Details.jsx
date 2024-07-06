import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import Footer_Component from "../components/Footer_Component";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "../store/slices/UserSlices";
import { CircularProgress } from "@mui/material";
export default function Product_Details() {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.issloggedin_Checked);
  const [single_Data, set_Single_Data] = useState("");
  const [counter, set_Counter] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id)
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const single_Product = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch(loading(false));
        // console.log(res.data);
        set_Single_Data(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const home_Navigate_Handle = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      {loader.loading ? (
        <div className="flex justify-center mt-5">
          <CircularProgress />
        </div>
      ) : (
        <div className=" flex justify-center mx-5 mt-5">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="col-md-6  w-full h-[100dvh]">
                <img
                  className="w-[100%] h-full"n
                  src={single_Data.image}
                  alt=""
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="col-md-6 w-full my-9">
                <div className="flex">
                  <p className="cursor-pointer" onClick={home_Navigate_Handle}>
                    Home
                  </p>
                  /<p>{single_Data.title}</p>
                </div>
                <br />
                <h5 className="text-5xl">{single_Data.title}</h5>
                <br />
                <h5 className="text-3xl">${single_Data.price}</h5>
                <br />
                <p>{single_Data.description}</p>
                <br />
                <div className="flex">
                  <div className="">
                    <button
                      onClick={() => set_Counter(counter - 1)}
                      className="border border-slate-500 px-4 flex justify-center items-center cursor-pointer py-2 text-green-700 text-lg border-e-0"
                    >
                      -
                    </button>
                  </div>
                  <div className="border border-slate-500 px-4 py-2">
                    {counter}
                  </div>
                  <div className="">
                    <button
                      onClick={() => set_Counter(counter + 1)}
                      className="border border-slate-500 px-4 flex justify-center items-center cursor-pointer py-2 text-green-700 text-lg border-s-0"
                    >
                      +
                    </button>
                  </div>
                  <div className="mx-10 flex items-center">
                    <button className="border border-green-600 px-5 py-2 hover:bg-green-500 hover:text-white hover:border-0 duration-700">
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="border border-slate-400 border-e-0 border-s-0 border-t-0 mt-10"></div>
              </div>
            </Col>
          </Row>
        </div>
      )}
      <div className="">
        <Footer_Component />
      </div>
    </div>
  );
}
