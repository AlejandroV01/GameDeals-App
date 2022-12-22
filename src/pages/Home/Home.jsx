import React from 'react'
import DealRow from '../../components/HomePage/DealRow/DealRow'
import SideNav from '../../components/SideNav/SideNav'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <SideNav></SideNav>
      <div>
        <h3>New Deals</h3>
        <DealRow cheapSharkUrl='https://www.cheapshark.com/api/1.0/deals?pageSize=15&metacritic=60&steamRating=70&sortBy=recent'></DealRow>
        <h3>Best Deals</h3>
        <DealRow cheapSharkUrl='https://www.cheapshark.com/api/1.0/deals?pageSize=15&metacritic=60&steamRating=70&sortBy=Savings'></DealRow>
        <h3>Popular Deals</h3>
        <DealRow cheapSharkUrl='https://www.cheapshark.com/api/1.0/deals?pageSize=15&metacritic=60&steamRating=70'></DealRow>
      </div>
    </div>
  )
}

export default Home
