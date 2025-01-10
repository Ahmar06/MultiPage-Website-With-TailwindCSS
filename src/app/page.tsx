
export default function Home() {
  return (
    <div>
      <section className="hero h-screen flex items-center bg-cover bg-center" style={{backgroundImage:"url(bg.jpg)"}}>
      <div className="pl-16 text-white text-center">
        <h1 className="fade-in text-6xl font-bold">Welcome To Watch World</h1>
        <p className="text-2xl mt-4">Your one stop shop for the best</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold">Shop Now</button>
      </div>
      </section>
    </div>
  );
}
