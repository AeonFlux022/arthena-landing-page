interface CardContent {
  title: string;
  imageUrl: string;
  description?: string;
}

const Card: React.FC<CardContent> = ({ title, imageUrl, description }) => {
  return (
    <div className="mx-auto rounded overflow-hidden shadow-lg mb-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {description && (
          <p className="text-gray-700 text-base line-clamp-2 mb-3">{description}</p>
        )}
        <button className="bg-secondary size-full p-3 text-black font-bold">Read More</button>
      </div>
    </div>
  );
};

export default Card;
