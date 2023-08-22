import Hamlet from '../../components/Hamlet/Hamlet'
import About from '../../components/About/About'
import Menu from '../../components/Menu/Menu'
import FindUs from '../../components/FindUs/FindUs'
import ContactUs from '../../components/ContactUs/ContactUs'

export default function Home({
    orderItem,
    setOrderItem
}) {
    return(
        <div className='Hamlet' id='Home'>
                <Hamlet />
            <div className='About' id='About'>
                <About />
            </div>
            <div className='Menu' id='Menu'>
                <Menu 
                    setOrderItem={setOrderItem}
                />
            </div>
            <div className='FindUs' id='FindUs'>
                <FindUs />
            </div>
            <div className='ContactUs' id='ContactUs'></div>
            <div>
                <ContactUs />
            </div>
        </div>
    )
}