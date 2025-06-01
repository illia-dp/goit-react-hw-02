import css from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
    const {good, neutral, bad} = feedback 
    return (
        <>
            <p className={css.items}>Good: {good}</p>
            <p className={css.items}>Neutral: {neutral}</p>
            <p className={css.items}>Bad: {bad}</p>
            <p className={css.items}>Total: {totalFeedback}</p>
            <p className={css.items}>Positive: {positiveFeedback}</p>
        </>
    )
}

export default Feedback;