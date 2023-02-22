import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../Pages/Login";

export default function ProtectedRoute() {
  const [isTrue, setIsTrue] = useState("");
  const lock = useSelector(state=> state.adminLock);
  useEffect(() => {
    setIsTrue(lock);
  }, [lock]);
  let elementDirect = <></>
  if(isTrue!=="") {
    if(isTrue) {
      elementDirect=<Outlet/>
    }
    else {
      elementDirect=<Login/>
    }
  }
  return <>{elementDirect}</>
}
