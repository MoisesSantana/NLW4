import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

interface ProfileProps {
  profileName: string;
  profilePic: string;
}

export function Profile({ profileName, profilePic}: ProfileProps) {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={ styles.profileContainer }>
      <img
        src={ profilePic }
        alt={ profileName }
      />
      <div>
        <strong>{ profileName }</strong>
        <p>
          <img
            src="icons/level.svg"
            alt="Level"
          />
          Level { level }
        </p>
      </div>
    </div>
  );
}
