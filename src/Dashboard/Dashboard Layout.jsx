import { useState } from "react"
import Navbar from "../component/layout/navBar"
import SummaryCards from "./SummaryCards"
import ClientForm from "../Clients/ClientForm"
import ClientList from "../Clients/ClientList"
import InvoiceForm from "../Invoices/invoice form"
import InvoiceList from "../Invoices/invoice list"
import { initialClients, initialInvoices } from "../Data/mocklogin"


export default function DashBoardLayout( {user, onlogout}){
    const [activeTab, setActiveTab] =useState("clients")
    const [clients, setClients] =useState(initialClients)
    const [invoices, setInvoices] =useState(initialInvoices)
    return(
        <div className="min-h-screen bg-slate-50 font-sans pb-12">
            <Navbar activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    user={user}
                    onLogout={onlogout}
                />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 animate-in fade-in duration-500">
                <SummaryCards invoices={invoices}/>
                {activeTab === 'clients' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="lg:col-span-1">
                            <ClientForm 
                                setClients={setClients}/>
                        </div>
                        <div className="lg:col-span-4">
                            <ClientList 
                                clients={clients}
                                invoices={invoices}
                                setClients={setClients}
                                setInvoices={setInvoices}
                            />
                        </div>
                    </div>
                )}
                {activeTab === 'invoices' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="lg:col-span-1">
                            <InvoiceForm
                                clients={clients}
                                invoices={invoices}
                                setInvoices={setInvoices}
                            />
                                
                        </div>
                        <div className="lg:col-span-2">
                            <InvoiceList
                                invoices={invoices}
                                setInvoices={setInvoices}
                                clients={clients}
                            />
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}