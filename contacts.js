const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(process.cwd(), "db", "contacts.json");

async function listContacts() {
  try {
    const readData = await fs.readFile(contactsPath);
    const dataArr = JSON.parse(readData);
    return dataArr;
  } catch (err) {
    console.log(err.message);
  }
}

function getContactById(contactId) {
  (contactId) =>
    fs
      .readFile(`${contactsPath}/contacts.json`)
      .then((cont) => {
        return cont.toString();
      })
      .catch((err) => console.log(err.message));
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
function sum() {
  const f = 3 + 7;
  return f;
}

// const contacts = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   sum,
// };

module.exports = listContacts;
