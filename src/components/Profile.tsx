import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { StyleContext } from '../contexts/StyleContext';
import styles from '../styles/components/Profile.module.css';

interface ProfileProps {
  profileName: string;
  profilePic: string;
}

export function Profile({ profileName, profilePic}: ProfileProps) {
  const { level } = useContext(ChallengesContext);
  const { darkContainer } = useContext(StyleContext);

  return (
    <div className={ darkContainer ? styles.darkProfileContainer : styles.profileContainer }>
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
