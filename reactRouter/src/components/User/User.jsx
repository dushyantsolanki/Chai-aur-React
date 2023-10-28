import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLoadingBar } from "../../contexts/loading_bar/loadingBar";

function User() {
  const { userId } = useParams();
  const { setProgress } = useLoadingBar();
  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <div>
      User : {userId}
      {console.log("1")}
    </div>
  );
}

export default User;
