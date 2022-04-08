import { useState, useEffect } from 'react'

interface usePersistedStateProps {
  key: string
  initialState: string
}

function usePersistedState({ key, initialState }: usePersistedStateProps) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
