
import './Juzcard.css'

const Juzcard = ({ page }) => {
    return (
        <div className="juz-card">

            <div className="juz-number">
                {String(page).padStart(2, '0')}
            </div>

            <div className="juz-info">
                <h3>Juz {page}</h3>
                <p>Para {page}</p>
            </div>

            <div className="juz-arrow">
                →
            </div>

        </div>
    )
}

export default Juzcard