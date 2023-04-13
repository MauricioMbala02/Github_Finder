import { UserProps } from '../types/user';
import Search from '../components/Search';
import { useState } from 'react';
import User from '../components/user'
import Error from '../components/Error'
import imageLoading from '../components/imgLoading/EARTH_EMOJI_400px.gif'
import classes from '../components/User.module.css'

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [reposit, setReposit] = useState<UserProps | null>(null);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const loadUser = async(userName: string) => {
        setError(false)
        setUser(null)
        setLoading(true)

        const res = await fetch(`https://api.github.com/users/${userName}`)

        setLoading(false)

        const data = await res.json();

        if(res.status === 404){
            setError(true)
            return;
        }

        const {avatar_url, login, name, location, followers, following} = data;

        const userData: UserProps = {
            avatar_url,
            login,
            name,
            location,
            followers,
            following,
        };

        setUser(userData);
    }

    // const loadReposit = async(userName: string) => {
    //     setError(false)
    //     setUser(null)
    //     setLoading(true)

    //     const res = await fetch(`https://api.github.com/users/${userName}/`)

    //     setLoading(false)

    //     const data = await res.json();

    //     if(res.status === 404){
    //         setError(true)
    //         return;
    //     }

    //     const {avatar_url, login, name, location, followers, following} = data;

    //     const userData: UserProps = {
    //         avatar_url,
    //         login,
    //         name,
    //         location,
    //         followers,
    //         following,
    //     };

    //     setUser(userData);
    // }

    return(
        <div>
            <Search loadUser={loadUser} />
            {user && <User {...user} />}        
            {error && <Error />}
            {loading && (
                <p className={classes.loading}>
                    <img  src={imageLoading} alt={imageLoading} />
                    <span>A buscar usuário...</span>
                </p>

            )}
        </div>
    )
}

export default Home
