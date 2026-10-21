const Background = () => {

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="absolute left-0 top-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-600/20 mix-blend-screen blur-[120px]" />
      <div className="absolute right-0 top-[40%] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-600/20 mix-blend-screen blur-[120px] [animation-delay:1s]" />
      <div className="absolute bottom-[20%] left-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-indigo-600/15 mix-blend-screen blur-[100px] [animation-delay:.5s]" />
      <div className="absolute bottom-0 right-1/3 h-[300px] w-[300px] animate-pulse rounded-full bg-cyan-600/10 mix-blend-screen blur-[80px] [animation-delay:.7s]" />
    </div>
  );
}

export default Background;
