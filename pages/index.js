import {
  NavBar,
  Billings,
  CardDeal,
  Business,
  Client,
  Cta,
  Stats,
  Footer,
  Testimonial,
  Hero,
  Nft,
} from "../components/AllFiles";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="bg-primary w-full overflow-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className=" xl:max-w-[1280px] w-full">
            <NavBar />
          </div>
        </div>

        <div className="bg-primary flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>

        <div className="bg-primary flex sm:px-16 px-6 justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
            <Stats />
            <Business />
            <Nft />
            <Billings />
            <CardDeal />
            <Testimonial />
            {/* <Client /> */}
            {/* <Cta /> */}
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
