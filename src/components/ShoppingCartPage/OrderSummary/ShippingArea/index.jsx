'use client'

import { useId, useState } from 'react'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import CartService from 'services/cartFormService'
import styles from 'components/ShoppingCartPage/OrderSummary/ShippingArea/ShippingArea.module.scss'

export default function ShippingArea() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedZipCode, setSelectedZipCode] = useState('')
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('standardRate')
  const [statusMessage, setMessage] = useState(' ')

  const shippingFormId = useId()
  const countryInputId = useId()
  const regionInputId = useId()
  const zipInputId = useId()
  const pickupFromStoreCheckboxId = useId()
  const standardRateCheckboxId = useId()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const shippingData = {
      country: selectedCountry,
      state: selectedState,
      zipCode: selectedZipCode,
      shippingMethod: selectedShippingMethod,
    }

    try {
      const response = await CartService.submitCart(shippingData)
      setMessage(response.message)
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <form className={styles.shippingArea} id={shippingFormId} method="POST" onSubmit={handleSubmit}>
      <div className={styles.block}>
        <label className={styles.title} htmlFor={countryInputId}>
          Country
        </label>
        <CountryDropdown
          classes="dropdown"
          id={countryInputId}
          onChange={(val) => setSelectedCountry(val)}
          value={selectedCountry}
        />
      </div>
      <div className={styles.block}>
        <label className={styles.title} htmlFor={regionInputId}>
          State/Province
        </label>
        <RegionDropdown
          classes="dropdown"
          country={selectedCountry}
          id={regionInputId}
          onChange={(val) => setSelectedState(val)}
          value={selectedState}
        />
      </div>
      <div className={styles.block}>
        <label className={styles.title} htmlFor={zipInputId}>
          Zip/Postal Code
        </label>
        <input
          className={styles.postalInput}
          id={zipInputId}
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
            id={standardRateCheckboxId}
            name="shippingMethod"
            onChange={() => setSelectedShippingMethod('standardRate')}
            type="radio"
            value="standardRate"
          />
          <label className={styles.radioInputText} htmlFor={standardRateCheckboxId}>
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
            id={pickupFromStoreCheckboxId}
            name="shippingMethod"
            onChange={() => setSelectedShippingMethod('pickupFromStore')}
            type="radio"
            value="pickupFromStore"
          />
          <label className={styles.radioInputText} htmlFor={pickupFromStoreCheckboxId}>
            1234 Street Address, City Address, 1234
          </label>
        </div>
      </div>
      <button
        aria-label="apply discount"
        className={styles.applyDiscountButton}
        form={shippingFormId}
        type="applyShippingButton"
      >
        Apply Discount
      </button>
      {statusMessage && <p className={styles.errorMessage}>{statusMessage}</p>}
    </form>
  )
}
