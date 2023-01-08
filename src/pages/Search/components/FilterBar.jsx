import SearchIcon from '@rsuite/icons/Search'
import React, { useState } from 'react'
import { Button, Divider, Input, InputGroup, InputPicker, Stack, TagPicker } from 'rsuite'
import styles from './FilterBar.module.css'
const priceData = ['Under $2', 'Under $5', 'Under $10', 'Under $15', 'Under $20', 'Under $30', 'Above $30'].map((item, index) => ({
  label: item,
  value: index,
}))
const discountData = ['At least 50%', 'At least 60%', 'At least 75%', 'At least 80%', 'At least 90%', 'Greater than 90%'].map((item, index) => ({
  label: item,
  value: index,
}))
const storeData = [
  'Steam',
  'GamersGate',
  'GreenManGaming',
  'Amazon',
  'GameStop',
  'Direct2Drive',
  'GoG',
  'Origin',
  'Get Games',
  'Shiny Loot',
  'Humble Store',
  'Desura',
  'Uplay',
  'IndieGameStand',
  'Fanatical',
  'Gamesrocket',
  'Games Republic',
  'SilaGames',
  'Playfield',
  'ImperialGames',
  'WinGameStore',
  'FunStockDigital',
  'GameBillet',
  'Voidu',
].map((item, index) => ({
  label: item,
  value: index,
}))
const reviewData = ['At least 40%', 'At least 50%', 'At least 60%', 'At least 70%', 'At least 80%'].map((item, index) => ({
  label: item,
  value: index,
}))

const FilterBar = ({ handleSearch }) => {
  const [title, setTitle] = useState('')
  const [lowerPrice, setLowerPrice] = useState(null)
  const [discount, setDiscount] = useState(null)
  const [stores, setStores] = useState(null)
  const [review, setReview] = useState(null)
  const handlePriceChange = value => {
    switch (value) {
      case null:
        setLowerPrice(null)
        break
      case 0:
        setLowerPrice('2')
        break
      case 1:
        setLowerPrice('5')
        break
      case 2:
        setLowerPrice('10')
        break
      case 3:
        setLowerPrice('15')
        break
      case 4:
        setLowerPrice('20')
        break
      case 5:
        setLowerPrice('30')
        break
      case 6:
        setLowerPrice('120')
        break
      default:
        console.log('error in handlePriceChange')
    }
  }

  const handleDiscountChange = value => {
    switch (value) {
      case null:
        setDiscount(null)
        break
      case 0:
        setDiscount('50')
        break
      case 1:
        setDiscount('60')
        break
      case 2:
        setDiscount('75')
        break
      case 3:
        setDiscount('80')
        break
      case 4:
        setDiscount('90')
        break
      default:
        console.log('error in handlePriceChange')
    }
  }

  const handleStoreChange = value => {
    if (value === null) {
      setStores(null)
    } else {
      setStores(value)
    }
  }

  const handleReviewChange = value => {
    switch (value) {
      case null:
        setReview(null)
        break
      case 0:
        setReview('40')
        break
      case 1:
        setReview('50')
        break
      case 2:
        setReview('60')
        break
      case 3:
        setReview('70')
        break
      case 4:
        setReview('80')
        break
      case 5:
        setReview('100')
        break
      default:
        console.log('error in handlePriceChange')
    }
  }
  const handleTitleChange = event => {
    setTitle(event.target.value)
  }
  return (
    <Stack divider={<Divider vertical />}>
      <InputGroup size='md' style={{ width: 224 }} value={title} onChange={handleTitleChange}>
        <Input placeholder='Search'></Input>
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      <InputPicker data={priceData} style={{ width: 175 }} placeholder='Price' onChange={value => handlePriceChange(value)} />
      <InputPicker data={discountData} style={{ width: 175 }} placeholder='Discount' onChange={value => handleDiscountChange(value)} />
      <TagPicker data={storeData} style={{ width: 175 }} placeholder='Stores' onChange={value => handleStoreChange(value)} />
      <InputPicker data={reviewData} style={{ width: 175 }} placeholder='Review' onChange={value => handleReviewChange(value)} />
      <Button
        appearance='primary'
        onClick={() => {
          handleSearch({ title, lowerPrice, discount, stores, review })
        }}
      >
        Search
      </Button>
    </Stack>
  )
}

export default FilterBar
