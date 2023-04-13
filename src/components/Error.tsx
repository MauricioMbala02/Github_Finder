import classes from './User.module.css'
import imageSad from './imgLoading/SAD_EMOJI_400px.gif'

const Error = () => {
    return (
        <div>
            <p className={classes.loading}>
                <img  src={imageSad} alt={imageSad} />
                <span>Usuário não encontrado!</span>
            </p>
        </div>
    )
}

export default Error