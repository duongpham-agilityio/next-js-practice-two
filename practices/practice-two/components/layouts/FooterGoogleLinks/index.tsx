import Link from 'next/link';

// Constants
import { FOOTER_GOOGLE_LINKS } from '@/constants/data';

export const FooterGoogleLinks = () => (
  <section className="text-text-primary flex flex-wrap items-center gap-5 py-10">
    {FOOTER_GOOGLE_LINKS.map(({ id, href, label }) => (
      <Link key={id} href={href}>
        {label}
      </Link>
    ))}
  </section>
);
