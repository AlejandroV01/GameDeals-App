import React from 'react'
import styles from './FilteredDeals.module.css'
const FilteredDeals = () => {
  return (
    <div className={styles.allCards}>
      <div className={styles.card}>
        <a target='_blank' rel='noreferrer' href={`https://google.com`} className={styles.moreA}>
          {}
        </a>
        <img className={styles.cardImage} src='https://cdn.akamai.steamstatic.com/steam/apps/703080/header.jpg' alt='' />
        <div className={styles.informationAndStoreDiv}>
          <div className={styles.informationSlot}>
            <div>
              <h3>Planet Zoo</h3>
              <p className={styles.pColor}>58m ago</p>
            </div>
            <div className={styles.priceSlot}>
              <h3>$7.99</h3>
              <p className={styles.pColor}>59% off</p>
            </div>
          </div>
          <div className={styles.imageSlot}>
            <img className={styles.storeImage} src='https://www.cheapshark.com/img/stores/logos/0.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilteredDeals
