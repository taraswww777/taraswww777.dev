import {Component, OnInit} from '@angular/core';
import {faWhatsapp, faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {loadContacts} from 'src/resources/contacts';

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

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  faWhatsapp = faWhatsapp
  faTelegram = faTelegram
  faPhone = faPhone

  contacts: Contact[] = [];

  constructor() {
  }

  ngOnInit(): void {
    loadContacts().then(contacts => {
      this.contacts = contacts.map((contact): Contact => ({
        ...contact,
        icon: ICONS[contact.icon]
      }));
    })
  }
}
