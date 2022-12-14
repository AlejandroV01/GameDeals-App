import MoreIcon from '@rsuite/icons/More'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Divider, Stack } from 'rsuite'
import styles from './DealRow.module.css'
const DealRow = ({ cheapSharkUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=10&sortBy=recent' }) => {
  const [allDeals, setAllDeals] = useState(null)

  useEffect(() => {
    axios.get(cheapSharkUrl).then(response => {
      setAllDeals(response.data)
    })
  }, [])
  console.log(allDeals)
  return (
    <div className={styles.dealRow}>
      {allDeals &&
        allDeals.map((deal, index) => (
          <div className={styles.card} key={index}>
            <a target='_blank' rel='noreferrer' href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`} className={styles.moreA}>
              {}
            </a>
            <div className={styles.leftSide}>
              <img
                className={styles.headerImage}
                src={`https://cdn.akamai.steamstatic.com/steam/apps/${deal.steamAppID}/header.jpg`}
                alt='a game img'
              />
            </div>
            <div className={styles.rightSide}>
              <h4 className={styles.gameHeader}>{deal.title}</h4>
              <Stack divider={<Divider vertical />}>
                <div className={styles.dealText}>
                  <span>{Math.round(deal.savings)}% Off </span>
                </div>
                <div>
                  <img className={styles.storeLogo} src={`https://www.cheapshark.com/img/stores/logos/${deal.storeID - 1}.png`} alt='' />
                </div>
                <div className={`${deal.savings > 65 ? styles.goodDeal : styles.normalDeal} ${styles.dealText}`}>
                  <span>${deal.salePrice}</span>
                </div>
              </Stack>
            </div>
          </div>
        ))}
      <div className={`${styles.card} ${styles.moreCard}`}>
        <a href='/' className={styles.moreA}>
          {}
        </a>
        <div className={styles.moreDiv}>
          <h4>Browse All Deals</h4>
          <MoreIcon style={{ fontSize: '5em' }}></MoreIcon>
        </div>
      </div>
    </div>
  )
}

export default DealRow