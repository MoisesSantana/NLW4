import { useContext, useState } from 'react';
import { StyleContext } from '../contexts/StyleContext';
import styles from '../styles/components/DarkMode.module.css';

export function DarkMode() {
  const [mode, setMode] = useState('Dark Mode');
  const { darkContainer, setDarkContainer } = useContext(StyleContext);

  function handleModeChange() {
    mode === 'Dark Mode' ? setMode('Clear Mode') : setMode('Dark Mode');
    setDarkContainer(!darkContainer)
  }

  return (
    <button
      className={ darkContainer ? styles.clearModeBtn : styles.darkModeBtn }
      type="button"
      onClick={ handleModeChange }
    >
      { mode }
    </button>
  );
}