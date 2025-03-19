import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // Importez useParams

interface Dossier {
    id: number;
    name: string;
    firstname: string;
    email: string;
    phone: string;
    country: string;
    file: string;
}

interface ApiResponse {
    Result: Dossier; // Modifier pour un seul dossier
    Error?: string;
    Status: string;
}

const AfficherDossier: React.FC = () => {
    const [dossier, setDossier] = useState<Dossier | null>(null); // Modifier pour un seul dossier ou null
    const { id } = useParams<{ id: string }>(); // Récupérer l'ID depuis les paramètres de l'URL

    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            axios.get<ApiResponse>(`http://localhost:8081/dossier/${id}`) // Utiliser l'ID dans l'URL
                .then((res) => {
                    if (res.data.Result) {
                        setDossier(res.data.Result); // Stocker un seul dossier
                    }
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération du dossier :", error);
                });
        }
    }, [id]); // Ajouter id comme dépendance

    if (!dossier) {
        return <div>Chargement...</div>; // Afficher un message de chargement
    }


    const handleUpdate = (id: number)=>{
            navigate(`/update/${id}`)
    }

    return (
        <div>
            <h2>Détails du Dossier</h2>
            <p>Nom: {dossier.name}</p>
            <p>Prénom: {dossier.firstname}</p>
            <p>Email: {dossier.email}</p>
            <p>Téléphone: {dossier.phone}</p>
            <p>Pays: {dossier.country}</p>
            <p>CV: <a href={`http://localhost:8081/uploads/${dossier.file}`} target="_blank" rel="noopener noreferrer">Voir CV</a></p>
            <button onClick={()=>{handleUpdate(dossier.id)}}>Modifier</button>
        </div>
    );
};

export default AfficherDossier;