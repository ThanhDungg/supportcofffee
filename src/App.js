import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { publicsRoutes } from './routes';
import DefaultLayout from './Layout/DefaultLayout';
import { Fragment } from 'react';
import io from 'socket.io-client';
import { createContext } from 'react';

const socket = io.connect('https://support-coffee.onrender.com');

export const SocketContext = createContext();

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Routes>
               {publicsRoutes.map((route, index) => {
                  const Page = route.component;
                  let Layout = DefaultLayout;

                  if (route.Layout) {
                     Layout = route.Layout;
                  } else if (route.Layout === null) {
                     Layout = Fragment;
                  }

                  return (
                     <Route
                        path={route.path}
                        element={
                           <SocketContext.Provider value={socket}>
                              <Layout>
                                 <Page />
                              </Layout>
                           </SocketContext.Provider>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
