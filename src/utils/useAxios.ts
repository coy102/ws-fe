import axios from 'axios'
import { useCallback, useEffect, useRef } from 'react'
import { useImmer } from 'use-immer'

const useAxios = (url: string) => {
  const isCurrent = useRef(true)
  const [state, setState] = useImmer({ data: null, loading: true })

  const refetch = useCallback((param = '') => {
    axios.get(url + param).then((resp: any) => {
      if (isCurrent.current) {
        setState((prev) => {
          prev.data = resp.data
          prev.loading = false
        })
      }
    })
  }, [])

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false
    }
  }, [])

  useEffect(() => {
    setState((prev) => {
      prev.loading = true
    })

    refetch()
  }, [url])

  return { data: state.data, setData: setState, refetch }
}

export default useAxios
