import { TbBrandCrunchbase } from 'react-icons/tb';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';

const SOCIALS = [
  { id: 1, href: '/', icon: <FaTwitter /> },
  { id: 2, href: '/', icon: <FaFacebook /> },
  { id: 3, href: '/', icon: <FaLinkedin /> },
  { id: 4, href: '/', icon: <TbBrandCrunchbase /> },
];

export const SocialList = () => (
  <section className="flex gap-10">
    {SOCIALS.map(({ id, href, icon }) => (
      <Link key={id} className="text-2xl" href={href}>
        {icon}
      </Link>
    ))}
  </section>
);
