import { useState } from "react";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";
import Foot from "../components/footer/foot/foot";

interface Info {
    name: string;
    firstname: string;
    email: string;
    phone: string;
    country: string;
    file: File | null;
}

function CountrySelector({ onChange }: { onChange: (value: string) => void }) {
    const [value, setValue] = useState<{ value: string; label: string } | null>(null);
    const options = countryList().getData();

    return (
        <Select
            options={options}
            value={value}
            onChange={(selected) => {
                setValue(selected);
                onChange(selected?.value || "");
            }}
            placeholder="Sélectionnez un pays"
        />
    );
}

export default function Dossier() {
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState<Info>({
        name: "",
        firstname: "",
        email: "",
        phone: "",
        country: "",
        file: null
    });
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    const validatePhone = (phone: string) => /^\d{6,15}$/.test(phone); // Ex: 0612345678
    const validateFile = (file: File | null) => {
        if (!file) return false;
        const allowedExtensions = ["pdf", "doc", "docx"];
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        return fileExtension && allowedExtensions.includes(fileExtension);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage("");
        setError("");

        if (!validateEmail(values.email)) {
            setError("L'email fourni est invalide.");
            return;
        }
        if (!validatePhone(values.phone)) {
            setError("Le numéro de téléphone est invalide. Il doit contenir entre 6 et 15 chiffres.");
            return;
        }
        if (!validateFile(values.file)) {
            setError("Veuillez télécharger un CV au format PDF, DOC ou DOCX.");
            return;
        }

        const formData = new FormData();
        formData.append("file", values.file!);
        formData.append("name", values.name);
        formData.append("firstname", values.firstname);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("country", values.country);

        setIsLoading(true);
        try {
            await axios.post("http://localhost:8081/dossier/create", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setMessage("Inscription réussie !");
            setValues({
                name: "",
                firstname: "",
                email: "",
                phone: "",
                country: "",
                file: null
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || "Erreur lors de l'inscription.");
            } else {
                setError("Erreur inattendue lors de l'inscription.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex justify-center items-start min-h-screen my-5">
                <div className="w-full max-w-lg">
                    <div className="textform mb-4 p-6 bg-white shadow-md rounded-lg">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                            Dans le cadre d'un partenariat, nous présélectionnons 15 candidats pour intégrer un centre de formation DEJEPS, option Tennis en France.
                        </h2>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li><strong>Durée de la formation:</strong> 1 à 2 ans</li>
                            <li><strong>Période :</strong> septembre 2025 - juin 2026</li>
                            <li><strong>Type de contrat :</strong> apprentissage</li>
                            <li><strong>Niveau de jeu requis :</strong> seconde série française</li>
                            <li><strong>Sélection :</strong> sur dossier et entretien, du 1er février au 15 mars 2025</li>
                        </ul>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-6" encType="multipart/form-data">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Formulaire d'inscription</h2>
                        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
                        {message && <p className="mb-4 text-center text-green-500">{message}</p>}
                        
                        <div className="mb-4">
                            <label className="block text-gray-700">Nom</label>
                            <input type="text" className="w-full px-3 py-2 border rounded-lg" onChange={(e) => setValues({ ...values, name: e.target.value })} value={values.name} required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Prénom</label>
                            <input type="text" className="w-full px-3 py-2 border rounded-lg" onChange={(e) => setValues({ ...values, firstname: e.target.value })} value={values.firstname} required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Téléphone</label>
                            <input type="text" className="w-full px-3 py-2 border rounded-lg" onChange={(e) => setValues({ ...values, phone: e.target.value })} value={values.phone} required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input type="email" className="w-full px-3 py-2 border rounded-lg" onChange={(e) => setValues({ ...values, email: e.target.value })} value={values.email} required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Pays</label>
                            <CountrySelector onChange={(country) => setValues({ ...values, country })} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">CV</label>
                            <input type="file" className="w-full px-3 py-2 border rounded-lg" onChange={(e) => setValues({ ...values, file: e.target.files?.[0] || null })} required />
                        </div>
                        <button type="submit" disabled={isLoading} className={`w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:outline-none ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
                            {isLoading ? "Envoi en cours..." : "Soumettre"}
                        </button>
                        
                    </form>
                </div>
            </div>
            <Foot />
        </>
    );
}
