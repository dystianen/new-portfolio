'use client';

import { Button, Card, Container, Divider, Flex, Grid, Image, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBuildings, IconBusinessplan, IconUser } from '@tabler/icons-react';
import Marquee from 'react-fast-marquee';
import ReviewCard from './components/ReviewCard';
import portfolio from './json/portofolio.json';
import review from './json/review.json';
import whyUs from './json/whyus.json';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 62em)');
  return (
    <>
      <section className="tw-bg-pattern-wave tw-bg-cover">
        <Container
          size={'xl'}
          className="tw-flex tw-justify-center tw-gap-4 tw-items-center tw-overflow-hidden"
        >
          <Grid gutter={'xl'} align="center" w={'100%'}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Flex direction={'column'} gap={'xl'} justify={'center'} pr={{ base: 0, md: 50 }}>
                <Card withBorder radius={'xl'} w={'max-content'} py={5}>
                  IT Services & Solutions
                </Card>
                <h1 className="tw-text-3xl lg:tw-text-6xl tw-font-bold">
                  Ubah Ide Anda Menjadi Sesuatu yang Menakjubkan
                </h1>
                <p className="tw-text-gray-500">
                  Di Bagi Website, kami mengkhususkan diri dalam menciptakan solusi web yang
                  inovatif dan mudah digunakan. Baik Anda memulai proyek baru atau memperbarui situs
                  yang sudah ada, tim ahli kami siap memberikan hasil luar biasa yang mendorong
                  pertumbuhan dan meningkatkan kehadiran online Anda.
                </p>

                <Button
                  size="lg"
                  radius={'xl'}
                  w={'max-content'}
                  style={{
                    outline: '2px solid var(--mantine-primary-color-filled)',
                    outlineOffset: 'calc(.125rem* var(--mantine-scale))'
                  }}
                >
                  Start the Transformation
                </Button>

                <Card shadow={'sm'} radius={'md'}>
                  <Flex
                    gap={{ base: 'md', md: 'xl' }}
                    justify={'space-around'}
                    className="tw-text-gray-500"
                  >
                    <Flex direction={'column'} gap={4} align={'center'}>
                      <IconUser size={isMobile ? 30 : 40} />
                      <h1 className="tw-text-lg">Individuals</h1>
                    </Flex>
                    <Divider orientation="vertical" />
                    <Flex direction={'column'} gap={4} align={'center'}>
                      <IconBusinessplan size={isMobile ? 30 : 40} />
                      <h1 className="tw-text-lg">Bussiness</h1>
                    </Flex>
                    <Divider orientation="vertical" />
                    <Flex direction={'column'} gap={4} align={'center'}>
                      <IconBuildings size={isMobile ? 30 : 40} />
                      <h1 className="tw-text-lg">Companies</h1>
                    </Flex>
                  </Flex>
                </Card>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                className="tw-h-auto lg:tw-h-[100dvh]"
                gap={20}
              >
                <Marquee direction={isMobile ? 'right' : 'down'} style={{ overflowX: 'visible' }}>
                  {portfolio.data1.map((it, index: number) => (
                    <div key={index} className="tw-shadow-sm">
                      <Image
                        src={it.img}
                        alt="bagiwebsite-profesional-group"
                        className="md:tw-rounded-lg tw-shadow-lg tw-object-contain"
                        w={{ base: 150, md: 200, lg: 300 }}
                        h={'auto'}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </Marquee>
                <Marquee direction={isMobile ? 'left' : 'up'} style={{ overflowX: 'visible' }}>
                  {portfolio.data2.map((it, index: number) => (
                    <Image
                      key={index}
                      src={it.img}
                      alt="bagiwebsite-profesional-group"
                      className="md:tw-rounded-lg tw-shadow-lg tw-object-contain"
                      w={{ base: 150, md: 200, lg: 300 }}
                      h={'auto'}
                      loading="lazy"
                    />
                  ))}
                </Marquee>
              </Flex>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section className="tw-my-20 tw-flex tw-items-center tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <Flex direction={'column'} align={'center'} mb={40} gap={16}>
            <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
              Kenapa Memilih Kami?
            </h1>
            <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">
              Kami menawarkan solusi digital yang profesional, kustom, dan menggunakan teknologi
              terkini untuk memenuhi kebutuhan bisnis Anda. Dengan layanan lengkap dan dukungan
              responsif, kami berkomitmen membantu Anda meraih kesuksesan.
            </p>
          </Flex>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
            {whyUs.map((it, index) => (
              <Card key={index} shadow="sm" radius={'md'}>
                <Flex gap={4} direction={'column'}>
                  <Image src={it.icon} alt="bagiwebsite" width={100} height={100} />
                  <h1 className="tw-text-xl tw-font-bold">{it.title}</h1>
                  <p>{it.description}</p>
                </Flex>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      <section className="tw-h-[500px] tw-my-10 tw-flex tw-items-center tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <Flex direction={'column'} align={'center'} mb={40} gap={16}>
            <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
              Apa Kata Mereka Tentang Kami?
            </h1>
            <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">
              Kami selalu berkomitmen untuk memberikan layanan terbaik kepada setiap klien. Temukan
              bagaimana pengalaman mereka bekerja bersama BagiWebsite melalui ulasan jujur dan
              testimoni yang menginspirasi. Kepuasan Anda adalah prioritas kami!
            </p>
          </Flex>

          <Marquee gradient={!isMobile}>
            {review.map((it, index) => (
              <ReviewCard key={index} name={it.name} rating={it.rating} comment={it.comment} />
            ))}
          </Marquee>
        </Container>
      </section>
    </>
  );
}
