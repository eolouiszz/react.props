function App() {
    return(
        <>
        <Greeting name="louis" age="13" isOnline="true" />
        </>
    )
}

function Greeting(props) {
    return (
        <>
        <h1>Iae, {props.name}</h1>
        <h1>idade: {props.age}</h1>
        <h1>online?: {props.isOnline}</h1>
        </>
    )
}