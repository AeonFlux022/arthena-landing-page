const Hero = () => {
  return (
    <>
    <header className="h-dvh bg-center bg-cover bg-primary text-white">
      <section className="flex h-full px-0 text-center">
        <div className="flex flex-col justify-center text-center w-full mx-auto px-4 md:px-6 lg:px-8 lg:w-6/12 lg:text-left">
          <h1 className="text-6xl leading-[4rem]">Empowering our student artists.</h1>
          <p className="text-2xl text-balance mt-4">Join our community of emerging artist and share your art to ignite inspiration.</p>
          <button className="bg-secondary text-black font-bold mt-8 p-3 lg:w-44 hover:bg-secondary-dark">Explore Artworks</button>
        </div>
        <div className="flex lg:w-6/12">
          <img src="/patterns.svg" className="object-cover" alt="hero image" />
        </div>
      </section>
    </header>
    </>
  )
}

export default Hero;