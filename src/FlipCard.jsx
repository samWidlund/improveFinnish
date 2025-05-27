const FlipCard = ({front, back, isFlipped}) => (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card w-40">
            <div className="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
                <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-success flex items-center justify-center border-2 border-black rounded-lg">
                <h2>{front || "Välj ett ord!"}</h2>
                </div>
                <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-error flex items-center justify-center border-2 border-black rounded-lg">
                <h2>{back || "Välj ett ord!"}</h2>
                </div>
            </div>
        </div>
    </div>
);

export default FlipCard;