'use client';

import { Button, Card, Container, Flex, Grid, Image, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import SplitText from '../components/Animations/SplitText';
import TrueFocus from '../components/Animations/TrueFocus';
import ReviewCard from '../components/ReviewCard';
import review from '../json/review.json';
import whyUs from '../json/whyus.json';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 62em)');
  const refWhyUs = useRef<HTMLInputElement>(null);
  const scrollToElement = () => {
    if (refWhyUs.current != null) {
      window.scrollTo({
        top: refWhyUs.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      <section className="tw-bg-pattern-wave tw-bg-cover tw-min-h-[100dvh]">
        <Container
          size={'xl'}
          className="tw-flex tw-justify-center tw-gap-4 tw-items-center tw-overflow-hidden tw-min-h-[100dvh]"
        >
          <Grid gutter={'xl'} align="center" w={'100%'} h={'100%'}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Flex direction={'column'} gap={'xl'} justify={'center'} pr={{ base: 0, md: 50 }}>
                <motion.h1
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                  className="tw-text-3xl lg:tw-text-6xl tw-font-bold"
                >
                  <SplitText
                    text="Hello, I am Tian!"
                    className="text-2xl font-semibold text-center"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                  <TrueFocus
                    sentence="Software Engineer"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="red"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                  />
                </motion.h1>
                <motion.p
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                  className="tw-text-gray-500"
                >
                  Di Bagi Website, kami mengkhususkan diri dalam menciptakan solusi web yang
                  inovatif dan mudah digunakan. Baik Anda memulai proyek baru atau memperbarui situs
                  yang sudah ada, tim ahli kami siap memberikan hasil luar biasa yang mendorong
                  pertumbuhan dan meningkatkan kehadiran online Anda.
                </motion.p>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                >
                  <Button
                    size="lg"
                    radius={'xl'}
                    w={'max-content'}
                    style={{
                      outline: '2px solid var(--mantine-primary-color-filled)',
                      outlineOffset: 'calc(.125rem* var(--mantine-scale))'
                    }}
                    onClick={scrollToElement}
                  >
                    More About Me
                  </Button>
                </motion.div>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}></Grid.Col>
          </Grid>
        </Container>
      </section>

      <section ref={refWhyUs} className="tw-my-20 tw-flex tw-items-center tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
            {whyUs.map((it, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.1 * index
                }}
                viewport={{ once: true }}
              >
                <Card shadow="sm" radius={'md'}>
                  <Flex gap={4} direction={'column'}>
                    <Image src={it.icon} alt="bagiwebsite" width={100} height={100} />
                    <h1 className="tw-text-xl tw-font-bold">{it.title}</h1>
                    <p className="tw-text-gray-500">{it.description}</p>
                  </Flex>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      <section className="tw-h-[500px] tw-my-10 tw-flex tw-items-center tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
          >
            <Flex direction={'column'} align={'center'} mb={40} gap={16}>
              <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
                Apa Kata Mereka Tentang Kami?
              </h1>
              <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">
                Kami selalu berkomitmen untuk memberikan layanan terbaik kepada setiap klien.
                Temukan bagaimana pengalaman mereka bekerja bersama BagiWebsite melalui ulasan jujur
                dan testimoni yang menginspirasi. Kepuasan Anda adalah prioritas kami!
              </p>
            </Flex>

            <Marquee gradient={!isMobile}>
              {review.map((it, index) => (
                <ReviewCard key={index} name={it.name} rating={it.rating} comment={it.comment} />
              ))}
            </Marquee>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
