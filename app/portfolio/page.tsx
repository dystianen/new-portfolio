'use client';
import { Button, Container, Flex, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import portfolio from '../json/portofolio.json';

export default function AboutUs() {
  const isMobile = useMediaQuery('(max-width: 62em)');
  return (
    <>
      <section className="tw-mt-32">
        <Flex gap={40} direction={'column'} h={{ base: '90dvh', md: '95dvh' }}>
          <Container size={'xl'}>
            <h1 className="tw-text-3xl md:tw-text-6xl lg:tw-text-8xl tw-text-center tw-tracking-[0.4em]">
              PORTFOLIO
            </h1>
          </Container>
          <div className="tw-relative tw-h-[700px] lg:tw-h-[600px] tw-w-full">
            <Image
              src={'/assets/images/about_us.jpg'}
              alt="about-us"
              width={'100%'}
              height={'100%'}
              className="tw-object-cover tw-w-full tw-h-full"
            />
            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-50"></div>{' '}
          </div>
        </Flex>
      </section>

      <section className="tw-my-10 tw-flex tw-w-full">
        <Container size={'lg'} w={'100%'}>
          <Flex direction={'column'} align={'center'} mb={50} gap={16}>
            <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">Projects</h1>
          </Flex>

          <Flex direction={'column'} gap={80}>
            {portfolio.allData.map((it, index) => (
              <motion.a
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1
                }}
                viewport={{ once: true }}
                href={it.href}
                target="_blank"
              >
                <Flex
                  gap={'xl'}
                  direction={isMobile ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse'}
                >
                  <Image
                    src={it.img}
                    alt={it.title}
                    w={'450px'}
                    className="tw-rounded-xl tw-shadow-xl"
                  />

                  <Flex direction={'column'} align={'start'} gap={'sm'} w={'100%'}>
                    <h1 className="tw-text-2xl tw-font-bold">{it.title}</h1>
                    <p className="tw-text-gray-500 tw-text-justify">{it.desc}</p>
                    <Button radius={'xl'} mt={'sm'} leftSection={<IconLink />}>
                      Buka Website
                    </Button>
                  </Flex>
                </Flex>
              </motion.a>
            ))}
          </Flex>
        </Container>
      </section>
    </>
  );
}
