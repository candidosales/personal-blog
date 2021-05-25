import Head from 'next/head'

import { Grid } from "@chakra-ui/react"
import Portfolio from '../component/portfolio'
import Image from 'next/image'


// import angular from '../public/devicon/angular.svg';

export default function Home() {
  const portfolio = [{
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular"]
  }, {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular", "nextjs"]

  }, {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular", "nextjs"]

  }, {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular", "nextjs"]

  }, {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    icons: ["angular", "nextjs"]

  }, {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
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
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {
              portfolio.map(p => (
                <Portfolio
                  imageUrl={p.imageUrl}
                  imageAlt={p.imageAlt}
                  beds={p.beds}
                  baths={p.baths}
                  title={p.title}
                  icons={p.icons}
                />
              ))
            }
          </Grid>
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
