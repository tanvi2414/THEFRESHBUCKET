import Farm from '../components/farms.jsx'
import Footer from '../components/footer.jsx'
import Navbar from '../components/navbar.jsx'
import Layout from '../components/layout.jsx'

export default function Farms(){
    return(
        <>
            <Layout>
                <Navbar/>
                <Farm/>
                <Footer/>
            </Layout>
        </>
    )
}