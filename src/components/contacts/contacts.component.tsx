import React, {useEffect, useState} from "react";
import {dataContacts} from "../../__data";
import {FaIcon} from "../fa-icon";
import {List, NavLink} from '@mantine/core';
import Link from 'next/link';

interface Contact {
  href: string,
  code: string,
  text: string,
  icon: string
}

export const ContactsComponent = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(dataContacts);
  }, []);

  return (
    <List listStyleType={'none'} style={{display: 'flex', flexWrap: 'wrap', gap: '1rem 1rem'}}>
      {contacts.map(({href, code, text, icon}) => (
        <List.Item className="mt-2 list-item">
          <NavLink
            color={'blue'}
            variant={'subtle'}
            active
            icon={<FaIcon iconName={icon} />}
            component={Link}
            href={href}
            id={code}
            title={text}
            target="_blank"
            label={text}
          />
        </List.Item>
      ))}
    </List>
  );
}
