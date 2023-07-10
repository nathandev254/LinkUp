import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const { username, email } = useSelector((state) => state.user);

  return (
    <div>
      Coming soon....
    </div>
  );
}

export default Home;
