import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


// import React, { Component } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import PortfolioContainer from "./portfolio/portfolio-container";
// import NavigationContainer from "./navigation/navigation-container";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Blog from "./pages/blog";
// import PortfolioDetail from "./portfolio/portfolio-detail"
// import NoMatch from "./pages/no-match";



// export default class App extends Component {
//     getPortfolioItems() {
//         axios
//           .get("https://mboddie.devcamp.space/portfolio/portfolio_items")
//           .then(response =>  {
//           console.log(response);
//           })
      
//           .catch(error =>  {
//             console.log(error);
//           });
//       }
//   render() {
//       this.getPortfolioItems();
//     return (
//       <div className="app">
//         <Router>
//           <div>

//             <NavigationContainer />

//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/about-me" component={About} />
//               <Route path="/contact" component={Contact} />
//               <Route path="/blog" component={Blog} />
//               <Route exact path="/portfolio/:slug" component={PortfolioDetail}/>
//               <Route component={NoMatch} />
//             </Switch>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }



// // export default class App extends Component {
  
  

    
      
// //         render(); {
// //             this.getPortfolioItems();
// //             return (
// //               <div className="app">
// //                 <Router>
// //                   <div>
// //                     <h1>Jordan Hudgens Portfolio</h1>
// //                     <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
// //                     <NavigationContainer />
        
// //                     <Switch>
// //                       
                      

// //                     </Switch>
// //                   </div>
// //                 </Router>
// //               </div>
// //             );
// //           }
// // }