import { useState, useRef} from "react";
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
  });
  const [message, setMessage] = useState<string>("");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const firstnameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const countrySelectRef = useRef<{ value: string; label: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post<Info>(
        "http://localhost:8081/dossier/create",
        values
      );
      if (res) {
        console.log(res.data);
        setMessage("Inscription réussie!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'inscription.");
    } finally {
      setIsLoading(false);
      setValues({
        name: "",
        firstname: "",
        email: "",
        phone: "",
        country: "",
      });
      if (nameInputRef.current) nameInputRef.current.value = "";
      if (firstnameInputRef.current) firstnameInputRef.current.value = "";
      if (phoneInputRef.current) phoneInputRef.current.value = "";
      if (emailInputRef.current) emailInputRef.current.value = "";
      countrySelectRef.current = null;
    }
  };

  return (
    <>
      <div className="flex justify-center items-start min-h-screen my-5">
        <div className="w-full max-w-lg">
          <div className="textform mb-4 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-[Lexend2] text-center text-gray-800 mb-4">
              Dans le cadre d'un partenariat, nous présélectionnons 15 candidats
              pour intégrer un centre de formation DEJEPS, option Tennis en
              France.
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Durée de la formation:</strong> 1 à 2 ans
              </li>
              <li className="mb-2">
                <strong>Période :</strong> septembre 2025 - juin 2026
              </li>
              <li className="mb-2">
                <strong>Type de contrat :</strong> apprentissage
              </li>
              <li className="mb-2">
                <strong>Niveau de jeu requis :</strong> seconde série française
              </li>
              <li className="mb-2">
                <strong>Sélection :</strong> sur dossier et entretien, du 1er février
                au 15 mars 2025
              </li>
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-6"
            encType="multipart/form-data"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 font-[Lexend2]">
              Formulaire d'inscription
            </h2>
            {message && <p className="mb-4 text-center">{message}</p>}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Nom
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                onChange={(e) => {
                  setValues({ ...values, name: e.target.value });
                }}
                ref={nameInputRef}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="firstname" className="block text-gray-700">
                Prenom
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="w-full px-3 py-2 border text-gray-700 rounded-lg"
                onChange={(e) => {
                  setValues({ ...values, firstname: e.target.value });
                }}
                ref={firstnameInputRef}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">
                Telephone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="w-full px-3 py-2 border text-gray-700 rounded-lg"
                onChange={(e) => {
                  setValues({ ...values, phone: e.target.value });
                }}
                ref={phoneInputRef}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border text-gray-700 rounded-lg"
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
                }}
                ref={emailInputRef}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="country" className="block text-gray-700">
                Pays
              </label>
              <CountrySelector
                onChange={(country) => setValues({ ...values, country })}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:outline-none ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Envoi en cours..." : "Soumettre"}
            </button>
          </form>
        </div>
      </div>
      <Foot />
    </>
  );
}