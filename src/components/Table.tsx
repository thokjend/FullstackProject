import React from "react";
import { remove, enterEditMode, editMode, editObject } from "../Common";

interface Props {
  data: Array<{
    Id: number;
    Type: string;
    Name: string;
    ItemLevel: number;
  }>;
}

function Table({ data }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Type</th>
          <th>Name</th>
          <th>Ilvl</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.Id}>
            {editMode && editObject.id === item.Id ? (
              <>
                <td>{item.Id}</td>
                <td>
                  <input
                    type="text"
                    defaultValue={editObject.type}
                    onChange={(e) => (editObject.type = e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    defaultValue={editObject.name}
                    onChange={(e) => (editObject.name = e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue={editObject.ilvl}
                    onChange={(e) =>
                      (editObject.ilvl =
                        e.target.value !== "" ? parseInt(e.target.value) : "")
                    }
                    min={0}
                  />
                </td>
                <td>
                  <button onClick={() => updateItem(item.Id)}>Save</button>
                </td>
                <td>
                  <button onClick={() => remove(item.Id)}>X</button>
                </td>
              </>
            ) : (
              <>
                <td>{item.Id}</td>
                <td>{item.Type}</td>
                <td>{item.Name}</td>
                <td>{item.ItemLevel}</td>
                <td>
                  <button
                    onClick={() =>
                      enterEditMode(
                        item.Id,
                        item.Type,
                        item.Name,
                        item.ItemLevel
                      )
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => remove(item.Id)}>X</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
