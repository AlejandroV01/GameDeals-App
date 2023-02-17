import axios from 'axios'
import TooltipSlider from 'rc-slider'
import 'rc-slider/assets/index.css'
import React, { useEffect, useState } from 'react'
import { AiOutlineFire } from 'react-icons/ai'
import { Dropdown } from 'rsuite'
import SideNav from '../../components/SideNav/SideNav'
import FilterBar from './components/FilterBar'
import FilteredDeals from './components/FilteredDeals'
import styles from './Search.module.css'
const Search = () => {
  useEffect(() => {
    axios.get(`https://www.cheapshark.com/api/1.0/deals?metacritic=60`).then(response => {
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
      setAllDeals(newArr)
    })
  }, [])
  const [sortTitle, setSortTitle] = useState('Lowest Price')
  const handleSelect = newVal => {
    setSortTitle(newVal)
  }
  const [allDeals, setAllDeals] = useState(null)
  const [slideRating, setSlideRating] = useState(5)
  const handleSearch = ({ title, lowerPrice, discount, stores, review }) => {
    let slideDealRating = Math.abs(slideRating - 10)

    let newStoreArr = []
    if (stores !== null && stores.length !== 0) {
      for (let i = 0; i < stores.length; i++) {
        newStoreArr.push(stores[i] + 1)
      }
    }
    let storeList = newStoreArr.toString()
    let fetchLink = `https://www.cheapshark.com/api/1.0/deals?metacritic=60&sortBy=recent`
    console.log(stores)
    console.log(
      'Title: ' + title,
      'lowerPrice: ' + lowerPrice,
      'discount: ' + discount,
      'stores: ' + storeList,
      'review: ' + review,
      'sortTitle: ' + sortTitle,
      'slideRating: ' + slideDealRating
    )
    if (lowerPrice !== null) {
      fetchLink = fetchLink.concat(`&upperPrice=${lowerPrice}`)
    }
    if (newStoreArr.length > 0) {
      fetchLink = fetchLink.concat(`&storeID=${storeList}`)
    }
    if (review !== null) {
      fetchLink = fetchLink.concat(`&steamRating=${review}`)
    }
    if (title.length > 0) {
      fetchLink = fetchLink.concat(`&title=${title}`)
    }
    if (sortTitle.length !== null) {
      if (sortTitle === 'Highest Price' || sortTitle === 'Lowest Price') {
        fetchLink = fetchLink.concat(`&sortBy=Price`)
      } else {
        fetchLink = fetchLink.concat(`&sortBy=${sortTitle}`)
      }
    }

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
      if (sortTitle === 'Highest Price') {
        newArr.reverse()
      }
      let newerArr = []
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].dealRating >= slideDealRating) {
          newerArr.push(newArr[i])
        }
      }
      setAllDeals(newerArr)
      console.log(discount)
      if (discount !== null) {
        let dealArr = []
        for (let i = 0; i < allDeals.length; i++) {
          if (allDeals[i].savings >= discount) {
            dealArr.push(allDeals[i])
          }
        }
        console.log(dealArr)
        setAllDeals(dealArr)
      }
      console.log(allDeals)
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
            <span className={styles.whiteText}>Deal Rating:</span>
            <div className={styles.sliderParent}>
              <div
                className={
                  Math.abs(slideRating - 10) >= 8
                    ? styles.hotDealSlider
                    : Math.abs(slideRating - 10) >= 6
                    ? styles.warmDealSlider
                    : styles.neutralDealSlider
                }
              >
                &ge;{Math.abs(slideRating - 10)}
                {Math.abs(slideRating - 10) >= 6 && <AiOutlineFire></AiOutlineFire>}
              </div>
              <TooltipSlider
                className={styles.tooltipSlider}
                min={0}
                max={10}
                reverse
                defaultValue={5}
                value={slideRating}
                onChange={val => setSlideRating(val)}
              />
            </div>
          </div>
          <div className={styles.sortParent}>
            <span className={styles.whiteText}>Sort By: </span>
            <Dropdown title={sortTitle}>
              <Dropdown.Item onSelect={() => handleSelect('Lowest Price')}>Lowest Price</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Highest Price')}>Highest Price</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Savings')}>Discount</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Deal Rating')}>Deal Rating</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Recent')}>Latest Deals</Dropdown.Item>
              <Dropdown.Item onSelect={() => handleSelect('Metacritic')}>Metascore</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <FilteredDeals allDeals={allDeals}></FilteredDeals>
      </div>
    </div>
  )
}

export default Search
