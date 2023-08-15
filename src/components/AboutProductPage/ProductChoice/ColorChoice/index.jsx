'use client'
import classNames from 'classnames'
import styles from 'components/AboutProductPage/ProductChoice/ColorChoice/ColorChoice.module.scss'
import { colorChoiceButtons } from 'data/productChoiceData'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function ColorChoice() {
  const [selectedElement, setSelectedElement] = useState(null)
  const handleSelectElement = (element) => {
    setSelectedElement(element)
  }

  return (
    <div className={styles.buttons}>
      {colorChoiceButtons.map(({ id, className }) => (
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
