import { NextSeo } from 'next-seo';
import { HelloWorld } from '@components/index';

export default function Index() {
  return (
    <>
      <NextSeo
        title='Exsign Studio'
        description='Uma equipe de designers e desenvolvedores de ponta com o objetivo de trazer a experiência e design que seus usuários merecem.'
      />
      <div className=' flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-200'>
        <HelloWorld className='text-4xl font-semibold'>Hello World</HelloWorld>
      </div>
    </>
  );
}
