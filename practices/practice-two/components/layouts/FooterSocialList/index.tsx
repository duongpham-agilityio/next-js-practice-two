import Link from 'next/link';

// Constants
import { FOOTER_SOCIALS } from '@/constants/data';

export const FooterSocialList = () => (
  <section className="flex gap-10" role="list">
    {FOOTER_SOCIALS.map(({ id, href, icon }) => (
      <Link key={id} className="text-2xl" href={href}>
        {icon}
      </Link>
    ))}
  </section>
);
