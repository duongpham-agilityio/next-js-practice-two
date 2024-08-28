import Link from 'next/link';

// Constants
import { FOOTER_GOOGLE_LINKS } from '@/constants/data';

export const FooterGoogleLinks = () => (
  <ul className="text-text-primary flex flex-wrap items-center gap-5 py-10">
    {FOOTER_GOOGLE_LINKS.map(({ id, href, label }) => (
      <li key={id}>
        <Link href={href}>{label}</Link>
      </li>
    ))}
  </ul>
);
