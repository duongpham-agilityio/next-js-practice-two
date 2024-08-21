import { Divider } from '@nextui-org/react';

// Components
import { Container } from '@/components';
import { SocialList } from '@/layouts/components/Footer/SocialList';
import { GoogleLinks } from '@/layouts/components/Footer/GoogleLinks';

export const Footer = () => (
  <footer className="bg-background-400 pt-32">
    <Container>
      <section className="md:m-auto md:w-[676px] lg:w-[560px]">
        <h2 className="text-center text-text-primary text-xl md:text-4xl mb-10">
          Updates delivered straight to your inbox
        </h2>
        <p className="text-center text-text-primary">
          Sign up to receive newsletters from Gradient Ventures. Your
          information will be used in accordance with Google is privacy policy.
          You may opt out at any time. Follow us
        </p>
      </section>
      <section className="text-text-primary flex items-center flex-col lg:flex-row gap-5 lg:gap-10 mt-16 mb-10">
        <p>Follow us</p>
        <SocialList />
      </section>
    </Container>
    <Divider />
    <Container>
      <GoogleLinks />
    </Container>
  </footer>
);
