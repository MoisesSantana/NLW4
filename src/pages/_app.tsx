import '../styles/global.css';
import { ProfileProvider } from '../contexts/ProfileContext';
import { StyleProvider } from '../contexts/StyleContext';

function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <StyleProvider>
        <Component {...pageProps} />
      </StyleProvider>
    </ProfileProvider>
  );
}

export default MyApp;
