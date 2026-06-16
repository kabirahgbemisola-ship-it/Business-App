import LandingPage from "./Landing/LandingPage";
import { useState } from "react";
import LoginForm from "./features/auth/LoginForm";
import { userDb } from "./Data/mocklogin";
import DashBoardLayout from "./Dashboard/Dashboard Layout";


export default function App(){
    const [currentRoute, setCurrentRoute]= useState("landing")
    const [user, setUser]= useState(null)

    const handleLogin =(u, p)=>{
        const foundUser = userDb.find(
            (uk) => uk.username === u && uk.password === p,
        );

        if (foundUser){
            setUser(foundUser);
            setCurrentRoute("dashboard");
            return true;
        } else {
            return false
        }
    };
    
    switch (currentRoute) {
        case "landing":
            return <LandingPage onNavigateLogin={() => setCurrentRoute("login")}/>;
        case "login":
            return(
                <LoginForm
                    onLogin={handleLogin}
                    onBack={() => setCurrentRoute("landing")}
                />
                
            );
        case "dashboard":
            if (!user) {
                setCurrentRoute("login");
                return null;
            }
            return <DashBoardLayout user={user} onlogout={null}/>;
    
        default:return <LandingPage onNavigateLogin={() => setCurrentRoute("login")}/>;
            
    }
}
