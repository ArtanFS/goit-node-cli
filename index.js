const { program } = require("commander");
const { listContacts, getContactById, removeContact } = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      await listContacts()
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
      await getContactById(id)
        .then((contact) => {
          return console.log(contact);
        })
        .catch((err) => console.log(err.message));
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      await removeContact(id)
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
