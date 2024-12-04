import './style.css'
import { useFacts } from './hooks/useFacts'
import { useEffect, useState } from 'react'

export const App = () => {
  const { api, count, handleAdd } = useFacts()
  const [name, setName] = useState('')
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${count}/`)
      .then((res) => res.json())
      .then((data) => setName(data.name))
  }, [count])
  return (
    <div>
      <h1 className='title'> Aprendiendo God {count}</h1>
      {api && <p> {api}</p>}
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${count}.png`} alt={name} />
      <p className='namePoke'>{name.toUpperCase()}</p>
      <button onClick={handleAdd}>+</button>
    </div>
  )
}
