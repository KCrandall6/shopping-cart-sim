import { useState, useEffect } from 'react'

function useFetchFruits() {
  const [allFruits, setAllFruits] = useState([]);

  useEffect(() => {
    fetch('data/fruits.json')
    .then((res) => res.json())
    .then((res) => setAllFruits(res.fruits))
  }, [])
  
  return allFruits;
}

export default useFetchFruits