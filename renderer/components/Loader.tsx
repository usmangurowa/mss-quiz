import React from "react";
import { Loader } from "@mantine/core";

const Load = () => {
  const [show, setShow] = React.useState<boolean>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);
  return (
    <>
      {show ? (
        <main className="z-50 h-screen w-screen flex items-center justify-center fixed top-0 left-0 bg-white">
          <Loader />
        </main>
      ) : null}
    </>
  );
};

export default Load;
