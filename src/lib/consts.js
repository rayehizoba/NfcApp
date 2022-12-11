import Mail from '../assets/img/mail.svg';
import Website from '../assets/img/website.svg';

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
