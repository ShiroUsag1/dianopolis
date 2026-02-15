"use client"

import { useState } from "react"
import styles from "./CardHover.module.css"

export default function CardHover({ imgDefault, imgHover }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`${styles.card} ${hovered ? styles.zoom : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={imgDefault}
        alt="Imagem padrão"
        className={`${styles.image} ${hovered ? styles.hide : ""}`}
      />

      <img
        src={imgHover}
        alt="Imagem hover"
        className={`${styles.imageHover} ${hovered ? styles.show : ""}`}
      />
    </div>
  )
}
