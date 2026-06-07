import type { ContactItem, SocialLink } from '@/types';

export const CONTACT_ITEMS: ContactItem[] = [
  {
    iconName: 'email',
    color:    'bg-neo-yellow',
    label:    'Email',
    value:    'hafizhfadhl22@gmail.com',
    href:     'mailto:hafizhfadhl22@gmail.com',
  },
  {
    iconName: 'whatsapp',
    color:    'bg-neo-green',
    label:    'WhatsApp',
    value:    '+62 822-9076-4213',
    href:     'https://wa.me/6282290764213',
  },
  {
    iconName: 'location',
    color:    'bg-neo-blue',
    label:    'Location',
    value:    'Indonesia, Bandung',
    href:     'https://maps.google.com/?q=Bandung,Indonesia',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    iconName: 'linkedin',
    href:     'https://www.linkedin.com/in/hafizhfadhlm/',
    color:    'bg-neo-blue',
    label:    'LinkedIn',
    username: 'hafizhfadhlm',
  },
  {
    iconName: 'github',
    href:     'https://github.com/Hafizh220705',
    color:    'bg-white',
    label:    'GitHub',
    username: 'Hafizh220705',
  },
  {
    iconName: 'instagram',
    href:     'http://instagram.com/hafizhfadhlm',
    color:    'bg-neo-pink',
    label:    'Instagram',
    username: 'hafizhfadhlm',
  },
];