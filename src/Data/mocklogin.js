export const userDb =[
    { id: 1, username: "superadmin", password: "12345"},
    { id: 2, username: "tochukwu", password: "T boy"},
    { id: 3, username: "Khamqueen", password: "fineKitchen"},
    { id: 3, username: "ifetola", password: "babyK"}

]

export const initialClients = [
    {id:1, name: "Alice Smith", Email: "alicesmith@gmail.com", company: "Acme Corp "},
    {id:2, name: "Bob Johnson", Email: "bob@globex.com", company: "Globex Inc"},
];

export const initialInvoices = [
    {id:101, client: 1, description: "website redesign", amount: 1500, ispaid: true},
     {id:102, client: 2, description: "SEO consultant", amount: 800, ispaid: true}
];

export const formatMoney = (amt)=>{
    return new Intl.NumberFormat("en-uk", { 
        style: "currency", 
        currency: "USD"
        }).format(amt);
    };


