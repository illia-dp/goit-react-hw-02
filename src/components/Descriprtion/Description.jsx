import css from './Description.module.css'

const Description = () => {
    return (
        <>
            <h1 className={css.hero_title}>Sip Happens Café</h1>
            <p className={css.hero_text}>Please leave your feedback about our service by selecting one of the options below.</p>
        </>
    )
}

export default Description;