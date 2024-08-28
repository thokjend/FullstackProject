function CreateInputs() {
  return /*HTML*/ `
        <div>Type: <input
            type = "text"
            value ="${itemObject.type}"
            oninput="itemObject.type = this.value">
          </div>
          <div>Name: <input
            type = "text"
            value ="${itemObject.name}"
            oninput="itemObject.name = this.value">
          </div>
          <div>Item Level: <input
            type="number"
            value ="${itemObject.ilvl}"
            oninput="itemObject.ilvl = this.value != '' ? parseInt(this.value) : ''"
            min = 0>
          </div>
          <div>
            <button onclick="addItem()">Add Item</button>
          </div>
        `;
}
