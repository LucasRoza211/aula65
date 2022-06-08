import useFetchData from "./UseFetchData";

export default function Repositories(){

    const url = 'https://api.github.com/users/LucasRoza211/repos'

    const {data} = useFetchData(url)

    console.log(data)

    return (
        <div>
            <h1>Meus Repositorios</h1>
            {data && (
                data.map((repository) =>(
                    <div className="text-white" key={repository.id}>
                        <p> {repository.id} : {repository.name}</p>
                    </div>
                ))
            )}
            <h3>Dev: Lucas Roza</h3>
        </div>
    )
}
