import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLoadingBar } from "../../contexts/loading_bar/loadingBar";

function User() {
  const { userId } = useParams();
  const { setProgress } = useLoadingBar();
  setProgress(0);
  useEffect(() => {
    setProgress(100);
  }, []);
  return <div>User : {userId}</div>;
}

export default User;
