import { useEffect, useState } from "react"

export default function useSearchParams(query) {
  const [searchParams, setSearchParams] = useState(query)

  useEffect(() => {
    setSearchParams(query)
  }, [query])
 
  function getSearchParams(query) {
    const newQuery = {}
    Object.entries(query).forEach(([key, value]) => {
      if (Array.isArray(value) ? value.length : value) newQuery[key] = value
    })
    const searchParams = new URLSearchParams(newQuery)
    return searchParams.toString()
  }

  return {
    searchParams,
    getSearchParams
  }
}
