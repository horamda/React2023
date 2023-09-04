import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Productos from './components/Productos'

function App() {
  

  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Productos/>}/>
</Routes>
<Footer/>
</BrowserRouter>

  )
}

export default App
