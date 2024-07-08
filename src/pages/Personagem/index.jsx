import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Personagem.module.css'

function Personagem() {
  const { nome } = useParams();
  const [personagem, setPersonagem] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/kareenmuniz/TheVampireDiaries-api/main/personagens.json')
      .then(response => response.json())
      .then(data => {
        const encontrado = data.personagens_principais.find(p => p.nome == nome);
        setPersonagem(encontrado);
      })
  }, [nome])

  if (!personagem) return <p>Carregando...</p>;

  return (
    <>

      <Container>
        <div className={styles.personagem}>

          <div className={styles.imgContainer}>
            <img src={personagem.imagem} alt={personagem.nome} className={styles.imagem} />
          </div>
          
          
          <div className={styles.detalhes}>

            <h2 className={styles.nome}>{personagem.nome}</h2>

            <div className={styles.info}>

              <p><strong>Idade:</strong> {personagem.idade}</p>

              <p><strong>Espécie:</strong> {personagem.especie}</p>

              <p><strong>Interpretado por:</strong> {personagem.interpretado_por}</p>

            </div>

            <p className={styles.descricao}>{personagem.descricao}</p>

          </div>
        </div>
      </Container>

    </>
  );
}

export default Personagem