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
const reviewData = ['At least 40%', 'At least 50%', 'At least 60%', 'At least 70%', 'At least 80%', 'Greater than 80%'].map((item, index) => ({
  label: item,
  value: index,
}))

const FilterBar = ({ handleSearch }) => {
  const [lowerPrice, setLowerPrice] = useState('50')
  const [stores, setStores] = useState('')

  const handlePriceChange = value => {
    switch (value) {
      case null:
        setLowerPrice('50')
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
  return (
    <Stack divider={<Divider vertical />}>
      <InputGroup size='md' style={{ width: 224 }}>
        <Input placeholder='Search'></Input>
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      <InputPicker data={priceData} style={{ width: 175 }} placeholder='Price' onChange={value => handlePriceChange(value)} />
      <InputPicker data={discountData} style={{ width: 175 }} placeholder='Discount' />
      <TagPicker data={storeData} style={{ width: 175 }} placeholder='Stores' />
      <InputPicker data={reviewData} style={{ width: 175 }} placeholder='Discount' />
      <Button
        appearance='primary'
        onClick={() => {
          console.log(lowerPrice)
          handleSearch(lowerPrice)
        }}
      >
        Search
      </Button>
    </Stack>
  )
}

export default FilterBar
