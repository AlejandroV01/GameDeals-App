import React from 'react'
import SideNav from '../../components/SideNav/SideNav'
import FilterBar from './components/FilterBar'
import styles from './Search.module.css'
const Search = ({ price, discount, time, store, reviews, title, dealRating }) => {
  return (
    <div className={styles.container}>
      <SideNav></SideNav>
      <div>
        <h1>Search game deals</h1>
        <FilterBar />
      </div>
    </div>
  )
}

export default Search
