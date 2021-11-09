import { useEffect, useState } from "react"

export default function useSearchParams(defaultParams, params) {
  const [searchParams, setSearchParams] = useState({...defaultParams, ...params})

  useEffect(() => {
    setSearchParams({...defaultParams, ...params})
  }, [params])
 
  function toQueryString(params) {
    const newParams = {}
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value) ? value.length : value) newParams[key] = value
    })
    const searchParams = new URLSearchParams(newParams)
    return searchParams.toString()
  }
  
  return {
    searchParams,
    toQueryString
  }
}
