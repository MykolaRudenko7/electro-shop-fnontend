'use client'

import { useState } from 'react'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import styles from 'components/ShoppingCartPage/OrderSummary/ShippingArea/ShippingArea.module.scss'

export default function ShippingArea() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedZipCode, setSelectedZipCode] = useState('')
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('standardRate')

  return (
    <form className={styles.shippingArea}>
      <div className={styles.block}>
        <label className={styles.title} htmlFor="country">
          Country
        </label>
        <CountryDropdown
          classes="dropdown"
          id="country"
          onChange={(val) => setSelectedCountry(val)}
          value={selectedCountry}
        />
      </div>
      <div className={styles.block}>
        <label className={styles.title} htmlFor="state">
          State/Province
        </label>
        <RegionDropdown
          classes="dropdown"
          country={selectedCountry}
          id="state"
          onChange={(val) => setSelectedState(val)}
          value={selectedState}
        />
      </div>
      <div className={styles.block}>
        <label className={styles.title} htmlFor="zip">
          Zip/Postal Code
        </label>
        <input
          className={styles.postalInput}
          id="zip"
          name="zip"
          onChange={(e) => setSelectedZipCode(e.target.value)}
          placeholder="Enter ZIP code"
          type="text"
          value={selectedZipCode}
        />
      </div>
      <div className={styles.blockRadioInput}>
        <p className={styles.radioInputTitle}>Standard Rate</p>
        <div className={styles.radioInputWrapper}>
          <input
            checked={selectedShippingMethod === 'standardRate'}
            className={styles.inputRadio}
            id="standardRate"
            name="shippingMethod"
            onChange={() => setSelectedShippingMethod('standardRate')}
            type="radio"
            value="standardRate"
          />
          <label className={styles.radioInputText} htmlFor="standardRate">
            Price may vary depending on the item/destination. Shop Staff will contact you. $21.00{' '}
          </label>
        </div>
      </div>
      <div className={styles.blockRadioInput}>
        <p className={styles.radioInputTitle}>Pickup from store</p>
        <div className={styles.radioInputWrapper}>
          <input
            checked={selectedShippingMethod === 'pickupFromStore'}
            className={styles.inputRadio}
            id="pickupFromStore"
            name="shippingMethod"
            onChange={() => setSelectedShippingMethod('pickupFromStore')}
            type="radio"
            value="pickupFromStore"
          />
          <label className={styles.radioInputText} htmlFor="pickupFromStore">
            1234 Street Address, City Address, 1234
          </label>
        </div>
      </div>
    </form>
  )
}
