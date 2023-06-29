import { useState } from "react"

export const useCounter = (initialValue = 1) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = (valor) => {
        setCounter(counter+ valor)
    }

    const decrement = () => {
        setCounter(counter- 1)
    }
    const reset = () => {
        setCounter(initialValue)
    }


  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
