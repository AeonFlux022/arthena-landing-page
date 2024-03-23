const BlogCard: React.FC = () => {
  return (
    <section className="p-3">
      <figure className="flex mx-auto items-center container p-6 h-96 mb-4 bg-black lg:p-0 lg:gap-10">
        <img
          src="https://placehold.co/500x400/d2d2d2/222"
          className="hidden lg:block lg:h-full"
        />
        <div className="flex flex-col text-center text-neutral lg:text-left lg:justify-center">
          <span className="mb-4">John Doe</span>
          <figcaption className="space-y-24">
            <h5 className="text-3xl lg:text-5xl lg:tracking-wide">
              The best way to wireframe a website.
            </h5>
            <div className="hover:text-secondary hover:cursor-pointer">
              <span>Read More</span>
            </div>
          </figcaption>
        </div>
      </figure>
      <div className="container mx-auto gap-4 grid lg:grid-cols-2">
        <div className="bg-white shadow-lg h-auto p-6 space-y-4 flex flex-col">
          <h1 className="text-xl">
            Keys to writing copy that actually converts and sells users
          </h1>
          <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor parturient
          </span>
        </div>
        <div className="bg-white shadow-lg h-auto p-6 space-y-4 flex flex-col">
          <h1 className="text-xl">
            Keys to writing copy that actually converts and sells users
          </h1>
          <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor parturient
          </span>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
