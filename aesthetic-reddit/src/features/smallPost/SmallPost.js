import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SmallPost.module.css'



export function SmallPost() {
  
    

  return (
    <div className={styles.container}>
        <h1>This is a Small Post</h1>
    </div>
  );
}
