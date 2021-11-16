import React from 'react';
import { Header } from './sections/Header';
import { FirstScreen } from './sections/FirstScreen';
import { OurServices } from './sections/OurServices';
import { LeadingHealthcareProviders } from './sections/LeadingHealthcareProviders';
import { DownloadApp } from './sections/DownloadApp';
import { Testimonials } from './sections/Testimonials';
import { LatestArticles } from './sections/LatestArticles';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <OurServices />
      <LeadingHealthcareProviders />
      <DownloadApp />
      <Testimonials />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
