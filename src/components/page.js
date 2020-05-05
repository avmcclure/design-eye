import React, { useEffect } from "react"
import "./normalize.css"
import "./page.scss";

export default function Page(props) {
  const { description, pageNumber, children } = props

  useEffect(() => {
      document.title = description
  }, [description]);

  return (
    <div className={`page-${pageNumber}`}>
      {children}
    </div>
  )
}
