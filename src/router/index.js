/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../modules/home-page/pages/Home.js";
import HomeDetail from "../modules/detail/pages/HomeDetail.js";

export default class Routers extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<HomeDetail />} />
      </Routes>
    );
  }
}
