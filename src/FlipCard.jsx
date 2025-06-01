const FlipCard = ({
  front,
  back,
  isFlipped,
  frontColor = "bg-card dark:bg-card-dark",
  backColor = "bg-primary-600 dark:bg-primary-800",
  frontText = "text-label dark:text-label-dark",
  backText = "text-white"
}) => (
  <div className={`card ${isFlipped ? "flipped" : ""} w-64 max-w-full mx-auto`}>
    <div className="card__content text-center relative p-8 transition-transform duration-700 font-bold shadow-lg hover:shadow-2xl rounded-xl">
      <div className={`card__front absolute inset-0 flex items-center justify-center ${frontColor} border-2 border-cardborder-dark rounded-xl ${frontText}`}>
        <h2 className="text-2xl">{front || "Press 'randomize word' !"}</h2>
      </div>
      <div className={`card__back absolute inset-0 flex items-center justify-center ${backColor} border-2 border-cardborder-dark rounded-xl ${backText}`}>
        <h2 className="text-2xl">{back || "Translation shown here"}</h2>
      </div>
    </div>
  </div>
);

export default FlipCard;