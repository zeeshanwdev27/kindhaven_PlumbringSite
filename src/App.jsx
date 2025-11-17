import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"

const Home = React.lazy(()=> import('./pages/Home/Home.jsx'))
const RefundPolicy = React.lazy(()=> import('./pages/RefundPolicy/RefundPolicy.jsx'))
const AboutUs = React.lazy(()=> import('./pages/AboutUs/AboutUs.jsx'))
const Services = React.lazy(()=> import('./pages/Services/Services.jsx'))
const Contact = React.lazy(()=> import('./pages/Contact/Contact.jsx'))
const PrivacyPolicy = React.lazy(()=> import('./pages/PrivacyPolicy/PrivacyPolicy.jsx'))


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </>
  )
)

export default App