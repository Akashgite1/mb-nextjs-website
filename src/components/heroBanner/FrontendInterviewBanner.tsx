import { frontendInterviewBannerData } from "./frontendInterviewBannerData";

export default function FrontendInterviewBanner() {
  const data = frontendInterviewBannerData;

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#6366f1] via-[#755cf2] to-[#8657f2] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
        <div className="grid w-full grid-cols-1 items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex max-w-xl items-center rounded-lg border border-cyan-200 bg-white px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm">
              <span className="mr-2 h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <span>{data.badge}</span>
            </div>

            <h1 className="mx-auto max-w-xl text-center text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:mx-0">
              {data.title} <br />
              {data.titleHighlight}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-white/85 lg:mx-0">
              {data.description}
            </p>

            <div className="mx-auto mt-8 max-w-xl rounded-md bg-indigo-500/35 px-5 py-4 text-center text-sm font-bold shadow-sm backdrop-blur lg:mx-0">
              {data.liveNotice}
            </div>

            <div className="mt-10 flex justify-center gap-4 lg:justify-start">
              {data.logos.map((logo) => (
                <LogoCard key={logo.id} label={logo.label} dark={logo.dark} />
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-xl space-y-4 lg:mx-0">
              <button className="w-full rounded-xl bg-white px-6 py-5 text-base font-extrabold text-indigo-600 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
                {data.buttons.prepKit}
              </button>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button className="rounded-xl border-2 border-white/80 px-6 py-5 text-base font-extrabold text-white transition hover:bg-white/10">
                  {data.buttons.mentorship}
                </button>

                <button className="rounded-xl bg-emerald-500 px-6 py-5 text-base font-extrabold text-white shadow-lg transition hover:bg-emerald-600">
                  {data.buttons.waitlist}
                </button>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/25 bg-white/10 p-6 text-left backdrop-blur lg:mx-0">
              <div className="flex gap-5">
                <div className="text-4xl">{data.questionBox.icon}</div>

                <div>
                  <h3 className="font-extrabold">{data.questionBox.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    {data.questionBox.description}
                  </p>

                  <button className="mt-5 rounded-lg bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600">
                    {data.questionBox.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:pt-2">
            <div className="rounded-3xl bg-white/20 p-2 shadow-2xl backdrop-blur-md">
              <img
                src={data.mentor.image}
                alt={data.mentor.name}
                className="h-[340px] w-[260px] rounded-2xl object-cover"
              />
            </div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-white drop-shadow-lg">
              {data.mentor.name}
            </h2>

            <p className="mt-2 text-center text-white/80">
              {data.mentor.role}
            </p>

            <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-4">
              {data.stats.map((stat) => (
                <InfoCard
                  key={stat.id}
                  icon={stat.icon}
                  title={stat.title}
                  value={stat.value}
                />
              ))}
            </div>

            <div className="mt-8 w-full max-w-md rounded-2xl border border-white/25 bg-white/10 p-6 text-center backdrop-blur">
              <h3 className="text-xl font-extrabold">
                {data.mentorship.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/80">
                {data.mentorship.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoCard({
  label,
  dark = false,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white text-sm font-extrabold text-slate-900 shadow-md">
      <span
        className={
          dark
            ? "rounded bg-black px-2 py-1 text-[9px] text-white"
            : "text-2xl text-indigo-600"
        }
      >
        {label}
      </span>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/30 bg-white/10 p-4 text-center backdrop-blur">
      <div className="text-2xl">{icon}</div>
      <p className="mt-2 text-xs text-white/70">{title}</p>
      <p className="mt-2 text-sm font-extrabold sm:text-base">{value}</p>
    </div>
  );
}