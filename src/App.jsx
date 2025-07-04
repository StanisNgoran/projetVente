import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./router/routes"
import { GestionPanier } from "./context/panierProvider"
import { Toaster } from "react-hot-toast"
const route=createBrowserRouter(routes, {
  basename: "/projetVente", // 👈 obligatoire pour GitHub Pages
})
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
