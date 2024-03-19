const Card = () => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <img
          className="w-full"
          src="https://placehold.co/600x400"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
