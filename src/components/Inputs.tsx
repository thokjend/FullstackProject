import React, { useState } from "react";
import { addItem, itemObject } from "../Common.js";

function Inputs() {
  const [type, setType] = useState(itemObject.type);
  const [name, setName] = useState(itemObject.name);
  const [ilvl, setIlvl] = useState(itemObject.ilvl);

  const handleAddItem = () => {
    itemObject.type = type;
    itemObject.name = name;
    itemObject.ilvl = ilvl;
    addItem();
    setType(""); // Reset the input fields after adding
    setName("");
    setIlvl("");
  };

  return (
    <div>
      <div>
        Type:{" "}
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        Item Level:{" "}
        <input
          type="number"
          value={ilvl}
          onChange={(e) =>
            setIlvl(e.target.value !== "" ? parseInt(e.target.value) : "")
          }
          min={0}
        />
      </div>
      <div>
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default Inputs;
