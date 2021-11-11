import React, { createContext } from 'react';
import useFirebase from '../DataLoads/firebase';
export const AuthContext = createContext()
const Authprovider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;