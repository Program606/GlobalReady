import "../css/Top3Card.css";

function Top3Card({ header1,para1,header2, para2, header3,para3 }) {
    return (
        <section className="card-container">
            <div className="card">
                {header1}
                {para1}
                <a href="#" className="card-btn">More Info</a>
            </div>
            <div className="card">
                {header2}
                {para2}
                <a href="#" className="card-btn">More Info</a>
            </div>
            <div className="card">
                {header3}
                {para3}
                <a href="#" className="card-btn">More Info</a>
            </div>
        </section>
    );
}

export default Top3Card;
