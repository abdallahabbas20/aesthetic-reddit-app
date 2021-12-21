import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './LargePost.module.css'


export function LargePost() {
  
    

  return (
    <div className={styles.container}>
        <h1>This is a Large Post</h1>
    </div>
    
  );
}
