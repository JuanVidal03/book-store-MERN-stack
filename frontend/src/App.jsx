// import react router DOM
import { Routes, Route } from "react-router-dom"
// import page components
import Home from "./pages/Home.jsx"
import CreateBook from "./pages/CreateBook"
import DeleteBook from "./pages/DeleteBook"
import ShowBooks from "./pages/ShowBooks"
import UpdateBook from "./pages/UpdateBook"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/books/create" element={<CreateBook />}/>
      <Route path="/books/details/:id" element={<ShowBooks />}/>
      <Route path="/books/edit/:id" element={<UpdateBook />}/>
      <Route path="/books/delete/:id" element={<DeleteBook />}/>
    </Routes>
  )
}

export default App
