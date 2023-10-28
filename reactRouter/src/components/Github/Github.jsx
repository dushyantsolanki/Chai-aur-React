import React from "react";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useLoadingBar } from "../../contexts/loading_bar/loadingBar";

function Github() {
  const data = useLoaderData();
  const { setProgress } = useLoadingBar();
  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img
          src={data.avatar_url}
          className="rounded-xl"
          alt="Git picture"
          width={300}
        />
      </div>
      {console.log("1")}
    </>
  );
}

export default Github;

export const useLoaderDataInfo = async () => {
  const data = await fetch("https://api.github.com/users/dushyantsolanki");
  return data.json();
};
