import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<h1>HolaMundo</h1>}/>
</Routes>
<Footer/>
</BrowserRouter>

  )
}

export default App
