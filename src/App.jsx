import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import './App.css'

const router = createBrowserRouter([
  { path:"*", element:<Root />},
  { path:"/", element:<Home />},
  { path:"/products", element:<Products />},
  { path:"/about", element:<About />},
  { path:"/contact", element:<Contact />},
])

export default function App(){
  return <RouterProvider router={router} />
} 

function Root(){
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}

