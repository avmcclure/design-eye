import React from "react"
import Page from "../components/page"
import Header from "../components/header"
import Summary from "../components/summary"
import EarlyLife from "../components/early-life"
import USAF from "../components/usaf"
import Breakthrough from "../components/breakthrough"
import MainstreamSuccess from "../components/mainstream-success"
import "./3.scss"

const ThirdPage = () => (
  <Page pageNumber={3} description="Micro Spacing">
    <section>
      <div className="container">
        <Header />
      </div>
    </section>
    <section>
      <div className="container">
        <Summary />
      </div>
    </section>
    <section>
      <div className="container">
        <EarlyLife />
      </div>
    </section>
    <section>
      <div className="container">
        <USAF />
      </div>
    </section>
    <section>
      <div className="container">
        <Breakthrough />
      </div>
    </section>
    <section>
      <div className="container">
        <MainstreamSuccess />
      </div>
    </section>
  </Page>
)

export default ThirdPage
