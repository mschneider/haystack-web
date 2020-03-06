import React from 'react';

import ResultItem from './ResultItem';
import styles from './Result.module.css';


class Result extends React.Component {
  public render() {
    return (
      <section className={styles.container}>
        <div className={styles.column}>
          <ResultItem />
          <ResultItem />
          <ResultItem />
        </div>

        <div className={styles.column}>
          <ResultItem />
          <ResultItem />
          <ResultItem />
        </div>

        <div className={styles.column}>
          <ResultItem />
          <ResultItem />
        </div>
      </section>
    );
  }
}

export { Result };
