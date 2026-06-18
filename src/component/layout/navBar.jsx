import React from "react";
import { DollarSign, User, FileText, LogOut } from "lucide-react";

function Navbar({ activeTab, setActiveTab}) {
    return (
        <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                    <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900 hidden sm:block">Billing Portal</h1>
            </div>
            <div className="flex gap-2">
                <button onClick={() => setActiveTab('clients')} className={`flex items-center gap-2 px-3 py-2 sm:py-2 rounded-lg font-medium text-sm transition-colors ${ activeTab}`} >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline" >Clients</span>
                </button>
                <button onClick={() => setActiveTab('invoices')} className={`flex items-center gap-2 px-3 py-2 sm:py-2 rounded-lg font-medium text-sm transition-colors ${ activeTab === 'invoices' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}>
                    <FileText />
                    <span>Invoices</span>
                </button>
            </div>
            <div>
                <div>
                    <p>{null}</p>
                    <p>Logged In</p>
                </div>
                <button>
                    <LogOut />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;