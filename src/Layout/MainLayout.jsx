import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

// ce fichier represente le modele de base, qui contient la barre de Navigation,le pied de page et le contenue 
// dynamique
export function MainLayout({children}){

return(
            <div className="screen">
                {/* //importation de la barre de navigation */}
                <Navbar/>   
                <div className="mx-1 bg-white my-32">
                    {/* // contenue dynamique  */}
                    {children} 
                    <Footer/>
                </div>
                
            </div>
        )
}