import React from 'react';
import { history } from 'umi';

import styles from './index.less';

export default (props) => {
  const JumpLoginIn = () => {
    history.push('/loginin');
  };

  const JumpLoginUp = () => {
    history.push('/loginUp');
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button onClick={JumpLoginIn}>Jump login in</button>
      <button onClick={JumpLoginUp}>Jump login up</button>
    </div>
  );
};
