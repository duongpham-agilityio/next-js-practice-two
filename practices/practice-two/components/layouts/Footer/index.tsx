import { Divider } from '@nextui-org/react';

// Components
import {
  Box,
  Container,
  FooterGoogleLinks,
  FooterSocialList,
  Text,
} from '@/components';

export const Footer = () => (
  <footer className="bg-background-400 pt-32" role="contentinfo">
    <Container>
      <Box as="section" className="md:m-auto md:w-[676px] lg:w-[560px]">
        <Text as="h2" className="text-center text-xl md:text-4xl mb-10">
          Updates delivered straight to your inbox
        </Text>
        <Text className="text-center">
          Sign up to receive newsletters from Gradient Ventures. Your
          information will be used in accordance with Google is privacy policy.
          You may opt out at any time. Follow us
        </Text>
      </Box>
      <Box
        as="section"
        className="flex items-center flex-col lg:flex-row gap-5 lg:gap-10 mt-16 mb-10"
      >
        <Text>Follow us</Text>
        <FooterSocialList />
      </Box>
    </Container>
    <Divider />
    <Container>
      <FooterGoogleLinks />
    </Container>
  </footer>
);
