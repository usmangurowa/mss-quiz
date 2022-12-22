import dynamic from "next/dynamic";
import React from "react";
const TitleBar = dynamic(() => import("../components/TitleBar"), {
  ssr: false,
});

const Global = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-screen flex flex-col overflow-x-hidden overflow-y-hidden">
      <TitleBar />
      <section className="overflow-y-auto w-full flex-1">{children}</section>
    </main>
  );
};

export default Global;
