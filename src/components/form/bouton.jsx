// ce bouton est un bouton reutilisable, il suffit de l'importer en lui passant des valeurs en parametres 
export function Button({children,type,onClick,className} ){
    return <button type={type} onClick={onClick} className={className} >
            {children}
        </button>
        
    
}