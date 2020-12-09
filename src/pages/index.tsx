import React from 'react';
import { history } from 'umi';

import styles from './index.less';

export default (props) => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button
        onClick={() => {
          history.push('/loginin');
        }}>
        Jump login in
      </button>
      <button
        onClick={() => {
          history.push('/loginUp');
        }}>
        Jump login up
      </button>
      <button
        onClick={() => {
          history.push('/home');
        }}>
        Jump Home
      </button>
    </div>
  );
};
