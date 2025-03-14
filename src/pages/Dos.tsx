import axios from "axios";
import { useState } from 'react';
import { Info } from "react-feather";

interface Info {
    name: string,
    firstname: string,
    email: string,
    phone: string,
    country: string
}

function Dos() {
    const [values, setValues] = useState<Info>({
        name: "",
        firstname: "",
        email: "",
        phone: "",
        country: ""
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const res = await axios.post<Info>("http://localhost:8081/dossier/create", values);
            if (res) {
            console.log(res.data);
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            {
                setValues({
                     name: "",
                     firstname: "",
                     email: "",
                     phone: "",
                     country: ""
                 })
             }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Formulaire d'inscription</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Nom</label>
                    <input type="text" name="name" id="name" className="w-full px-3 py-2 border rounded-lg text-gray-700" onChange={(e) => { setValues({ ...values, name: e.target.value }) }} />
                </div>
                <div className="mb-4">
                    <label htmlFor="firstname" className="block text-gray-700">Prenom</label>
                    <input type="text" name="firstname" id="firstname" className="w-full px-3 py-2 border text-gray-700 rounded-lg" onChange={(e) => { setValues({ ...values, firstname: e.target.value }) }} />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">Telephone</label>
                    <input type="text" name="phone" id="phone" className="w-full px-3 py-2 border text-gray-700 rounded-lg" onChange={(e) => { setValues({ ...values, phone: e.target.value }) }} />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" name="email" id="email" className="w-full px-3 py-2 border text-gray-700 rounded-lg" onChange={(e) => { setValues({ ...values, email: e.target.value }) }} />
                </div>
                <div className="mb-6">
                    <label htmlFor="country" className="block text-gray-700">Country</label>
                    <select name="country" id="country" className="w-full px-3 py-2 border text-gray-700 rounded-lg" onChange={(e) => { setValues({ ...values, country: e.target.value }) }}>
                        <option value="" disabled selected>Selectionner le pays</option>
                        <option value="Benin">Benin</option>
                        <option value="Mali">Mali</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Valider</button>
            </form>
        </div>
    );
}

export default Dos;
