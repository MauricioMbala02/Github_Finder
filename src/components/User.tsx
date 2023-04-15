import { UserProps } from "../types/user"
import { MdLocationPin } from 'react-icons/md'
import classes from './User.module.css'
// import { Link } from 'react-router-dom'


const User = ({avatar_url, login, name, location, followers, following}: UserProps) => {
  return (
    <div>
        <div className={classes.user}>
          <img src={avatar_url} alt={login} />
          <h2>{login}</h2>
          {name && (
            <h3>{name}</h3>
          )}
          {location && (
            <p className={classes.location}>
            <MdLocationPin />
            <span>{location}</span>
            </p>
          )
          }
          <div className={classes.stats}>
            <div>
                <p>Seguidores:</p>
                <p className={classes.number}>{followers}</p>
            </div>
            <div>
                <p>Seguindo:</p>
                <p className={classes.number}>{following}</p>
            </div>
        </div>
        {/* <Link to={}>Ver melhores projectos</Link> */}
        <a href={`https://github.com/${login}?tab=repositories`} target="_blank" rel="noopener noreferrer">Ver Repositorios</a>
        </div>
        <br />
    </div>
  )
}

export default User