import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import About from './components/About'
import Navbar from './components/Navbar';
import Commitment from './components/Commitment';
import ConsultingApproach from './components/ConsultingApproach';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Organizations from './components/Organizations';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import VisionMission from './components/VisionMission';
import WhyChooseUs from './components/WhyChooseUs';


const App = () => {
  return (
    <div className='bg-gray-200'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/commitment" element={<Commitment />}/>
        <Route path="/consulting-approach" element={<ConsultingApproach />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/footer" element={<Footer />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/organizations" element={<Organizations />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/value-proposition" element={<ValueProposition />}/>
        <Route path="/vision-mission" element={<VisionMission />}/>
        <Route path="/why-choose-us" element={<WhyChooseUs />}/>
      </Routes>
    </div>
  )
}
export default App
