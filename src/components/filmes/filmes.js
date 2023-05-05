import { useState, useEffect } from "react"
import * as S from "../style"
import axios from 'axios'


export default function Filmes() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        getFilms()
    })

    const getFilms = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(allApi)
            console.log(resposta)
        }).catch(error => alert(`desculpe, houve um falha ${error}`))
    }

    return (
        <S.Container id="filmes">
            <S.BoxTitle>
                <h2>Olá, eu sou a Filmes</h2>
            </S.BoxTitle>
            {filmes.map((item, id )=> (
                <S.BoxFilms key={id}>
                    <img src={item.image} alt={item.title} />]
                    <h3>Name:{item.title}</h3>
                </S.BoxFilms>
            ))}
        </S.Container>
    )
}