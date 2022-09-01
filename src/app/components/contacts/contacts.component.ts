import {Component, OnInit} from '@angular/core';
import {faWhatsapp, faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface Contact {
  href: string,
  code: string,
  text: string,
  icon: IconProp
}

const CONTACTS: Contact[] = [
  {href: 'https://t.me/taraswww777/', code: 'telegram', text: '@taraswww777', icon: faTelegram},
  {href: 'tel:+79246736538', text: '+7-924-673-65-38', code: 'phone', icon: faPhone},
  {href: 'mailto:taraswww777@mail.ru', text: 'taraswww777@mail.ru', code: 'email', icon: faEnvelope},
  {href: 'https://github.com/taraswww777', text: 'taraswww777', code: 'github', icon: faGithub},
];

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  faWhatsapp = faWhatsapp
  faTelegram = faTelegram
  faPhone = faPhone

  contacts: Contact[] = CONTACTS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
