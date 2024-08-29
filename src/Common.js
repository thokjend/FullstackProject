export let itemObject = {
  type: "",
  name: "",
  ilvl: "",
};
export let editObject = {
  id: "",
  type: "",
  name: "",
  ilvl: "",
};
export let editMode = false;

export function enterEditMode(id, type, name, ilvl) {
  editMode = true;
  editObject.id = id;
  editObject.type = type;
  editObject.name = name;
  editObject.ilvl = ilvl;
}

export async function remove(id) {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    updateView();
  }
}

export async function addItem() {
  if (!itemObject.type || !itemObject.name || itemObject.ilvl == "") {
    return;
  }
  const response = await fetch("http://localhost:3000/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: itemObject.type,
      Name: itemObject.name,
      ItemLevel: itemObject.ilvl,
    }),
  });

  if (response.ok) {
    itemObject = { type: "", name: "", ilvl: "" };
    updateView();
  }
}

export async function updateItem(id) {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: editObject.type,
      Name: editObject.name,
      ItemLevel: editObject.ilvl,
    }),
  });

  if (response.ok) {
    updateView();
    editMode = false;
  }
}
