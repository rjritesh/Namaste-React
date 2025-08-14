import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Browse></Browse>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>



    </BrowserRouter>
  )
}

export default Body