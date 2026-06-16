import { useState } from "react";
import { Lock} from "lucide-react";


export default function LoginForm({onLogin, onBack}){
    const [username, setUserName] = useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState("")

    //Handle form submission logic here, such as making an API call to authenticate the user
    const handleSubmitForForm = (e)=>{
        e.preventDefault()

        const isSuccess = onLogin(username, password);
        if (!isSuccess) {
            setError("Invalid username or password")
        }
    }

    return(
        <>
            <div className="min-h-screen bg-slate-100 flex items-center 
            justify-center p-6">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border
                 border-blue-700 overflow-hidden">
                    <div className="bg-blue-400 p-8 text-center">
                        <div className="bg-blue/20 w-16 h-16 rounded-full flex items-center 
                            justify-center mx-auto mb-4">
                            <Lock className ="mx-auto bg-blue-200 text-blue-600 w-10 h-12 flex items-center 
                            justify-center rounded-2xl mb-8 shadow-sm border-sky-100"/>
                        </div>
                        <h1 className="text-2xl font-bold text-blue-900 mb-1">Welcome Back!</h1>
                        <p className="text-slate-800 text-sm">Sign in with your Credentials.</p>
                    </div>
                    <form action="" onSubmit={handleSubmitForForm} className="p-8 space-y-6"> 
                        {error && (
                            <div className="text-red-600 text-center">
                                {error}
                            </div>
                        )}
                    <div>
                        
                        <label className="block text-sm font-medium text-slate-700 mb-3">UserName</label>
                            < input  type="text" 
                            className="bg-gray-300/85 w-full h-14  outline-none px-4 rounded-lg " 
                            required placeholder="Type your username" 
                            value={username} 
                            onChange={(e) => setUserName(e.target.value)}
                        
                        /> 
                    

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                            <input type="password" 
                            required placeholder="Type ***" 
                            value={password} 
                            className="bg-gray-300/85 w-full h-14 px-4 outline-none rounded-lg" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700
                     text-white font-semibold py-3 px-4 rounded-lg transition-colors has-hover:not-only:">
                        Login
                    </button>

                    </form>

                </div>
            </div>
        </>
    )
}