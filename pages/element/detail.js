export const getStaticProps=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {elements:data}
    }
}


export default function AllElements ({elements}) {
    return (
        <div>
            <h1> Elements list </h1>
            {elements.map(elt=>(
                <div key={elt.id}>
                    <a><h3>{elt.name}</h3></a>
                </div>
            ))}
        </div>
    );
}