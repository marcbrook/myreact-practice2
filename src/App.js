// import {useRoutes} from 'hookrouter'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './api/components/commons/header/Header'
import Footer from './api/components/commons/footer/Footer'
import Homepage from './api/components/pages/homePages/Homepage'
import Userform from './api/components/pages/userForm/Userform'

import Tabs from './api/components/pages/others/tabs/Tabs'
import Tabstoggle from './api/components/pages/others/tabs/Tabstoggle'
import Accordion1 from './api/components/pages/others/Accordion/Accordion1'
//import Accordion2 from './api/components/pages/others/Accordion/Accordion2'
//import Social from './api/components/widgets/Social/Social'

import './App.scss';

function App() {
  return (
    // Using Hookrouter
    // const routes = {
    //   '/' : () => <Homepage />,
    //   '/userform' : () => <Userform />
    // };
    // const routeResults = useRoutes (routes);
    <Router>
      <section className="App-container">
        <Header />
        <Switch>
          <Route path='/home' component={Homepage}></Route>
          <Route path='/user-form' component={Userform}></Route>
          <Route path='/consult' component={About}></Route>
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

const About = ({history}) => (
     <section className="router-test">
         <hr /><Tabs /><hr />
         <Tabstoggle />
         <Accordion1 />
         {/* <Accordion2 /> */}
         {/* <Social /> */}
         <button onClick={()=>history.push('/home')}
         style={{margin:"20px"}}
         >Go to home</button>
         <hr />
     </section>
)
// const homepage = () => {
//   <section className="homepage-wrapper">
//     <Homepage />
//   </section>
// }

export default App;

