import React from 'react';
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div>
        <h2 className={styles.notFound}>404 Not Found</h2>
            <p className={styles.notFoundText}>Sorry, the page you are looking for does not exist...</p>
    </div>
  );
};

export default NotFound;