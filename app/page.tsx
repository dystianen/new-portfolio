'use client';

import { Button, Card, Container, Divider, Flex, Grid, Image } from '@mantine/core';
import { IconBuildings, IconBusinessplan, IconUser } from '@tabler/icons-react';
import Marquee from 'react-fast-marquee';
import portfolio from './json/portofolio.json';

export default function Home() {
  return (
    <>
      <section className="tw-bg-pattern-wave tw-bg-cover">
        <Container
          size={'xl'}
          className="tw-h-[100dvh] tw-flex tw-justify-center tw-gap-4 tw-items-center tw-overflow-hidden"
        >
          <Grid
            gutter={'xl'}
            align="center"
            w={'100%'}
            styles={{
              inner: {
                width: '100%'
              }
            }}
          >
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Flex direction={'column'} gap={'xl'} justify={'center'} pr={{ base: 0, md: 50 }}>
                <Card withBorder radius={'xl'} w={'max-content'} py={5}>
                  IT Services & Solutions
                </Card>
                <h1 className="tw-text-6xl tw-font-bold">
                  Transform Your Ideas into Stunning Websites
                </h1>
                <p className="tw-text-gray-500">
                  At Bagi Website, we specialize in creating innovative and user-friendly web
                  solutions. Whether you’re starting a new project or upgrading your existing site,
                  our expert team is here to deliver exceptional results that drive growth and
                  enhance your online presence.
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
                  <Flex gap={'xl'} justify={'space-around'} className="tw-text-gray-500">
                    <Flex direction={'column'} gap={4} align={'center'}>
                      <IconUser size={40} />
                      <h1 className="tw-text-lg">Individuals</h1>
                    </Flex>
                    <Divider orientation="vertical" />
                    <Flex direction={'column'} gap={4} align={'center'}>
                      <IconBusinessplan size={40} />
                      <h1 className="tw-text-lg">Bussiness</h1>
                    </Flex>
                    <Divider orientation="vertical" />
                    <Flex direction={'column'} gap={4} align={'center'}>
                      <IconBuildings size={40} />
                      <h1 className="tw-text-lg">Companies</h1>
                    </Flex>
                  </Flex>
                </Card>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} className="tw-h-[100dvh]">
              <Flex className="tw-h-[100dvh]" gap={20}>
                <Marquee direction="down" style={{ overflowX: 'visible' }}>
                  {portfolio.data1.map((it, index: number) => (
                    <Image
                      key={index}
                      src={it.img}
                      alt="bagiwebsite-profesional-group"
                      className="tw-rounded-lg tw-shadow-lg"
                      w={300}
                      h={280}
                      loading="lazy"
                    />
                  ))}
                </Marquee>
                <Marquee direction="up" style={{ overflowX: 'visible' }}>
                  {portfolio.data2.map((it, index: number) => (
                    <Image
                      key={index}
                      src={it.img}
                      alt="bagiwebsite-profesional-group"
                      className="tw-rounded-lg tw-shadow-lg"
                      w={300}
                      h={280}
                      loading="lazy"
                    />
                  ))}
                </Marquee>
              </Flex>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section className="tw-bg-pattern-wave tw-bg-cover">
        <Container
          size={'xl'}
          className="tw-h-[100dvh] tw-flex tw-justify-center tw-gap-4 tw-items-center tw-overflow-hidden"
        >
          <Grid
            gutter={'xl'}
            align="center"
            w={'100%'}
            styles={{
              inner: {
                width: '100%'
              }
            }}
          >
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Flex direction={'column'} gap={'xl'} justify={'center'} pr={{ base: 0, md: 50 }}>
                <Card withBorder radius={'xl'} w={'max-content'} py={5}>
                  IT Services & Solutions
                </Card>
                <h1 className="tw-text-4xl tw-font-bold">
                  Transform Your Ideas into <br /> Stunning Websites
                </h1>
                <p className="tw-text-gray-500">
                  At Bagi Website, we specialize in creating innovative and user-friendly web
                  solutions. Whether you’re starting a new project or upgrading your existing site,
                  our expert team is here to deliver exceptional results that drive growth and
                  enhance your online presence.
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
                  <Flex gap={'xl'} justify={'space-between'} className="tw-text-gray-500">
                    <Flex direction={'column'} gap={4} align={'center'}>
                      <IconUser />
                      <h1 className="tw-text-lg">Individuals</h1>
                    </Flex>
                    <Divider orientation="vertical" />
                    <Flex direction={'column'} gap={4} align={'center'}>
                      <IconBusinessplan />
                      <h1 className="tw-text-lg">Bussiness</h1>
                    </Flex>
                    <Divider orientation="vertical" />
                    <Flex direction={'column'} gap={4} align={'center'}>
                      <IconBuildings />
                      <h1 className="tw-text-lg">Companies</h1>
                    </Flex>
                  </Flex>
                </Card>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} className="tw-p-0"></Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
}
