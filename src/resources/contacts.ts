import contactsData from './__data/contacts.json';
import {ContactDto} from 'src/types/dto';

export const loadContacts = async (): Promise<ContactDto[]> => (
  contactsData
);
