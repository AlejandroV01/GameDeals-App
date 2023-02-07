import React from 'react'
import styles from './FilteredDeals.module.css'
const FilteredDeals = ({ allDeals }) => {
  const NoCardsFound = () => {
    if (allDeals) {
      if (allDeals.length === 0) {
        return (
          <div className={styles.noCard}>
            <h3>No Deals Found</h3>
            <p>Try Lowering Your Search Criteria</p>
          </div>
        )
      } else {
        return <></>
      }
    } else {
    }
  }
  return (
    <div className={styles.allCards}>
      {allDeals &&
        allDeals.map((deal, index) => (
          <div className={styles.card} key={index}>
            <a target='_blank' rel='noreferrer' href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`} className={styles.moreA}>
              {}
            </a>
            <img
              className={styles.cardImage}
              src={deal.steamAppID ? `https://cdn.akamai.steamstatic.com/steam/apps/${deal.steamAppID}/header.jpg` : `${deal.thumb}`}
              alt=''
            />
            <div className={styles.informationAndStoreDiv}>
              <div className={styles.informationSlot}>
                <div>
                  <h3>{deal.title}</h3>
                  <p className={styles.pColor}>58m ago</p>
                </div>
                <div className={styles.priceSlot}>
                  <div>
                    {deal.salePrice > 0 ? (
                      <h3 className={`${deal.savings > 65 ? styles.goodDeal : styles.normalDeal} ${styles.dealText}`}>${deal.salePrice}</h3>
                    ) : (
                      <h3 className={styles.goodDeal}>FREE</h3>
                    )}
                  </div>
                  <p className={styles.pColor}>{Math.round(deal.savings)}% Off </p>
                </div>
              </div>
              <div className={styles.imageSlot}>
                <img className={styles.storeImage} src={`https://www.cheapshark.com/img/stores/logos/${deal.storeID - 1}.png`} alt='' />
              </div>
            </div>
          </div>
        ))}
      <NoCardsFound></NoCardsFound>
    </div>
  )
}

export default FilteredDeals
