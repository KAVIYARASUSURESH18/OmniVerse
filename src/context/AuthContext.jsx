import {
createContext,
useEffect,
useState
} from "react";


export const AuthContext = createContext();



export const AuthProvider = ({children}) => {


const [user,setUser] = useState(null);

const [loading,setLoading] = useState(true);



useEffect(()=>{


// Firebase auth listener inga varum


setLoading(false);


},[]);



return (

<AuthContext.Provider

value={{
user,
loading
}}

>

{children}

</AuthContext.Provider>

);


};
