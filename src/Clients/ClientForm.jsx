import { useState } from "react";
import {Plus, User, Mail} from "lucide-react"

const ClientForm = ({setClients}) => {
    const [formData, setFormData] = useState({name: "", email: "", company: ""});

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (!formData.name || !formData.company) return;
        const newClient = { id: crypto.randomUUID(), ...formData};
        setClients((prev)=> [...prev, newClient]);
        setFormData({name: "", email:"", company:""});

    };

    return(
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-600"/>Add New Client
            </h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Contact Name</label>
                    <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-3 text-slate-400"/>
                        <input type="text" required className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g Acme Corp" value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})} />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400"/>
                        <input type="email" required className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@example.com" value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700
                 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Save Client
                </button>
            </div>

        </form>
    )
}
export default ClientForm;