import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SmallPost.module.css'



export function SmallPost() {
  
    

  return (
    <div className={styles.container}>
        <h2>What’s the most important bit of advice you would give your eighteen year old self?</h2>
        <h4>Up-votes: 35436</h4> 
        
        <ul>
            <li>Post by: </li>
            <li>7 hours ago</li>
            <li>737 comments</li>
        </ul>
    </div>
  );
}
