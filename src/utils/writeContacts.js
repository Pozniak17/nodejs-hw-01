import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const contacts = await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      {
        encoding: 'utf-8',
      },
    );

    return contacts;
  } catch (error) {
    console.error('Помилка запису у файл', error);
  }
};
