'use client';
import { Burger, Button, Container, Divider, Drawer, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPhone } from '@tabler/icons-react';
import Image from 'next/image';

const Header = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <header
      className={`tw-fixed tw-w-full tw-top-0 tw-bg-white tw-z-10 ${opened ? '' : 'tw-shadow-sm'}`}
    >
      <Container size={'xl'} className="tw-flex tw-justify-between tw-items-center tw-h-20">
        <div className="tw-flex tw-gap-4 tw-items-center">
          <Image
            src="/assets/images/logo_bagiwebsite.png"
            alt="BAGIWEBSITE"
            width={30}
            height={30}
          />
          <h1 className="tw-font-bold tw-text-xl">BAGIWEBSITE</h1>
          <div className="tw-hidden md:tw-flex tw-gap-4">
            <Divider orientation="vertical" />
            <nav>
              <ul className="tw-flex tw-gap-8">
                <li>About us</li>
                <li>Product & Solutions</li>
                <li>Project us</li>
              </ul>
            </nav>
          </div>
        </div>

        <Button
          size="md"
          variant="outline"
          radius={'xl'}
          leftSection={<IconPhone />}
          display={{ base: 'none', sm: 'block' }}
        >
          Contact Us
        </Button>

        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          display={{ base: 'block', sm: 'none' }}
        />

        <Drawer
          opened={opened}
          onClose={toggle}
          title="Authentication"
          position="top"
          top={100}
          zIndex={9}
          styles={{
            content: {
              height: 'max-content'
            }
          }}
        >
          <Flex direction="column" gap={32}>
            <nav className="tw-mt-8">
              <ul className="tw-flex tw-flex-col tw-gap-8">
                <li>About us</li>
                <li>Product & Solutions</li>
                <li>Project us</li>
              </ul>
            </nav>
            <Button
              size="md"
              variant="outline"
              w={'max-content'}
              radius={'xl'}
              leftSection={<IconPhone />}
            >
              Contact Us
            </Button>
          </Flex>
        </Drawer>
      </Container>
    </header>
  );
};

export default Header;
