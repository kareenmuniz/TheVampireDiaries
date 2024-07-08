
import Container from "../../components/Container"
import styles from './Page404.module.css'


function Page404() {

    return (
        <>
        <Container>
            <section className={styles.page404}>
                <h2>404</h2>
                <p>Página não encontrada</p>
            </section>
        </Container>
        </>
    )
}

export default Page404