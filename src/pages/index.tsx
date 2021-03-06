import { NextSeo } from 'next-seo';
import { Card, CardWrapper, PageWrapper, Title } from '@components/index';

export default function Index() {
  return (
    <>
      <NextSeo title='Jumpstart Test' description='Jumpstart Test' />
      <PageWrapper>
        <CardWrapper>
          <Title>Hover to change states</Title>
          <Card
            title='Corporate Bylaws'
            description='An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors'
          />
        </CardWrapper>
      </PageWrapper>
    </>
  );
}
