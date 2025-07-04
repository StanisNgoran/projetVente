
import { useContext } from "react";
import { PanierContext } from "../context/creationContext";

export function usePanier(){
    return useContext(PanierContext)
}