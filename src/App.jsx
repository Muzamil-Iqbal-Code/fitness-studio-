import Header from './components/Header'
import Hero from './components/Hero'
import Classes from './components/Classes'
import Trainers from './components/Trainers'
import Membership from './components/Membership'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Classes />
        <Trainers />
        <Membership />
      </main>
      <Footer />
    </>
  )
}

export default App