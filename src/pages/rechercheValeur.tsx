import  { useState } from 'react'

interface Etudiant{
    nom: string,
    prenom: string
}


export default function RechercheValeur() {


    const [val, setVal] = useState("");

    const listeEtudiant: Etudiant[] = [
        {
            nom: "DA SILVA",
            prenom: "Devon",
        },
        {
            nom: "ADOMOU",
            prenom: "Dorcas"  
        },
        
        {
            nom: "ATOHOU",
            prenom: "Graias"  
        }]


 const etudiants = listeEtudiant.filter((etudiant) =>
    etudiant.nom.toLowerCase().includes(val.toLowerCase()) || 
    etudiant.prenom.toLowerCase().includes(val.toLowerCase())
 );


  return (
    <div>
        <div>
            <input
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder="Rechercher un étudiant"
            />
            <div>
                {etudiants.map((etudiant, index) => (
                <div key={index}>
                    <p>{etudiant.nom} {etudiant.prenom}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
)
}
