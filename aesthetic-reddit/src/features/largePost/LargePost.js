import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './LargePost.module.css'
import cat from './cat.jpg'

export function LargePost() {
  
    

  return (
    <div className={styles.container}> 
        <h1>Will there be another lockdown before Christmas as omicron cases rise?</h1>
        <h4>Up-votes: 35436</h4> 
        <img src={cat} width="200"/>
        <ul>
            <li>Post by: </li>
            <li>7 hours ago</li>
            <li>737 comments</li>
        </ul>
    </div>
    
  );
}
