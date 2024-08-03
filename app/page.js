import Image from "next/image";

export default function Home() {
  return (
    <main className="grid place-items-center">
      <section className="p-4 px-8 w-4/5 font-bold">
        {/* Introduction */}
        <br/>
        <h3 className="text-3xl" >Hi There👋</h3>
        <br/>
        <div className="text-3xl" >I'm <span className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text" >Ishan Jain</span>. Here you can check out what I am working on. I try my best to create things that can either help people or at least entertain them</div>
        <br/>
        
      </section>

    </main>
  );
}
