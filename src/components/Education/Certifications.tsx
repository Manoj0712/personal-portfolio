import { certifications } from "./education";

export default function Certifications() {
  return (
    <section className="mx-auto max-w-[912px] px-5 pb-[30px] pt-[60px] text-center md:pt-[100px]">
      <h2 className="mb-5 text-[28px] font-bold md:text-[38px]">Certifications</h2>
      <p className="text-[15px] text-[#b6bcc9] md:text-lg">
        Professional certifications and continuous learning achievements
      </p>
      <div className="mb-[50px] mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mb-20 md:mt-[60px]">
        {certifications.map((c) => (
          <div key={c.title} className="rounded-[22px] border border-white/10 bg-[rgba(20,24,40,.7)] px-6 py-[38px] text-center">
            {c.image ? (
              <img src={c.image} alt={c.title} className="mx-auto mb-5 h-[54px] w-[54px] rounded-xl object-cover" />
            ) : (
              <div className="mx-auto mb-5 h-[54px] w-[54px] rounded-xl" style={{ background: `linear-gradient(135deg,${c.gradient})` }} />
            )}
            <h3 className="mb-1.5 text-lg font-semibold">{c.title}</h3>
            <small className="text-sm text-gray-400">{c.issuer} · {c.year}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
