import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { DarkMode } from '../components/DarkMode';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Game.module.css';
import { useContext } from 'react';
import { StyleContext } from '../contexts/StyleContext';

interface GameProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  profileName: string;
  profilePic: string;
}

export default function Game({
  level,
  currentExperience,
  challengesCompleted,
  profileName,
  profilePic,
}: GameProps) {
  const { darkContainer } = useContext(StyleContext);

  console.log(darkContainer);

  return (
    <ChallengesProvider
      level={ level }
      currentExperience={ currentExperience }
      challengesCompleted={ challengesCompleted }
    >
      <div className={ darkContainer ? styles.darkContainer : styles.container }>
        <Head>
          <title>Move.it</title>
        </Head>
        <DarkMode />
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile
                profileName={ profileName }
                profilePic={ profilePic }
              />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    profileName,
    profilePic,
  } = context.req.cookies;

  return {
    props: {
      profileName: String(profileName),
      profilePic: String(profilePic),
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
}
