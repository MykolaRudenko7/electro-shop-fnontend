'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import { colorChoiceButtonsData } from 'data/productChoiceData'
import styles from 'components/AboutProductPage/ProductChoice/ColorChoice/ColorChoice.module.scss'

export default function ColorChoice() {
  const [selectedElement, setSelectedElement] = useState(null)
  const handleSelectElement = (element) => {
    setSelectedElement(element)
  }

  return (
    <div className={styles.buttons}>
      {colorChoiceButtonsData.map(({ id, className }) => (
        <button
          type="button"
          aria-label="select product color"
          key={uuidv4()}
          onClick={() => handleSelectElement(id)}
          className={classNames(styles.colorChoiceButton, styles[className], {
            [styles.selected]: selectedElement === id,
          })}
        />
      ))}
    </div>
  )
}
