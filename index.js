const { program } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts()
        .then((contacts) => {
          return Promise.all(
            contacts.map((contact) => {
              return {
                Id: contact.id,
                Name: contact.name,
                Email: contact.email,
                Phone: contact.phone,
              };
            })
          );
        })
        .then((result) => console.table(result))
        .catch((err) => console.log(err.message));
      break;

    case "get":
      getContactById(id)
        .then((contact) => {
          return console.log(contact);
        })
        .catch((err) => console.log(err.message));
      break;

    case "add":
      addContact(name, email, phone)
        .then((contact) => {
          return console.log(contact);
        })
        .catch((err) => console.log(err.message));
      break;

    case "remove":
      removeContact(id)
        .then((contact) => {
          return console.log(contact);
        })
        .catch((err) => console.log(err.message));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
