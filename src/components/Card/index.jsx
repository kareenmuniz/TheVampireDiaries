import styles from './Card.module.css';

function Card({ nome, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <h3>{nome}</h3>
    </div>
  );
}

export default Card;
