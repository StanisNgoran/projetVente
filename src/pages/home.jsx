import { MainLayout } from "../Layout/MainLayout"
import { CardProduit } from "../components/produit/cardProduit"
import { PRODUIT } from "../components/produit/CatalogueProd"
import { PubBar } from "../components/PubBar"
import chargeur from "../assets/pub/chargeur.jpeg";
import parfum from "../assets/pub/parfum.jpeg";
import sac from "../assets/pub/sac.jpeg";
import usb from "../assets/pub/usb.jpeg";
export function Home(){
    return <>
    {/* //j'importe le modele de base qui contient la barre de navigation et le pied de page */}
        <MainLayout> 
            <PubBar
                image1={chargeur}
                image2={usb}
                image3={sac}
                image4={parfum}
            /> 

        {/* // une grille affichant 3 colonnes de produit sur android, 4 sur tablettes, et 6 sur PC */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 my-4"> 
                {PRODUIT.map((produit,i)=>( //je parcours le tableau de produit que j'ai crée dans listeProduit
                        <CardProduit //chaque produit correspond à une carte, donc s'il ya 10 produits, on a 10 cartes
                        key={i}
                        nomproduit={produit.nomproduit}
                        description={produit.description}
                        image={produit.image}
                        prix={produit.prix}
                    />
                  
                )

                )}
                
            </div>
            
        </MainLayout>
    </>
}