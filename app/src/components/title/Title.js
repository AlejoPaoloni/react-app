import "./Title.css";

const Title = (props) => {
    return (
        <div className="banner">
            <div className="banner-container">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Title;