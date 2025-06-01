import css from './Options.module.css'

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <ul className={css.list}>
            <li className={css.items}><button className={css.set_btn} onClick={() => {updateFeedback('good')}}>Good</button></li>
            <li className={css.items}><button className={css.set_btn} onClick={() => {updateFeedback('neutral')}}>Neutral</button></li>
            <li className={css.items}><button className={css.set_btn} onClick={() => {updateFeedback('bad') }}>Bad</button></li>
            
            {totalFeedback > 0 && (
                <li className={css.items}><button className={css.reset_btn} onClick={resetFeedback}>Reset</button></li>
            )}
        </ul>
    )
}
export default Options;