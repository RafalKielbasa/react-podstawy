import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(url, renders = []) {
  const [response, setResponse] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  function fetchData() {
    setIsLoading(true)
    axios.get(url).then((response) => setResponse(response))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, renders)

  return {
    response,
    isLoading,
  }
}

export default useFetch
