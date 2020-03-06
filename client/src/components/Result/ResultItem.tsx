import React from 'react';

import styles from './ResultItem.module.css';

class ResultItem extends React.Component {

  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.icon} src="assets/gmail.png" alt="gmail"></img>
          <span className={styles.title}>Important Email</span>
        </div>
        <p className={styles.snippet}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    );
  }
}

export default ResultItem;


