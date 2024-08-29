import React, { useState } from "react";
import Inputs from "./components/Inputs";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/items");
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <Table data={data} />
      <Inputs />
    </>
  );
}

export default App;
