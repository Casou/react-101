import {useEffect, useState} from "react";

export const FetchStatus = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
}

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState(FetchStatus.PENDING)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    // Adding a timeout to see the loading part in the UI (simulate a long API call)
    setTimeout(() => {
      fetch(url)
        .then(r => {
          if (!r.ok) {
            throw new Error(r.statusText);
          }
          return r.json();
        })
        .then(d => {
          setData(d)
          setStatus(FetchStatus.SUCCESS)
        })
        .catch(e => {
          setStatus(FetchStatus.ERROR)
          setErrorMessage(e.message)
        })
    }, 1500)
  }, [])

  return { status, data, errorMessage }
}

export default useFetch