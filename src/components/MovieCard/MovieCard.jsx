import { FaStar } from "react-icons/fa";

import styles from "./MovieCard.module.css";

function MovieCard({ img, name, rating, description }) {
    const truncateDescription = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return img, name, rating, description ? (
        <div className={styles.card}>
            <img src={img} alt={name} />
            <div className={styles.movieInfo}>
                <h2>{name}</h2>
                <span>
                    <FaStar /> {rating.toFixed(1)}
                </span>
                <div className={styles.hiddenContent}>
                    <p>{truncateDescription(description, 20)}</p>
                    <button>Ver mais</button>
                </div>
            </div>
        </div>
    ) : null;
}

export default MovieCard;
