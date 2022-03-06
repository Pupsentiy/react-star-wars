import React from 'react'
import styles from './App.module.css';
import { getApiResource } from '../../utils/network'  // экспорт не подефолту 

// getApiResource();

const App = () => {
  return(
    <h1 className={styles.header}>Hello</h1>
  )
}

export default App;
