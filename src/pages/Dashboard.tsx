import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Im from "../assets/Images/autres/logomades.png"

interface Dossier {
    id: number;
    name: string;
    firstname: string;
    email: string;
    phone: string;
    country: string;
    file: string; // Nom du fichier
}

interface ApiResponse {
    Result: Dossier[];
    Error?: string;
    Status: string;
}

const Dashboard: React.FC = () => {
    const [values, setValues] = useState<Dossier[]>([]);
    const [filteredValues, setFilteredValues] = useState<Dossier[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get<ApiResponse>("http://localhost:8081/dossier")
            .then((res) => {
                if (res.data.Result) {
                    setValues(res.data.Result);
                }
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données :", error);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const results = values.filter(
                (dossier) =>
                    dossier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    dossier.firstname.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredValues(results);
        } else {
            setFilteredValues(values);
        }
    }, [searchTerm, values]);

    const handleView = (id: number) => {
        navigate(`/afficher/${id}`);
    };

    const handleDelete = (id: number) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce dossier ?")) {
            axios.delete(`http://localhost:8081/dossier/${id}`)
                .then(() => {
                    setValues(values.filter((dossier) => dossier.id !== id));
                })
                .catch((error) => {
                    console.error("Erreur lors de la suppression du dossier :", error);
                    alert("Erreur lors de la suppression du dossier.");
                });
        }
    };

    const handleAjout = () => {
        navigate("/dossier");
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Chargement...</div>;
    }

    return (
        <div className="flex justify-center mt-4 ">
            <div className="flex flex-row w-full">
                <div className="flex-col w-2/12">
                <div className="ms-4 mt-4">
                <img src={Im} alt="" className="w-30 "/>
                </div>
                
                <button onClick={()=>{
                    navigate("/")
                }} className="mt-4 ms-4 font-[Lexend2]">Accueil</button>
                </div>
                <div className=" flex-col w-10/12">
                    <h2 className="flex justify-center font-[Lexend2]">Liste des Dossiers</h2>
                    <button
                            className="p-2 bg-green-700 m-2 rounded text-white"
                            onClick={handleAjout}
                        >
                            Ajouter +
                    </button>
                        <input
                            type="text"
                            placeholder="Rechercher par nom ou prénom"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 border rounded m-2"
                        />
                        <table className="border mt-4">
                            <thead className="border-2">
                                <tr>
                                    <th className="px-4 font-[Lexend2]">Id</th>
                                    <th className="px-4 font-[Lexend2]">Nom</th>
                                    <th className="px-4 font-[Lexend2]">Prenom</th>
                                    <th className="px-4 font-[Lexend2]">Email</th>
                                    <th className="px-4 font-[Lexend2]">Telephone</th>
                                    <th className="px-4 font-[Lexend2]">Pays</th>
                                    <th className="px-4 font-[Lexend2]">CV</th>
                                    <th className="px-4 font-[Lexend2]">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredValues.map((dossier) => (
                                    dossier.id === 1 ?
                                    <tr key={dossier.id}>
                                        <td className="px-4 border-r">{dossier.id} Nickel</td>
                                        <td className="px-4">{dossier.name}</td>
                                        <td className="px-4">{dossier.firstname}</td>
                                        <td className="px-4">{dossier.email}</td>
                                        <td className="px-4">{dossier.phone}</td>
                                        <td className="px-4">{dossier.country}</td>
                                        <td className="px-4">
                                            <a
                                                href={`http://localhost:8081/dossier/uploads/${dossier.file}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Voir CV
                                            </a>
                                        </td>
                                        <td className="px-4">
                                            <button
                                                className="p-1 bg-yellow-400 m-2 rounded"
                                                onClick={() => handleView(dossier.id)}
                                                aria-label={`Afficher le dossier ${dossier.id}`}
                                            >
                                                Afficher
                                            </button>
                                            <button
                                                className="p-1 bg-red-800 m-2 rounded text-white"
                                                onClick={() => handleDelete(dossier.id)}
                                                aria-label={`Supprimer le dossier ${dossier.id}`}
                                            >
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr> :
                                    <tr key={dossier.id}>
                                    <td className="px-4 border-r">{dossier.id}</td>
                                    <td className="px-4">{dossier.name}</td>
                                    <td className="px-4">{dossier.firstname}</td>
                                    <td className="px-4">{dossier.email}</td>
                                    <td className="px-4">{dossier.phone}</td>
                                    <td className="px-4">{dossier.country}</td>
                                    <td className="px-4">
                                        <a
                                            href={`http://localhost:8081/dossier/uploads/${dossier.file}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Voir CV
                                        </a>
                                    </td>
                                    <td className="px-4">
                                        <button
                                            className="p-1 bg-yellow-400 m-2 rounded"
                                            onClick={() => handleView(dossier.id)}
                                            aria-label={`Afficher le dossier ${dossier.id}`}
                                        >
                                            Afficher
                                        </button>
                                        <button
                                            className="p-1 bg-red-800 m-2 rounded text-white"
                                            onClick={() => handleDelete(dossier.id)}
                                            aria-label={`Supprimer le dossier ${dossier.id}`}
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
            </div>
            
            </div>
                
        </div>
    );
};

export default Dashboard;