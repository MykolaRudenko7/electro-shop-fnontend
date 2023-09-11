'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { colorChoiceButtonsData } from 'data/about-product/productChoiceData'
import styles from 'components/AboutProductPage/ProductChoiceSection/ColorChoice/ColorChoice.module.scss'

export default function ColorChoice() {
  const [selectedElement, setSelectedElement] = useState(null)

  const handleSelectElement = (element) => {
    setSelectedElement(element)
  }

  return (
    <div className={styles.buttons}>
      {colorChoiceButtonsData.map(({ id, className }) => (
        <button
          aria-label="select product color"
          className={cn(styles.colorChoiceButton, styles[className], {
            [styles.selected]: selectedElement === id,
          })}
          key={uuidv4()}
          onClick={() => handleSelectElement(id)}
          type="button"
        />
      ))}
    </div>
  )
}
