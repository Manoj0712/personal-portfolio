const CornerBrackets = () => {

  return (<>
    <div className="absolute left-6 top-6 h-12 w-12 border-l-2 border-t-2 border-purple-500/40" />
    <div className="absolute right-6 top-6 h-12 w-12 border-r-2 border-t-2 border-cyan-500/40" />
    <div className="absolute bottom-6 left-6 h-12 w-12 border-b-2 border-l-2 border-cyan-500/40" />
    <div className="absolute bottom-6 right-6 h-12 w-12 border-b-2 border-r-2 border-purple-500/40" />
    <div
      className="absolute left-0 right-0 h-px"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)",
        animation: "scan 3s linear infinite",
      }}
    />
  </>
  )
}

export default CornerBrackets;