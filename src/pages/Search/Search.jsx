import TooltipSlider from 'rc-slider'
import 'rc-slider/assets/index.css'
import React, { useState } from 'react'
import { Dropdown } from 'rsuite'
import SideNav from '../../components/SideNav/SideNav'
import FilterBar from './components/FilterBar'
import FilteredDeals from './components/FilteredDeals'
import styles from './Search.module.css'
const Search = ({ price, discount, time, store, reviews, title, dealRating }) => {
  const [sortTitle, setSortTitle] = useState('Lowest Price')

  const handleSelect = newVal => {
    setSortTitle(newVal)
  }

  return (
    <div className={styles.container}>
      <SideNav></SideNav>
      <div className={styles.mainStack}>
        <h1>Search game deals</h1>
        <hr />
        <FilterBar />
        <hr />
        <div className={styles.dealAndSortDiv}>
          <div className={styles.dealParent}>
            <span className={styles.whiteText}>Deal Rating</span>
            <TooltipSlider className={styles.tooltipSlider} min={0} max={10} reverse defaultValue={5} />
          </div>
          <div className={styles.sortParent}>
            <span className={styles.whiteText}>Sort By: </span>
            <Dropdown title={sortTitle}>
              <Dropdown.Item onSelect={() => handleSelect('Lowest Price')}>Lowest Price</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Highest Price')}>Highest Price</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Discount')}>Discount</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Deal Rating')}>Deal Rating</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Latest Deals')}>Latest Deals</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Metascore')}>Metascore</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <FilteredDeals></FilteredDeals>
      </div>
    </div>
  )
}

export default Search
