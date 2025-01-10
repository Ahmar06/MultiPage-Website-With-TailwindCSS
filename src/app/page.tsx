import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="hero" style={{backgroundImage:"url(bg.jpg)"}}>
      <div>
        <h1 className="fade-in">Welcome To Watch World</h1>
        <p>Your one stop shop for the best</p>
        <button>Shop Now</button>
      </div>
      </section>
    </div>
  );
}
