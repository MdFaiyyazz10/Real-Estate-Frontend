import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../about/About'
import Home from '../home/pages/Home'
import Gallery from '../gallery/Gallery'
import Blog from '../blog/Blog'
import ContactPage from '../contact/ContactPage'
import Project from '../project/Project'
import CommercialPlot from '../services/CommercialPlot'
import ResidentialPlot from '../services/ResidentialPlot'
import Farmhouse from '../services/Farmhouse'
import Agriculture from '../services/Agriculture'
import Adminlogin from '../admin/pages/Adminlogin'
import CustomerLogin from '../customer/pages/CustomerLogin'
import Blog1 from '../blog/Blog1'
import ManageGallery from '../admin/pages/ManageGallery'
import AddGallery from '../admin/pages/AddGallery'
import Admin from '../admin/pages/Admin'
import ResetPassword from '../customer/pages/ResetPassword'
import ManageBlog from '../admin/pages/BlogManage'
import AddBlog from '../admin/pages/AddBlog'

function Navigation() {
  return (
    <>
      <Routes>

        {/* Home Pages Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project" element={<Project />} />
        <Route path="/commercial-plot" element={<CommercialPlot />} />
        <Route path="/residential-plot" element={<ResidentialPlot />} />
        <Route path="/farmhouse-plot" element={<Farmhouse />} />
        <Route path="/agriculture-plot" element={<Agriculture />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog1 />} />
        <Route path="/contact" element={<ContactPage />} />


        {/* Admin Pages Routes */}
        <Route path='/user/login' element={<CustomerLogin/>}/>
        <Route path='/user/reset-password' element={<ResetPassword/>}/>


        {/* Admin Pages Routes */}
        <Route path='/admin/login' element={<Adminlogin />} />
        <Route path='/admin/dashboard' element={<Admin/>} />
        <Route path='/admin/dashboard/gallery' element={<ManageGallery />} />
        <Route path='/admin/dashboard/blog' element={<ManageBlog />} />
        <Route path='/admin/dashboard/add-gallery' element={<AddGallery />} />
        <Route path='/admin/dashboard/add-blog' element={<AddBlog />} />
      </Routes>
    </>
  )
}

export default Navigation
