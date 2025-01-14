'use client';

import { Badge, Card, Container, Flex, Image, SimpleGrid, Text } from '@mantine/core';
import { IconQuoteFilled } from '@tabler/icons-react';
import ourTeams from '../json/teams.json';

export default function AboutUs() {
  // const isMobile = useMediaQuery('(max-width: 62em)');
  return (
    <>
      <section className="tw-mt-32">
        <Flex gap={40} direction={'column'} h={{ base: '90dvh', md: '100dvh' }}>
          <Container size={'xl'}>
            <h1 className="tw-text-3xl md:tw-text-6xl lg:tw-text-8xl tw-text-center tw-tracking-[0.4em]">
              BAGIWEBSITE
            </h1>
          </Container>
          <div className="tw-relative tw-h-[700px] lg:tw-h-[600px] tw-w-full">
            {/* Adjust height as needed */}
            <Image
              src={'/assets/images/about_us.jpg'}
              alt="about-us"
              width={'100%'}
              height={'100%'}
              className="tw-object-cover tw-w-full tw-h-full"
            />
            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-50"></div>{' '}
            {/* Black transparent overlay */}
          </div>
        </Flex>
      </section>

      <section className="tw-my-10 tw-flex tw-w-full">
        <Container size={'xl'} w={'100%'}>
          <Flex direction={'column'} align={'center'} mb={40} gap={16}>
            <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">Visi</h1>
            <p className="tw-max-w-2xl tw-text-center tw-text-gray-500">
              Menjadi mitra terpercaya dalam solusi digital yang inovatif, membantu bisnis
              berkembang dengan teknologi terkini dan memberikan dampak positif bagi setiap klien.
            </p>
          </Flex>

          <Flex direction={'column'} align={'center'} mb={40} gap={16}>
            <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">Misi</h1>
            <Card withBorder radius={'lg'}>
              <ol className="tw-max-w-3xl tw-text-gray-500">
                <li>
                  1. Memberikan layanan pembuatan website, aplikasi, dan solusi digital lainnya yang
                  disesuaikan dengan kebutuhan bisnis klien.
                </li>
                <li>
                  2. Membangun kemitraan yang kuat dan berkelanjutan dengan klien untuk mendukung
                  pertumbuhan dan kesuksesan mereka di dunia digital.
                </li>
                <li>
                  3. Selalu menghadirkan solusi dengan teknologi terbaru dan inovatif untuk
                  memberikan hasil terbaik dan meningkatkan efisiensi bagi setiap klien.
                </li>
                <li>
                  4. Menyediakan layanan pelanggan yang cepat dan efisien, siap membantu klien dalam
                  setiap tahap pengembangan dan pengelolaan proyek.
                </li>
                <li>
                  5. Fokus pada kepuasan klien dengan menyampaikan solusi yang tepat, hasil yang
                  memuaskan, dan nilai terbaik untuk investasi mereka.
                </li>
              </ol>
            </Card>
          </Flex>
        </Container>
      </section>
      <section className=" tw-flex tw-w-full tw-items-center tw-py-10">
        <Container size={'xl'} w={'100%'}>
          <Flex direction={'column'} justify={'center'} align={'center'} gap={16}>
            <Flex direction={'column'} align={'center'} mb={40} gap={16}>
              <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">
                Tim Kami
              </h1>
              <p className="tw-max-w-3xl tw-text-gray-500 tw-text-center">
                BagiWebsite didukung oleh tim profesional yang berpengalaman di bidang teknologi
                digital. Dengan keahlian dalam pengembangan website, aplikasi, dan solusi digital,
                kami bekerja sama untuk menciptakan hasil terbaik yang sesuai dengan kebutuhan dan
                tujuan bisnis klien kami.
              </p>
            </Flex>

            <SimpleGrid cols={{ base: 2, lg: 4 }}>
              {ourTeams.map((it, index) => (
                <Card key={index} shadow="sm" padding="lg" radius="md">
                  <Card.Section>
                    <Image
                      src={it.image}
                      h={{ base: 150, md: 300 }}
                      w={{ base: '100%', md: 300 }}
                      alt="Norway"
                      style={{
                        filter: 'grayscale(40%)'
                      }}
                    />
                  </Card.Section>

                  <Flex direction={'column'} gap={5} mt="md">
                    <Text fw={600}>{it.name}</Text>
                    <Badge color="pink">{it.position}</Badge>
                  </Flex>
                </Card>
              ))}
            </SimpleGrid>
          </Flex>
        </Container>
      </section>
      <section className=" tw-flex tw-w-full tw-items-center tw-bg-slate-50 tw-py-10">
        <Container size={'xl'} w={'100%'}>
          <Flex direction={'column'} justify={'center'} align={'center'} gap={16}>
            <h1 className="tw-text-2xl md:tw-text-4xl tw-text-center tw-font-semibold">Quotes</h1>
            <p className="tw-max-w-4xl tw-text-center tw-text-gray-500">
              Saat kita masih diberi kesempatan bangun di pagi hari, itu berarti Tuhan masih memberi
              kesempatan kepada kita untuk melakukan pekerjaan yang harus kita lakukan
            </p>
            <IconQuoteFilled size={30} />
          </Flex>
        </Container>
      </section>
    </>
  );
}
