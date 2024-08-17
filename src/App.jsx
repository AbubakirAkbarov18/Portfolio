import './App.scss'
import PreLoader from './Components/PreLoader/PreLoader'
import RouterController from './Pages/RouterController/RouterController'
import Nav from './Components/Nav/Nav'
import Bottom from './Components/Bottom/Bottom'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      {/* <PreLoader /> */}
      <Nav />
      <RouterController />
      <Bottom />
      <Footer/>
    </>
  )
}

export default App
