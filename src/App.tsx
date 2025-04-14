import { DashBoard } from './pages/Dashboard'
import { Signin } from './pages/Signin'
import { Signup } from './pages/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

 return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/DashBoard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
