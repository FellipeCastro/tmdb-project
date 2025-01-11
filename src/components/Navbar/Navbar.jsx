import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1>Filmes</h1>

            <input
                type="text"
                name="search"
                id="search"
                placeholder="Pesquise por um filme"
                autoComplete="off"
                className={styles.input}
            />
        </nav>
    );
}

export default Navbar;
