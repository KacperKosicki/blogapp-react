import React from 'react';
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div>
      <h2 className={styles.notFound}>404 Not Found</h2>
      <p className={styles.notFoundText}>Przepraszamy, strona której szukasz, nie istnieje...</p>
    </div>
  );
};

export default NotFound;