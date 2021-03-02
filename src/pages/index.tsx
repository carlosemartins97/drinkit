import Head from 'next/head';
import { ChallangeBox } from '../components/ChallangeBox';

import { CompletedChallanges } from '../components/CompletedChallanges';
import { Countdown } from '../components/Countdown';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CoutdownContext';


import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div>

      <div className={styles.container}>
        <Head>
          <title>Início | DrinkIt </title>
        </Head>

        <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallanges />
            <Countdown />
          </div>

          <div>
            <ChallangeBox />
          </div>
        </section>
      </CountdownProvider>

      </div>
    </div>
  )
}
