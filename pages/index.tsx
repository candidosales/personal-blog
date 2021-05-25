import Head from 'next/head'

import { Grid, SimpleGrid } from "@chakra-ui/react"
import Portfolio from '../component/portfolio'
import Image from 'next/image'


// import angular from '../public/devicon/angular.svg';

export default function Home() {
  const portfolio = [{
    id: 1,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular"]
  }, {
    id: 2,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular", "nextjs"]

  }, {
    id: 3,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular", "nextjs"]

  }, {
    id: 4,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular", "nextjs"]

  }, {
    id: 5,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular", "nextjs"]

  }, {
    id: 6,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular", "nextjs"]

  }]

  return (
    <div className="container">
      <Head>
        <title>Candido Sales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="about">
          <div className="avatar">
            <Image src="https://pbs.twimg.com/profile_images/1212830944555499520/710X-ncW_400x400.jpg"  width={100} height={100} />
          </div>
          <p className="presentation">Hi, my name is</p>
          <h1>Cândido Sales.</h1>
          <h2>I build things for the web and mobile.</h2>
          <p>I'm a Saskatoon-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I'm an software engineer at Vendasta focused on building accessible, human-centered products.</p>
        </section>
        <section className="grid">
          <h3>Portfolio</h3>
          <SimpleGrid  columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
            {
              portfolio.map((p, index) => (
                <Portfolio
                  key={index}
                  imageUrl={p.imageUrl}
                  imageAlt={p.imageAlt}
                  title={p.title}
                  icons={p.icons}
                />
              ))
            }
          </SimpleGrid>
        </section>
        <section className="grid">
          <h3>Extras</h3>
        </section>
        <section className="grid">
          <h3>Volunteer</h3>
        </section>
      </main>

      <footer>
      </footer>
    </div>
  )
}
