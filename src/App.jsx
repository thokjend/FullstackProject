import { useState } from "react";
import Table from "./components/Table";
import Inputs from "./components/Inputs";

async function App() {
  const response = await fetch("http://localhost:3000/api/items");
  const data = await response.json();

  // table må ta inn data
  return (
    <>
      <Table></Table>
      <Inputs></Inputs>
    </>
  );
}
