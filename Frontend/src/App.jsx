import './App.css'
import {Routes,Route} from 'react-router-dom' 
import CreateBook from './components/CreateBook'
import DeleteBook from './components/DeleteBook'
import EditBook from './components/EditBook'
import ShowBook from './components/ShowBook'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
function App() {
 

  return (
    <>
     <Routes>
      <Route path='/user/signup' element={<Signup/>} />
      <Route path='/' element={<Login/>} />
      <Route path="/book/create" element={<CreateBook/>} />
      <Route path="/book/delete/:id" element={<DeleteBook/>} />
      <Route path="/book/edit/:id" element={<EditBook/>} />
      <Route path="/book/details/:id" element={<ShowBook/>} />
      <Route path="/home" element={<Home/>} />
          
     </Routes>
    </>
  )
}

export default App
