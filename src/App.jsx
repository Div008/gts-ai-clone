import Header from './components/Header'
import Hero from './components/Hero'
import YearsSection from './components/YearsSection'
import AudioServices from './components/AudioServices'
import AIImpact from './components/AIImpact'
import DatasetsSection from './components/DatasetsSection'
import RemoteOpportunities from './components/RemoteOpportunities'
import DataAccuracy from './components/DataAccuracy'
import CTABanner from './components/CTABanner'
import WhyUs from './components/WhyUs'
import BlogSection from './components/BlogSection'
import CTADiscussion from './components/CTADiscussion'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <YearsSection />
      <AudioServices />
      <AIImpact />
      <DatasetsSection />
      <RemoteOpportunities />
      <DataAccuracy />
      <CTABanner />
      <WhyUs />
      <BlogSection />
      <CTADiscussion />
      <Footer />
    </div>
  )
}

export default App