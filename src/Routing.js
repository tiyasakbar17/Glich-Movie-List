import React, { useState, useMemo, createContext } from 'react'

/* Simple object which we use to set and 
 * identify the pages in our router 
 */
export const pagesMapping = { 
  home: "home",
  detail: "detail"
}

export const RoutingContext = createContext({ page: pagesMapping.home })

export default function Router({ children }) {

  /* Read the urlPath, e.g. '/about' or '/' */
  let urlPath = window.location.pathname.slice(1).toLowerCase()

  /* Set the default page to Home if not specified otherwise in the URL */
  const [page, setPage] = useState(urlPath || pagesMapping.home)
  
  const [detail, setDetail] = useState(862)

  const value = useMemo(
    () => ({ page, setPage, detail, setDetail }), 
    [page, setPage, detail, setDetail]
  )
  
  return (
    <RoutingContext.Provider value={value}>
      {children}
    </RoutingContext.Provider>
  )
}