import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ProfileContext } from '../contexts/ProfileContext';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const router = useRouter();
  const { handleProfileData } = useContext(ProfileContext)

  function responseGoogle(response: GoogleLoginResponse) {
    const { profileObj: {
      name,
      imageUrl,
    } } = response;
    handleProfileData(imageUrl, name)
    router.push(`/game`);
  }

  return (
    <div className={ styles.container }>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <div>
        <div className={ styles.contentContainer }>
          <img src='logo-full.svg' alt="Move.It"/>
          <em className={ styles.subtitle }>A aplicação que se preocupa com DEV</em>
        </div>
      </div>
      <div>
        <div className={ styles.contentContainer }>
          <p className={ styles.warning }>
            Para fazer login é necessário ter uma conta no google
          </p>
          <GoogleLogin
            className={ styles.googleLogin }
            clientId='1058573758051-ogi101li29fdpo4qo89e1j8dna2mgpqv.apps.googleusercontent.com'
            buttonText="Entre com google"
            onSuccess={ responseGoogle }
          />
        </div>
      </div>
    </div>
  );
}
