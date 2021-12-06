import styles from './_App.module.scss';
import Cover from './components/Cover';

import coverImg from './assets/images/podcast-cover.png';
import episodes from './utilities/episodes';
import EpisodesList from './components/EpisodesList';

function App() {
  const listHeader = "Listen to all the compressed.fm episodes";
  return (
    <div className={styles.wrapper}>
      <Cover img={coverImg} />
      <EpisodesList header={listHeader} episodes={episodes} />
    </div>
  );
}

export default App;
