import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, getIdToken, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../../Firebase/firebase.init";

initFirebase();

const useFirebase = () => {
    const [user, setuser] = useState({})
    const [error, seterror] = useState('')
    const [token, setoken] = useState('')
    const [admin, setAdmin] = useState(false);

    const [isLoading, setisLoading] = useState(true)

    const auth = getAuth();

    const provider = new GoogleAuthProvider();
    // create user
    const createUser = (name, email, password, history) => {
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                seterror('');
                const newUser = { email, displayName: name };
                setuser(newUser);
                saveUser(email, name, 'POST');
                setName(name)
                history.replace('/');
                // ...
            })
            .catch((error) => {
                seterror(error.message);
                // ..
            }).finally(() => {
                setisLoading(false)
            });
    };

    // updateProfile
    const setName = (name) => {
        setisLoading(true)

        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { });
    }
    // google sign
    const signGoogle = (location, history) => {
        setisLoading(true)

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                seterror('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                seterror(error.message);
            }).finally(() => setisLoading(false));
    }

    // pass sign in
    const emailPass = (email, password, location, history) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                seterror('')
                setuser(userCredential.user);
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
                // ...
            })
            .catch((error) => {
                seterror(error.message);
            }).finally(() => setisLoading(false));
    }
    // authchange
    useEffect(() => {
        setisLoading(true)

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
                getIdToken(user).then(idToken => { setoken(idToken) })
                // ...
            } else {
                // User is signed out
                // ...
                setuser({})
            }
            setisLoading(false)

        });
    }, [auth])


    useEffect(() => {
        fetch(`https://vast-everglades-95998.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // signoUT
    const logOut = () => {
        setisLoading(true)

        signOut(auth).then(() => {
            setuser({})
            setisLoading(false)
        }).catch((error) => {
            // An error happened.
        });
    }

    const saveUser = (email, displayName, method) => {
        const userData = { email, displayName };
        fetch('https://vast-everglades-95998.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then()
    }
    return {
        user,
        isLoading,
        setisLoading,
        createUser,
        emailPass,
        error,
        logOut,
        signGoogle,
        seterror,
        admin,
        token

    }

}
export default useFirebase;