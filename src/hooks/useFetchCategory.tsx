import { useEffect, useState } from 'react'

function useFetchCategory(categoryId: string | undefined, token: string) {
  const [category, setCategory] = useState('')

  const fetchCategory = async () => {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${categoryId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    if (response.ok) {
      const data = await response.json()
      setCategory(data.name)
    }
  }

  useEffect(() => {
    if (token !== '' && categoryId) {
      fetchCategory()
    }
  }, [categoryId, token])

  return [category]
}

export { useFetchCategory }
