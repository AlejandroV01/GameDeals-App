import axios from 'axios'
import TooltipSlider from 'rc-slider'
import 'rc-slider/assets/index.css'
import React, { useState } from 'react'
import { Dropdown } from 'rsuite'
import SideNav from '../../components/SideNav/SideNav'
import FilterBar from './components/FilterBar'
import FilteredDeals from './components/FilteredDeals'
import styles from './Search.module.css'
const Search = ({ title, lowerPrice, discount, stores, review }) => {
  const [sortTitle, setSortTitle] = useState('Lowest Price')

  const handleSelect = newVal => {
    setSortTitle(newVal)
  }
  const [allDeals, setAllDeals] = useState(null)

  const handleSearch = () => {
    console.log(lowerPrice)
    // axios.get(`https://www.cheapshark.com/api/1.0/deals?metacritic=60&steamRating=70&sortBy=recent&lowerPrice`).then(response => {
    //   setAllDeals(response.data)
    //   let newArr = []

    //   for (let i = 0; i < response.data.length; i++) {
    //     let isDup = false
    //     if (newArr.length > 0) {
    //       for (let j = 0; j < newArr.length; j++) {
    //         if (response.data[i].internalName === newArr[j].internalName) {
    //           isDup = true
    //           break
    //         }
    //       }
    //       if (isDup === false) {
    //         newArr.push(response.data[i])
    //       }
    //     } else {
    //       newArr.push(response.data[i])
    //     }
    //   }
    //   setAllDeals(newArr)
    //   console.log(newArr)
    // })
  }
  return (
    <div className={styles.container}>
      <SideNav></SideNav>
      <div className={styles.mainStack}>
        <h1>Search game deals</h1>
        <hr />
        <FilterBar
          titleVal={title}
          lowerPriceVal={lowerPrice}
          discountVal={discount}
          storesVal={stores}
          reviewVal={review}
          handleSearch={handleSearch}
        />
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
