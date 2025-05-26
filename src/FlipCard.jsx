const FlipCard = ({front, back, isFlipped}) => (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div class="card w-40">
            <div class="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
                <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-pink-600 flex items-center justify-center">
                <h2>{front}</h2>
                </div>
                <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-teal-500 flex items-center justify-center">
                <h2>{back}</h2>
                </div>
            </div>
        </div>
    </div>
);

export default FlipCard;