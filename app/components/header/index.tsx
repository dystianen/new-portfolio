import { Button, Container, Divider } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="tw-fixed tw-w-full tw-top-0 tw-bg-white tw-z-10">
      <Container size={'xl'} className="tw-flex tw-justify-between tw-items-center tw-h-20">
        <div className="tw-flex tw-gap-4 tw-items-center">
          <Image
            src="/assets/images/logo_bagiwebsite.png"
            alt="BAGIWEBSITE"
            width={30}
            height={30}
          />
          <h1 className="tw-font-bold tw-text-xl">BAGIWEBSITE</h1>
          <Divider orientation="vertical" />
          <nav>
            <ul className="tw-flex tw-gap-8">
              <li>About us</li>
              <li>Product & Solutions</li>
              <li>Project us</li>
            </ul>
          </nav>
        </div>

        <Button size="md" variant="outline" radius={'xl'} leftSection={<IconPhone />}>
          Contact Us
        </Button>
      </Container>
    </header>
  );
};

export default Header;
