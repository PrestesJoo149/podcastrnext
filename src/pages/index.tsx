import React from "react";
//1-SPA - Para a indexação não vai aparecer pois ele vai chamar ometodo depois de contruir a pagina
import { useEffect } from "react";
//2-SSR - Faz uma requisição nofva toda vez, como não precisa de acompanhembnto em real-time iria consumir muito do servidor ( isso é gerado na camada do servidor)
//SSG - Só funciona em produação

export default function Home(props) {
/*  1 useEffect(()=> {
    fetch('http://localhost:3333/episodes')
    .then(response => response.json())
    .then(data => console.log(data))
  }, []) */

    return (
      <div>
        <h1>Index</h1>
        <p>{JSON.stringify(props.episodes)}</p>
      </div>
  )
}
//2
/* export async function getServerSideProps(){
 const response = await fetch('http://localhost:3333/episodes')
 const data =await response.json()

 return {
   props: {
     episodes: data,
   }
 }

} */

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
 
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // 8 horas
  }
}  