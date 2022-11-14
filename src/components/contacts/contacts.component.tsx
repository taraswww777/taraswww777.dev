import {useEffect, useState} from "react";
import {dataContacts} from "../../__data";
import {FaIcon} from "../fa-icon";

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
    <div>
      <strong>Контакты:</strong>
      <ul className="list list-unstyled">
        {contacts.map(({href, code, text, icon}) => (
          <li className="mt-2 list-item">
            <a
              href={href}
              id={code}
              title={text}
              target="_blank"
            >
              <FaIcon iconName={icon}/>&nbsp;{text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
