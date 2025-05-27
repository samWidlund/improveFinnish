const FlipCard = ({ front, back, isFlipped }) => (
  <div className={`card ${isFlipped ? "flipped" : ""} w-64 max-w-full mx-auto`}>
    <div className="card__content text-center relative p-8 transition-transform duration-700 text-white font-bold shadow-lg hover:shadow-2xl rounded-xl">
      <div className="card__front absolute inset-0 flex items-center justify-center bg-blue-600 border-2 border-black rounded-xl">
        <h2 className="text-2xl">{front || "Välj ett ord!"}</h2>
      </div>
      <div className="card__back absolute inset-0 flex items-center justify-center bg-orange-500 border-2 border-black rounded-xl">
        <h2 className="text-2xl">{back || "Översättning visas här"}</h2>
      </div>
    </div>
  </div>
);

export default FlipCard;