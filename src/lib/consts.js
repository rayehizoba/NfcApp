import Mail from '../assets/img/mail.svg';
import Website from '../assets/img/website.svg';
import Contacts from '../assets/img/contacts.svg';
import Text from '../assets/img/document-text.svg';
import Link from '../assets/img/Link.svg';

export const URI = 'URI';
export const TEXT = 'TEXT';
export const VCARD = 'text/vcard';
export const WIFI_SIMPLE = 'WIFI_SIMPLE';

export const TYPE_PAGE_MAP = {
  [TEXT]: 'AddTextRecordPage',
  [URL]: 'AddUrlRecordPage',
  [VCARD]: 'AddContactRecordPage',
};

export const TYPE_NAME_MAP = {
  [TEXT]: 'Text',
  [URL]: 'URL / URI',
  [VCARD]: 'Contact Number',
};

export const TYPE_ICON_MAP = {
  [TEXT]: Text,
  [URL]: Link,
  [VCARD]: Contacts,
};

export const TNF_MAP = {
  EMPTY: 0x0,
  WELL_KNOWN: 0x01,
  MIME_MEDIA: 0x02,
  ABSOLUTE_URI: 0x03,
  EXTERNAL_TYPE: 0x04,
  UNKNOWN: 0x05,
  UNCHANGED: 0x06,
  RESERVED: 0x07,
};

export const RTD_MAP = {
  [TEXT]: 'T', // [0x54]
  [URI]: 'U', // [0x55]
  SMART_POSTER: 'Sp', // [0x53, 0x70]
  ALTERNATIVE_CARRIER: 'ac', //[0x61, 0x63]
  HANDOVER_CARRIER: 'Hc', // [0x48, 0x63]
  HANDOVER_REQUEST: 'Hr', // [0x48, 0x72]
  HANDOVER_SELECT: 'Hs', // [0x48, 0x73]
};

export const CONTACT_RECORD = {
  name: 'Contact Number',
  page: 'AddContactRecordPage',
  title: 'Enter your contact',
};

export const TEXT_RECORD = {
  name: 'Text',
  page: 'AddTextRecordPage',
  title: 'Enter your text',
};

export const URI_RECORD = {
  name: 'URL / URI',
  page: 'AddUrlRecordPage',
  title: 'Enter your URL',
};

export const RECORD_TYPES = [
  {
    title: 'Recommended',
    types: [
      TEXT_RECORD,
      CONTACT_RECORD,
      URI_RECORD,
      // {
      //   icon: Mail,
      //   name: 'Email',
      // },
      // {
      //   icon: Website,
      //   name: 'Website',
      // },
    ],
  },
  // {
  //   title: 'Contact Info',
  //   types: [
  //     CONTACT_RECORD,
  //     {
  //       icon: Mail,
  //       name: 'Email',
  //     },
  //     {
  //       icon: Website,
  //       name: 'Website',
  //     },
  //     {
  //       icon: Website,
  //       name: 'WhatsApp',
  //     },
  //     {
  //       icon: Website,
  //       name: 'SMS',
  //     },
  //     {
  //       icon: Website,
  //       name: 'Location',
  //     },
  //   ],
  // },
  // {
  //   title: 'Social Media',
  //   types: [
  //     {
  //       icon: Contacts,
  //       name: 'Instagram',
  //     },
  //     {
  //       icon: Mail,
  //       name: 'Twitter',
  //     },
  //     {
  //       icon: Website,
  //       name: 'Facebook',
  //     },
  //     {
  //       icon: Contacts,
  //       name: 'LinkedIn',
  //     },
  //     {
  //       icon: Mail,
  //       name: 'YouTube',
  //     },
  //     {
  //       icon: Website,
  //       name: 'TikTok',
  //     },
  //     {
  //       icon: Website,
  //       name: 'Snapchat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Music',
  //   types: [
  //     {
  //       icon: Contacts,
  //       name: 'Soundcloud',
  //     },
  //     {
  //       icon: Mail,
  //       name: 'Spotify',
  //     },
  //     {
  //       icon: Website,
  //       name: 'Apple Music',
  //     },
  //   ],
  // },
  // {
  //   title: 'Business',
  //   types: [
  //     {
  //       icon: Contacts,
  //       name: 'Website',
  //     },
  //     {
  //       icon: Mail,
  //       name: 'Etsy',
  //     },
  //     {
  //       icon: Website,
  //       name: 'Calendly',
  //     },
  //   ],
  // },
  // {
  //   title: 'Video',
  //   types: [
  //     {
  //       icon: Contacts,
  //       name: 'Vimeo',
  //     },
  //     {
  //       icon: Mail,
  //       name: 'YouTube',
  //     },
  //     {
  //       icon: Website,
  //       name: 'Daily Motion',
  //     },
  //   ],
  // },
  {
    title: 'Others',
    types: [
      TEXT_RECORD,
      {
        icon: Mail,
        name: 'File',
      },
      URI_RECORD,
      {
        icon: Website,
        name: 'Application',
      },
      {
        icon: Website,
        name: 'Location',
      },
      {
        icon: Website,
        name: 'Emergency',
      },
      {
        icon: Website,
        name: 'Search',
      },
      {
        icon: Website,
        name: 'Wifi',
      },
      {
        icon: Website,
        name: 'Bitcoin',
      },
    ],
  },
];
