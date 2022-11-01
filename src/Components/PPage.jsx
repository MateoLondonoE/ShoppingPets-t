import Prods from "./Prods";

const PPage = (props) => {
    return (
        <main id="main">
            <Prods prodData={props.prodData.items} />
        </main>
    )
}

export default PPage;