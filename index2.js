const listContacts = require("./contacts");
//   getContactById,
//   removeContact,
//   addContact,
//   sum,
// } from "./contacts.js";

// let contact = [];
// listContacts();
// const contact = getContactById("e6ywwRe4jcqxXfCZOj_1e");
// console.log("contact :>> ", contact);
// console.log(listContacts());
// let ddd = sum();
// console.log(ddd);
async function fff() {
  const aaa = await listContacts();
  //   console.log(aaa);
  return aaa;
}
const bbb = fff();

console.log(bbb);
