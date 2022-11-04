import {faWhatsapp, faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useEffect, useState} from "react";
import {dataContacts} from "../../__data";

const ICONS: Record<string, IconProp> = {
  faTelegram,
  faPhone,
  faEnvelope,
  faGithub,
}

interface Contact {
  href: string,
  code: string,
  text: string,
  icon: IconProp
}

export const ContactsComponent = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(dataContacts.map((contact): Contact => ({
      ...contact,
      icon: ICONS[contact.icon]
    })));
  }, []);

  return (
    <div>
      <strong>Контакты:</strong>
      <ul>
        {contacts.map(({href, code, text}) => (
          <li className="mt-2">
            <a
              href={href}
              id={code}
              title={text}
              target="_blank"
            >
              {/*<fa-icon icon={icon} style="font-size: 1rem; display: inline-block; max-height: 1rem"></fa-icon>*/}
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
