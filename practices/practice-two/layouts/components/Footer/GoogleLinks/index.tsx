import Link from 'next/link';

const GOOGLE_LINKS = [
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

export const GoogleLinks = () => (
  <section className="text-text-primary flex flex-wrap items-center gap-5 py-10">
    {GOOGLE_LINKS.map(({ id, href, label }) => (
      <Link key={id} href={href}>
        {label}
      </Link>
    ))}
  </section>
);
