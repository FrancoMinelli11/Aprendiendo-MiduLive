import { useState, useEffect } from 'react'
export const useFacts = () => {
  const [count, setCount] = useState(1)
  const API_URL = `https://dogapi.dog/api/v2/facts?limit=${count}`
  const [api, setApi] = useState()
  const handleAdd = () => {
    setCount(Math.floor(Math.random() * 1025))
  }
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          const fact = data.data.map((item) => item.attributes.body).join('')
          const firstFourWords = fact.split(' ').slice(0, 4).join(' ')
          console.log(firstFourWords)
          setApi(fact)
        } else {
          setApi(data.data.body)
        }
      }).catch((error) => console.log(error))
  }, [count])
  return { api, count, handleAdd }
}


