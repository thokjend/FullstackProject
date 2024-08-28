function CreateTable() {
  let html = `<tr>
                <th>Id</th>
                <th>Type</th>
                <th>Name</th>
                <th>Ilvl</th>
                <th></th>
                <th></th>
            </tr>`;

  for (let i = 0; i < data.length; i++) {
    html += createHtml(data[i]);
  }
  return html;
}

function createHtml(item) {
  if (!editMode || editObject.id != item.Id) {
    return /*HTML*/ `
    <tr>
      <td>${item.Id}</td>
      <td>${item.Type}</td>
      <td>${item.Name}</td>
      <td>${item.ItemLevel}</td>
      <td><div><button onclick="enterEditMode(${item.Id}, '${item.Type}', '${item.Name}', ${item.ItemLevel})">Edit</button></div></td>
      <td><div id="btn" onclick="remove(${item.Id})">X</div></td>
    </tr>
    `;
  }
  return /*HTML*/ `
    <tr>
      <td>${item.Id}</td>
      <td><input type="text" value ="${editObject.type}" onchange="editObject.type = this.value"></td>
      <td><input type="text" value ="${editObject.name}" onchange="editObject.name = this.value"></td>
      <td><input type="number" value ="${editObject.ilvl}" 
        onchange="editObject.ilvl = this.value != '' ? parseInt(this.value) : ''"
        min = 0></td>
      <td><button onclick="updateItem(${item.Id})">Save</button></td>
      <td><div id="btn" onclick="remove(${item.Id})">X</div></td>
    </tr>
    `;
}
