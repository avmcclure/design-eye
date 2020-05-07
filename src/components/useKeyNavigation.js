import { useState, useEffect, useCallback } from "react"

export default function useKeyNavigation() {
  const [currentPage, setCurrentPage] = useState(0)

  const keydownListener = useCallback(
    keydownEvent => {
      const { key, repeat } = keydownEvent
      if (repeat) return

      if (key === "ArrowUp") {
        if (currentPage === 0) return
        setCurrentPage(currentPage - 1)
      }

      if (key === "ArrowDown") {
        if (currentPage === 19) return
        setCurrentPage(currentPage + 1)
      }
      
      const path = window.location.pathname;
      console.log(path)
      const pathDigit = Number(path.replace("/", ""));
      if (key === "ArrowLeft") {
          if(pathDigit === 1) return
          window.location.href = `/${pathDigit-1}`;
      }

      if (key === "ArrowRight") {
        if(pathDigit === 8) return
        window.location.href = `/${pathDigit+1}`;
      }
    },
    [currentPage]
  )

  useEffect(() => {
    window.addEventListener("keydown", keydownListener, true)
    return () => window.removeEventListener("keydown", keydownListener, true)
  }, [keydownListener])

  return [currentPage, setCurrentPage];
}
