import axios from 'axios'
import TooltipSlider from 'rc-slider'
import 'rc-slider/assets/index.css'
import React, { useState } from 'react'
import { Dropdown } from 'rsuite'
import SideNav from '../../components/SideNav/SideNav'
import FilterBar from './components/FilterBar'
import FilteredDeals from './components/FilteredDeals'
import styles from './Search.module.css'
const Search = () => {
  const [sortTitle, setSortTitle] = useState('Lowest Price')

  const handleSelect = newVal => {
    setSortTitle(newVal)
  }
  const [allDeals, setAllDeals] = useState(null)

  const handleSearch = ({ title, lowerPrice, discount, stores, review }) => {
    console.log(stores)
    let newStoreArr = []
    if (stores !== null) {
      for (let i = 0; i < stores.length; i++) {
        newStoreArr.push(i + 1)
      }
    }
    let storeList = newStoreArr.toString()
    let fetchLink = `https://www.cheapshark.com/api/1.0/deals?metacritic=60&sortBy=recent`
    console.log(stores)
    if (lowerPrice !== null) {
      fetchLink = fetchLink.concat(`&lowerPrice=${lowerPrice}`)
    }
    if (stores !== null) {
      fetchLink = fetchLink.concat(`&storeID=${storeList}`)
    }
    if (review !== null) {
      fetchLink = fetchLink.concat(`&steamRating=${review}`)
    }
    if (title.length > 0) {
      fetchLink = fetchLink.concat(`&title=${title}`)
    }
    console.log(fetchLink)
    axios.get(fetchLink).then(response => {
      setAllDeals(response.data)
      let newArr = []

      for (let i = 0; i < response.data.length; i++) {
        let isDup = false
        if (newArr.length > 0) {
          for (let j = 0; j < newArr.length; j++) {
            if (response.data[i].internalName === newArr[j].internalName) {
              isDup = true
              break
            }
          }
          if (isDup === false) {
            newArr.push(response.data[i])
          }
        } else {
          newArr.push(response.data[i])
        }
      }

      if (discount !== null) {
        let dealArr = []
        for (let i = 0; i < allDeals.length; i++) {
          if (allDeals[i].savings >= discount) {
            dealArr.push(allDeals[i])
          }
        }
        console.log(dealArr)
        setAllDeals(dealArr)
      } else {
        console.log(newArr)
        setAllDeals(newArr)
      }
    })
  }
  return (
    <div className={styles.container}>
      <SideNav></SideNav>
      <div className={styles.mainStack}>
        <h1>Search game deals</h1>
        <hr />
        <FilterBar handleSearch={handleSearch} />
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
        <FilteredDeals allDeals={allDeals}></FilteredDeals>
      </div>
    </div>
  )
}

export default Search
