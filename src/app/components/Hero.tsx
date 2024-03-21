const Hero = () => {
  return (
    <>
    <header className="h-dvh bg-center bg-cover bg-primary text-white">
      <section className="flex h-full px-0">
        <div className="flex flex-col justify-center pl-14 w-6/12">
          <h1 className="text-6xl leading-[4rem]">Empowering our student artists.</h1>
          <p className="text-2xl text-balance mt-2">Join our community of emerging artist and share your art to ignite inspiration.</p>
          <button className="bg-secondary text-black font-bold w-44 p-4 mt-8">Explore Artworks</button>
        </div>
        <div className="flex w-6/12">
          <img src="/patterns.svg" className="object-cover" />
        </div>
      </section>
    </header>
    </>
  )
}

export default Hero;