import { Link } from "react-router-dom";
import "./Surahcard.css";

const Surahcard = ({ number, name, arabicName, ayahs }) => {
    return (
        <Link to={`/surahdetail/${number}`} className="surah-link">
            <div className="surah-card">
                <div className="surah-card-left">
                    <div className="surah-number">
                        {number}
                    </div>

                    <div className="surah-info">
                        <h3>{name}</h3>
                        <p>{ayahs} Ayahs</p>
                    </div>
                </div>

                <div className="surah-arabic">
                    <h3>{arabicName}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Surahcard;