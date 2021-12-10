import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { CountryInfo } from "./pages/CountryInfo"
import { MainContent } from "./pages/MainContent"
import { FilterByRegion } from "./pages/FilterByRegion"

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<MainContent />}/>
            <Route path="/country/:name" element={<CountryInfo />}/>
            <Route path="/initialPage/:region" element={<FilterByRegion />}/>
        </Routes>
    )
}