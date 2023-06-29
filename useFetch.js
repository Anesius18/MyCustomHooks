import { useEffect, useState } from "react"

export  const useFetch =  (url) => {
  
   const [state, setState] = useState({
    data: null,
    isLoading: true
   })
   
   const getFetch = async () =>{
    setState({...state, isLoading: true})
    const res = await fetch(url)
    const data = await res.json()
    setState({...state, data, isLoading: false})

   }

   useEffect(() => {
     getFetch()
   }, [url])
   
    return {
       ...state
    }
}