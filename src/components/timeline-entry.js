import React from "react"
import "./timeline-entry.scss"

export default function TimelineEntry(props) {
  const { align, image, date } = props

  if (align === "right") {
    return (
      <div className={`timeline-entry ${align}`}>
        <div className="description">
          <span>{props.children}</span>
        </div>
        <div className="image-wrapper">
          <div
            className="image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="date">
          <h3>{date}</h3>
        </div>
      </div>
    )
  }

  return (
    <div className={`timeline-entry ${align}`}>
      <div className="date">
        <h3>{date}</h3>
      </div>
      <div className="image-wrapper">
        <div
          className="image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="description">
        <span>{props.children}</span>
      </div>
    </div>
  )
}
