import styles from '../styles/HomePage.module.css';
const HomePage = () => {
  return (
    <main className={styles.homePage}>

      <div className={styles.contentArea}>
        <aside className={styles.trendingPanel}>
          <h3>Tendances</h3>
          <p>#PlageParadisiaque</p>
          <p>#CuisineCaribéenne</p>
          <p>#MusiqueTropicale</p>
          <p>#VoyageDansLesCaraïbes</p>
          <p>#ArtHaïtien</p>
        </aside>

        <main className={styles.mainFeed}>
          <h3 className=' text-black'>Flux</h3>
          <div className={styles.post}>Post: Découvrez cette magnifique plage cachée</div>
          <div className={styles.post}>Post: Nouvelle recette de poisson grillé, style caribéen </div>
          <div className={styles.post}>Post: Retour sur le festival de musique de Port-au-Prince 🎶🎉</div>
          <div className={styles.post}>Post: Les meilleurs spots de plongée en Haïti 🌊🐠</div>
          <div className={styles.post}>Post: Rencontre avec un artiste local et son œuvre inspirante 🎨🖌️</div>
        </main>

        <aside className={styles.rightPanel}>
          <h3>Suggestions</h3>
          <p>Suggestion d&apos;ami: Jean Baptiste</p>
          <p>Suggestion d&apos;ami: Marie Élise</p>
          <p>Suggestion d&apos;ami: Luc François</p>
          <p>Suggestion d&apos;ami: Sophie Laurent</p>
          <p>Suggestion d&apos;ami: Paul Duvalier</p>
        </aside>
      </div>
    </main>
  );
};

export default HomePage;
