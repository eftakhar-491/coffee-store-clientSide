import React from "react";

import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  );
}
