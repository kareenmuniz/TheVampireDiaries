
import Container from '../../components/Container';
import styles from './Serie.module.css';

function Serie() {
  return (
    <>

<Container>
      <section className={styles.serie}>
        
          <div className={styles.imageContainer}>
            <h2 className={styles.title}>The Vampire Diaries</h2>
            <div className={styles.imageOverlay}>
              <img
                src="https://m.media-amazon.com/images/S/pv-target-images/fa3b16deee8027741182e86e213d18e0a15443452f56f6877d7472e1f48e5d6c.jpg"
                alt="Elenco"
                className={styles.image}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.seriesData}>
              <p><strong>4.52 milhões</strong> <br></br>audiência</p>
              <p><strong>10-09-2009</strong> <br></br>estreia</p>
              <p><strong>8 temporadas</strong> <br></br>duração</p>
            </div>

            <div className={styles.seriesInfo}>
              <p>The Vampire Diaries é uma série de televisão americana de drama sobrenatural desenvolvida por Kevin Williamson e Julie Plec, baseada na série de livros homônima de L. J. Smith. A série estreou na The CW em 10 de setembro de 2009 e terminou em 10 de março de 2017, com um total de 171 episódios ao longo de oito temporadas. <br></br><br></br>  A série é situada em Mystic Falls, Virgínia, uma pequena cidade fictícia assombrada por seres sobrenaturais de todas as espécies. O foco inicial é o triângulo amoroso entre a estudante Elena Gilbert (Nina Dobrev) e os irmãos Salvatore, Stefan (Paul Wesley) e Damon (Ian Somerhalder), dois vampiros condenados a viver a eternidade lutando pelo amor da mesma mulher. O episódio piloto foi ao ar em 10 de setembro de 2009 e atraiu a maior audiência da história da emissora desde a sua estreia em 2006. A primeira temporada teve uma média de 3,6 milhões de telespectadores.</p>
          </div>
        </div>
      </section>
    </Container>

    </>
  );
}

export default Serie;
