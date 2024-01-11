import { promises as fs } from "fs";
import { join } from "path";

const contactsPath = join(process.cwd(), "db");

// TODO: задокументувати кожну функцію
async function listContacts() {
  fs.readFile(`${contactsPath}/contacts.json`)
    .then((data) => {
      const fff = data.toString();
      console.log(fff);
      return fff;
    })
    .catch((err) => console.log(err.message));
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
  return 3 + 7;
}

const contacts = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  sum,
};

export default contacts;
