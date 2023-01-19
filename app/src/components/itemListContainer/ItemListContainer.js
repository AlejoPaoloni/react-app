import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <>
            <div className="banner">
                <div className="banner-container">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="subtitle">
                <h2>{props.subtitle}</h2>
            </div>
        </>
    )
};

export default ItemListContainer;