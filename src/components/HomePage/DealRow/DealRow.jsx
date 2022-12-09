import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'rsuite'
import styles from './DealRow.module.css'
const DealRow = ({ cheapSharkUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=10&sortBy=recent' }) => {
  const [recentDeals, setRecentDeals] = useState(null)
  useEffect(() => {
    axios.get(cheapSharkUrl).then(response => {
      setRecentDeals(response.data)
    })
  }, [])
  return (
    <div className={styles.dealRow}>
      {recentDeals &&
        recentDeals.map((deal, index) => (
          <div className={styles.card} key={index}>
            <h4>{deal.title}</h4>
            <img src={deal.thumb} alt='a game img' />
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
            <Button href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}>Deal</Button>
          </div>
        ))}
    </div>
  )
}

export default DealRow
