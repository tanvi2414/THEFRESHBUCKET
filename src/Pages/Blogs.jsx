import React from 'react';
import Blogs from '../components/blog.jsx';
import Footer from '../components/footer.jsx';
import Layout from '../components/layout.jsx';
import Navbar from '../components/navbar.jsx';

const Blog =()=>{
    return(
        <Layout>
            <Navbar/>
            <Blogs/>
            <Footer/>
        </Layout>
    );
}

export default Blog;