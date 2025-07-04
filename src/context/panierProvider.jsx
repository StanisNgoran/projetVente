import { useState} from "react";
import { PanierContext } from "./creationContext";
export function GestionPanier({children}){
    const [elementDuPanier,setElementDupanier]=useState([])
    const [totalProduit,setTotalProduit]=useState(0)

    // cette fonction recuperer le produit cliqué pour l'ajouter au panier 
    function ajouterAupanier(produit){
        setElementDupanier((prev)=>[...prev,produit])
        setTotalProduit(totalProduit+1)
    }

    // cette fonction permet de vider le panier 
    function supprimerDupanier(){
        setElementDupanier([])
        setTotalProduit(0)
    }

    return(
        // ici je passe les differents valeurs au context 
        <PanierContext.Provider value={{ajouterAupanier,supprimerDupanier,elementDuPanier,totalProduit}}>
            {children}
        </PanierContext.Provider>
    )

}