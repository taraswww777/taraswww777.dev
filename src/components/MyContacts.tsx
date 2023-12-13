import {useEffect, useState} from "react";
import {dataContacts} from "../__data";
import {FaIcon} from "./fa-icon";

interface Contact {
  href: string,
  code: string,
  text: string,
  icon: string
}

export const MyContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(dataContacts);
  }, []);

  return (
    <div className="row">
      {contacts.map(({href, code, text, icon}) => (
        <div key={code} className="col-xl col-md-4 col-sm-12">
          <a
            href={href}
            id={code}
            title={text}
            target="_blank"
            className="btn btn-link btn-light"
          >
            <FaIcon iconName={icon} />&nbsp;{text}
          </a>
        </div>
      ))}
    </div>
  );
}
