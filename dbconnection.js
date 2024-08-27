const sql = require("msnodesqlv8");
const connectionString =
  "server=THOMAS\\SQLEXPRESS;Database=WoWItems;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}";

const query = "SELECT * FROM dbo.Items";

function getAllItems() {
  return new Promise((resolve, reject) => {
    sql.query(connectionString, query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function deleteItemById(id) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM dbo.Items WHERE Id = ?`;
    sql.query(connectionString, query, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function addItem(type, name, ilvl) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO dbo.Items (Type, Name, ItemLevel) VALUES (?, ?, ?)`;
    sql.query(connectionString, query, [type, name, ilvl], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function updateItem(id, type, name, ilvl) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE dbo.Items SET Type = ?, Name = ?, ItemLevel = ? WHERE Id = ?`;
    sql.query(
      connectionString,
      query,
      [type, name, ilvl, id],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

module.exports = {
  getAllItems: getAllItems,
  deleteItemById: deleteItemById,
  addItem: addItem,
  updateItem: updateItem,
};
