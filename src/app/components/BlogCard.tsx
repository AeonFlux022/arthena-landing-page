const BlogCard: React.FC = () => {
  return (
    <section className="p-3">
      <figure className="flex mx-auto items-center container p-6 h-96 bg-black lg:p-0 lg:gap-10">
        <img src="https://placehold.co/500x400/d2d2d2/222" className="hidden lg:block lg:h-full" />
        <div className="flex flex-col text-center text-neutral space-y-24 lg:text-left lg:justify-center">
          <h5 className="text-3xl lg:text-5xl lg:tracking-wide">The best way to wireframe a website.</h5>
          <figcaption>
            <div className="hover:text-secondary hover:cursor-pointer">
              <span>Read More</span>
            </div>
          </figcaption>
        </div>
      </figure>
    </section>
  );
};

export default BlogCard;
