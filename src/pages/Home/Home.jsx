import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'rsuite'
import DealRow from '../../components/HomePage/DealRow/DealRow'
import SideNav from '../../components/SideNav/SideNav'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <SideNav></SideNav>
      <div>
        <h3>New Deals</h3>
        <DealRow cheapSharkUrl='https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5&metacritic=60&steamRating=75&sortBy=recent'></DealRow>
        <h3>Best Deals</h3>
        <DealRow cheapSharkUrl='https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5&metacritic=60&steamRating=75&sortBy=Savings'></DealRow>
        <h3>Popular Deals</h3>
        <DealRow cheapSharkUrl='https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5&metacritic=75&steamRating=80&AAA=true'></DealRow>
      </div>
    </div>
  )
}

export default Home
