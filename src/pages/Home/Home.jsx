import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'rsuite'
import styles from './Home.module.css'
const Home = () => {
  const [recentDeals, setRecentDeals] = useState(null)
  axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=10&sortBy=recent').then(response => {
    let data = response.data
    setRecentDeals(data)
  })
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Deals.</h2>
        <h3>New Deals</h3>
        <div>
          {recentDeals.map(deal => (
            <div>
              <h4>{deal.title}</h4>
              <Button href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}>Deal</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
