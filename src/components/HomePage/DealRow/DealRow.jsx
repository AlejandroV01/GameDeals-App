import MoreIcon from '@rsuite/icons/More'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Stack } from 'rsuite'
import styles from './DealRow.module.css'
const DealRow = ({ cheapSharkUrl }) => {
  const [allDeals, setAllDeals] = useState(null)

  useEffect(() => {
    axios.get(cheapSharkUrl).then(response => {
      setAllDeals(response.data)
      let newArr = []
      if (cheapSharkUrl === 'https://www.cheapshark.com/api/1.0/deals?pageSize=15&metacritic=60&steamRating=70') {
        console.log(response.data)
      }
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
      newArr = newArr.splice(0, 5)

      setAllDeals(newArr)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const LoadGames = () => {
    const elements = []
    for (let i = 0; i < 5; i++) {
      elements.push(
        <div className={styles.card} key={i}>
          <div className={styles.leftSide}></div>
          <div className={styles.rightSide}>
            <Stack>
              <div className={styles.dealText}>
                <span></span>
              </div>
              <div></div>
              <div className={`${styles.dealText}`}></div>
            </Stack>
          </div>
        </div>
      )
    }
    return elements
  }
  return (
    <div className={styles.dealRow}>
      {allDeals ? (
        allDeals.map((deal, index) => (
          <div className={styles.card} key={index}>
            <a target='_blank' rel='noreferrer' href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`} className={styles.moreA}>
              {}
            </a>
            <div className={styles.leftSide}>
              <img
                className={styles.headerImage}
                src={deal.steamAppID ? `https://cdn.akamai.steamstatic.com/steam/apps/${deal.steamAppID}/header.jpg` : `${deal.thumb}`}
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
                  {deal.salePrice > 0 ? <span>${deal.salePrice}</span> : <span>FREE</span>}
                </div>
              </Stack>
            </div>
          </div>
        ))
      ) : (
        <LoadGames></LoadGames>
      )}
      <div className={`${styles.card} ${styles.moreCard}`}>
        <Link to='/search' className={styles.moreA}></Link>
        <div className={styles.moreDiv}>
          <h4>Browse All Deals</h4>
          <MoreIcon style={{ fontSize: '5em' }}></MoreIcon>
        </div>
      </div>
    </div>
  )
}

export default DealRow
