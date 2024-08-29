import Link from 'next/link';

// Constants
import { FOOTER_SOCIALS } from '@/constants/data';

export const FooterSocialList = () => (
  <ul className="flex gap-10">
    {FOOTER_SOCIALS.map(({ id, href, icon, label }) => (
      <li key={id}>
        <Link aria-label={label} className="text-2xl" href={href}>
          {icon}
        </Link>
      </li>
    ))}
  </ul>
);
