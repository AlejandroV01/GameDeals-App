import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'rsuite'
import DealRow from '../../components/HomePage/DealRow/DealRow'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Deals.</h2>
        <h3>New Deals</h3>
        <DealRow></DealRow>
        <h3>Best Deals</h3>
        <DealRow cheapSharkUrl='https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=10&sortBy=Savings'></DealRow>
        <h3>Popular Deals</h3>
        <DealRow cheapSharkUrl='https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=10&AAA=true'></DealRow>
      </div>
    </div>
  )
}

export default Home
