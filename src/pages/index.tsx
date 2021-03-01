import Head from 'next/head';
import { CompletedChallanges } from '../components/CompletedChallanges';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div>

      <div className={styles.container}>
        <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallanges />
        </div>

        <div></div>
      </section>

      </div>
    </div>
  )
}
