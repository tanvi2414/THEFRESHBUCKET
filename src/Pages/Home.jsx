import Footer from '../components/footer.jsx'
import MainContent from '../components/maincontent.jsx'
import Navbar from '../components/navbar.jsx'
import Layout from '../components/layout.jsx'

export default function Home(){
return(
    <Layout>
        <Navbar/>
        <MainContent/>
        <Footer/>
    </Layout>
)
}