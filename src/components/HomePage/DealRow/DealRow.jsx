import MoreIcon from '@rsuite/icons/More'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'rsuite'
import styles from './DealRow.module.css'
const DealRow = ({ cheapSharkUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=10&sortBy=recent' }) => {
  const [recentDeals, setRecentDeals] = useState(null)
  useEffect(() => {
    axios.get(cheapSharkUrl).then(response => {
      setRecentDeals(response.data)
      console.log(response.data)
    })
  }, [])
  return (
    <div className={styles.dealRow}>
      {recentDeals &&
        recentDeals.map((deal, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.leftSide}>
              <img
                className={styles.headerImage}
                src={`https://cdn.akamai.steamstatic.com/steam/apps/${deal.steamAppID}/header.jpg`}
                alt='a game img'
              />
            </div>
            <div className={styles.rightSide}>
              <h4 className={styles.gameHeader}>{deal.title}</h4>
              <div className={styles.stickers}>
                <div className={styles.discount}>
                  <p>Savings: {Math.round(deal.savings)}%</p>
                </div>
                <div className={styles.rating}>
                  <p>Rating: {deal.dealRating}</p>
                </div>
              </div>
              <div className={styles.stickers}>
                <div className={styles.discount}>
                  <p>Prev: ${deal.normalPrice}</p>
                </div>
                <div className={styles.rating}>
                  <p>New: ${deal.salePrice}</p>
                </div>
              </div>
              <Button href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`} target='_blank' appearance='primary'>
                Deal
              </Button>
            </div>
          </div>
        ))}
      <div className={`${styles.card} ${styles.moreCard}`}>
        <a href='/' className={styles.moreA}></a>
        <div className={styles.moreDiv}>
          <h4>Browse All Deals</h4>
          <MoreIcon style={{ fontSize: '5em' }}></MoreIcon>
        </div>
      </div>
    </div>
  )
}

export default DealRow
