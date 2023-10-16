import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Check from './Pages/Check';
import Timerpage from './Pages/Timerpage';
import Home from './Pages/Home';
import AboutUS from './Pages/about';
import Admin from './Pages/Admin';
import TermsPage from './Pages/terms';
import Adashboard from './Pages/Adashboard';
import Privacypolicy from './Pages/PrivacyPolicy';
import ContactUs from './Pages/ContactUs';
import FAQAccordion from './Pages/Faq';
import Scan from './Pages/Scan';
import UserDetails from './Pages/UserDetails';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import rootReducer from './Pages/reducers/chartReducers';
import weather from './Pages/weather';
import { LightProvider } from './Pages/context';
import { DarkModeProvider } from './Pages/context/DarkModeContext';
import BathRoom from './Pages/Gallery Pages/BathRoom';
import BedRoom from './Pages/Gallery Pages/BedRoom';
import DiningRoom from './Pages/Gallery Pages/DiningRoom';
import LivingRoom from './Pages/Gallery Pages/LivingRoom';
import ModularKitchen from './Pages/Gallery Pages/ModularKitchen';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <DarkModeProvider>
        <LightProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Check' element={<Check />} />
            <Route path='/BathRoom' element={<BathRoom />} />
            <Route path='/BedRoom' element={<BedRoom />} />
            <Route path='/DiningRoom' element={<DiningRoom />} />
            <Route path='/LivingRoom' element={<LivingRoom />} />
            <Route path='/ModularKitchen' element={<ModularKitchen />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/about' element={<AboutUS />} />
            <Route path='/about' element={<AboutUS />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/Privacy' element={<Privacypolicy />} />
            <Route path='/terms' element={<TermsPage />} />
            <Route path='/adash' element={<Adashboard />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/faq' element={<FAQAccordion />} />
            <Route path='/scan' element={<Scan />} />
            <Route path='/userdetails' element={<UserDetails />} />
            </Routes>
        </LightProvider>
      </DarkModeProvider>
      </Router>
    </Provider>
  );
};

export default App;
