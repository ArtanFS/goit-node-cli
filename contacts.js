const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(process.cwd(), "db", "contacts.json");

async function listContacts() {
  try {
    const readData = await fs.readFile(contactsPath);
    return JSON.parse(readData);
  } catch (err) {
    console.log(err.message);
  }
}

async function getContactById(contactId) {
  try {
    const dataArr = await listContacts();
    const contact = dataArr.find((contact) => contact.id === contactId);
    if (contact) {
      return contact;
    }
    return null;
  } catch (err) {
    console.log(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const dataArr = await listContacts();
    const contact = dataArr.find((contact) => contact.id === contactId);
    if (contact) {
      return contact;
    }
    return null;
  } catch (err) {
    console.log(err.message);
  }
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}

// const contacts = {
//   removeContact,
//   addContact,
// };

module.exports = { listContacts, getContactById };
