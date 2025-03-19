import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate, useParams } from "react-router";

interface Info {
    id: number;
    name: string;
    firstname: string;
    email: string;
    phone: string;
    country: string;
    file: File | null;
}

interface ApiResponse {
    Result: Info;
    Error?: string;
    Status: string;
}

function CountrySelector({ value, onChange }: { value: string; onChange: (value: string) => void }) {
    const options = countryList().getData();
    const selectedValue = options.find(option => option.value === value) || null;

    return (
        <Select
            options={options}
            value={selectedValue}
            onChange={(selected) => onChange(selected?.value || "")}
            placeholder="Sélectionnez un pays"
        />
    );
}

export default function Update() {
    const { id } = useParams<{ id: string }>();
    const [values, setValues] = useState<Info | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingData, setLoadingData] = useState(true);
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    const validatePhone = (phone: string) => /^\d{6,15}$/.test(phone);
    const validateFile = (file: File | null) => {
        if (!file) return true; // Permettre de ne pas changer le fichier
        const allowedExtensions = ["pdf", "doc", "docx"];
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        return fileExtension && allowedExtensions.includes(fileExtension);
    };

    useEffect(() => {
        if (id) {
            axios.get<ApiResponse>(`http://localhost:8081/dossier/${id}`)
                .then((res) => {
                    if (res.data.Result) {
                        setValues(res.data.Result);
                    } else {
                        setError("Erreur : données introuvables.");
                    }
                })
                .catch(() => setError("Erreur lors de la récupération du dossier."))
                .finally(() => setLoadingData(false));
        }
    }, [id]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage("");
        setError("");
        console.log(values)
        if (!values) return;

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
        formData.append("name", values.name);
        formData.append("firstname", values.firstname);
        formData.append("phone", values.phone);
        formData.append("email", values.email);
        formData.append("country", values.country);
        if (values.file) {
            formData.append("file", values.file);
        }

        setIsLoading(true);
        try {
            await axios.put(`http://localhost:8081/dossier/update/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage("Mise à jour réussie !");
            navigate("/Dashboard")

        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || "Erreur lors de la mise à jour.");
            } else {
                setError("Erreur inattendue lors de la mise à jour.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    if (loadingData) {
        return <div className="flex justify-center items-center h-screen">Chargement...</div>;
    }

    if (!values) return <div>Erreur lors du chargement des données.</div>;

    return (
        <div className="flex justify-center items-start min-h-screen my-5">
            <div className="w-full max-w-lg">
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-6" encType="multipart/form-data">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Formulaire de mise à jour</h2>
                    {error && <p className="mb-4 text-center text-red-500">{error}</p>}
                    {message && <p className="mb-4 text-center text-green-500">{message}</p>}

                    <div className="mb-4">
                        <label className="block text-gray-700">Nom</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-lg" value={values.name} required 
                            onChange={(e) => setValues({ ...values, name: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Prénom</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-lg" value={values.firstname} required 
                            onChange={(e) => setValues({ ...values, firstname: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Téléphone</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-lg" value={values.phone} required 
                            onChange={(e) => setValues({ ...values, phone: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded-lg" value={values.email} required 
                            onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Pays</label>
                        <CountrySelector value={values.country} onChange={(country) => setValues({ ...values, country })} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">CV</label>
                        <input type="file" className="w-full px-3 py-2 border rounded-lg"
                            onChange={(e) => setValues({ ...values, file: e.target.files?.[0] || null })} />
                    </div>

                    <button type="submit" disabled={isLoading} 
                        className={`w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:outline-none 
                            ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
                        {isLoading ? "Envoi en cours..." : "Soumettre"}
                    </button>
                </form>
            </div>
        </div>
    );
}
