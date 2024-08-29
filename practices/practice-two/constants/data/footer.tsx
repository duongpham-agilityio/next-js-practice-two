import { TbBrandCrunchbase } from 'react-icons/tb';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa6';

export const FOOTER_GOOGLE_LINKS = [
  {
    id: 1,
    label: 'Privacy',
    href: 'https://policies.google.com/privacy',
  },
  {
    id: 2,
    label: 'Terms',
    href: 'https://policies.google.com/terms',
  },
  {
    id: 3,
    label: 'Founder portal',
    href: 'https://sites.google.com/corp/google.com/gradient/',
  },
  {
    id: 4,
    label: 'Help',
    href: 'https://support.google.com/websearch',
  },
];

export const FOOTER_SOCIALS = [
  { id: 1, href: '/', icon: <FaTwitter />, label: 'twitter' },
  { id: 2, href: '/', icon: <FaFacebook />, label: 'facebook' },
  { id: 3, href: '/', icon: <FaLinkedin />, label: 'linkedin' },
  { id: 4, href: '/', icon: <TbBrandCrunchbase />, label: 'brand crunchbas' },
];
