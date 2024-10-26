
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navber from './Components/Navber/Navber'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Help from './Pages/Help'
import Home from './Pages/Home'
import Notfound from './NotFound/Notfound'

function App() {
  
const myRout = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element = {<Home/>}/>
      <Route path='/About' element= {<About/>}/>
      <Route path='/Blog' element ={<Blog/>}/>
      <Route path='/Help' element ={<Help/>}/>
      <Route path='*' element ={<Notfound/>}/>
    </Route>
  )
)

  return (
    <>
<Navber />
<RouterProvider router={myRout}/>
<Footer/>
    </>
  )
}

export default App
