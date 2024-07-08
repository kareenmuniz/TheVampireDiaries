import styles from './Personagens.module.css'
import Container from '../../components/Container'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Personagens() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kareenmuniz/TheVampireDiaries-api/main/personagens.json')
        .then(response => response.json())
        .then(data => setPersonagens(data.personagens_principais))
    }, [])

    return (
        <>
        <Container>
            
            <div className={styles.grid}>
                {personagens.map(personagem => (
                    <Link to={`/personagens/${personagem.nome}`} key={personagem.nome} className={styles.link}>
                        <Card 
                            nome={personagem.nome}
                            imagem={personagem.imagem} 
                        />
                    </Link>
                ))}
            </div>
        </Container>
        </>
    )
}

export default Personagens
