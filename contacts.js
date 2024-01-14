const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(process.cwd(), "db", "contacts.json");
const contactsPath2 = path.join(process.cwd(), "db", "contacts2.json");

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
    return contact || null;
  } catch (err) {
    console.log(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const dataArr = await listContacts();
    const contactIdx = dataArr.findIndex((contact) => contact.id === contactId);
    if (contactIdx >= 0) {
      const contact = dataArr[contactIdx];
      dataArr.splice(contactIdx, 1);
      await fs.writeFile(contactsPath, JSON.stringify(dataArr));
      return contact;
    }
    return null;
  } catch (err) {
    console.log(err.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const dataArr = await listContacts();
    const contact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    dataArr.push(contact);
    await fs.writeFile(contactsPath, JSON.stringify(dataArr));
    return contact;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
