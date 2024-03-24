const CallToAction: React.FC = () => {
  return (
    <section className="bg-gray-100 px-3 py-10 my-10">
      <div className="container mx-auto flex flex-col h-64 py-3 justify-around items-center lg:flex lg:flex-row lg:gap-4">
        <div className="flex flex-col text-center mb-6 space-y-3 lg:w-1/2 lg:text-left">
          <h1 className="text-4xl lg:text-5xl ">Ready to get started?</h1>
          <span className="text-2xl">Sign up or contact us.</span>
        </div>
        <div className="flex flex-col w-full justify-center lg:w-1/2 lg:flex-row gap-4">
          <button className="bg-primary text-neutral w-full lg:w-60 px-8 py-3 hover:bg-primary-dark">
            Create an Account
          </button>
          <button className="border text-black border-black w-full lg:w-60 px-8 py-3 hover:bg-black hover:border-black hover:text-neutral">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
