import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Blog from "./Pages/components/Blog";
import About from "./Pages/About";
import Error404 from "./Pages/Error404";
import AppLayout from "./Pages/AppLayout";
import Review from "./Pages/Review";
import Price from "./Pages/Price";
import Contact from "./Pages/Contact";
import Services from "./Pages/Computers";
import Login from "./Pages/Login";
import Admin from './Pages/components/admin/Admin';
import Info from "./Pages/components/admin/Info";
import AdminBlog from "./Pages/components/admin/AdminBlog";
import Message from "./Pages/components/admin/Message";
import AdminReviews from "./Pages/components/admin/AdminReviews";
import FPriceList from "./Pages/components/FPriceList";
import CorpPrice from "./Pages/components/CorpPrice";
import AdminPrice from "./Pages/components/admin/AdminPrice";
import Post from "./Pages/components/Post";
import BlogLayout from "./Pages/BlogLayout";
import AddPost from "./Pages/components/admin/AddPost";
import DelPost from "./Pages/components/admin/DelPost";
import AddPartPost from "./Pages/components/admin/AddPartPost";
import './App.css'
import Laptop from "./Pages/components/Laptop";
import Computers from "./Pages/Computers";


function App() {
  return (
    <>

        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="comp" element={<Computers />}/>  
                <Route path="laptop" element={<Laptop />}/>  
                <Route path="about" element={<About />} />
                <Route path="price" element={<Price />} >
                  <Route path="individual" element={<FPriceList />}/>
                  <Route path="legal" element={<CorpPrice />} />
                </Route>
                <Route path="blog" element={<BlogLayout/>} >
                  <Route index element={<Blog/>}/>
                  <Route path="posts/:id" element={<Post/>}/>
                </Route>
                <Route path="reviews" element={<Review/>} />
                <Route path="contacts" element={<Contact/>} />
                <Route path="login" element={<Login/>} >
                  <Route path="admin" element={<Admin />} />
                  <Route path="info" element={<Info />} />
                  <Route path="prices" element={<AdminPrice />} />
                  <Route path="ablog" element={<AdminBlog />} >
                    <Route path="add" element={<AddPost/>}/>
                    <Route path="delete" element={<DelPost/>}/>
                    <Route path="part" element={<AddPartPost/>}/>
                  </Route>
                  <Route path="areviews" element={<AdminReviews />} />
                  <Route path="message" element={<Message />} />
                </Route>
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    </>

  )

}

export default App
