import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const newContacts = createFakeContact();
  console.log(newContacts);
  return writeContacts(newContacts);
};

// generateContacts().then((data) => {
//   console.log('Результат:', data);
// });
