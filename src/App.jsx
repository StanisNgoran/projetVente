import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./router/routes"
import { GestionPanier } from "./context/panierProvider"
import { Toaster } from "react-hot-toast"
const route=createBrowserRouter(routes)
function App() {

  return (
   <>
  
   <Toaster/>
     <GestionPanier>
        <RouterProvider router={route}/>
     </GestionPanier>
   
 </>
)

}

export default App
