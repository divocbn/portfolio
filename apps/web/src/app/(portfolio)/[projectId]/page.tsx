import Image from "next/image";

type TargetProjectParams = {
  params: { projectId: string }
}

export default function TargetProject({ params }: TargetProjectParams) {
  const technologies = ["Next.js", "Tailwind", "Prisma", "Mux", "Serverside Rendering", "Vercel", "Zod"];
  return (
    <div className="flex flex-col gap-10 max-w-3xl">
      <div className="py-4 px-6 bg-black/5 rounded">
        <h2 className="text-xl font-semibold">Note:</h2>
        Due to nondisclosure agreements, some project details may not be included.
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl max-w-md font-semibold tracking-tight">Project Showcase Rap La Rue</h1>
          <div className="flex flex-row gap-5 items-center">
            <p className="text-3xl font-semibold text-black/20">01</p>
            <h1 className="text-3xl font-semibold tracking-tighter">Description</h1>
          </div>

          <h3 className="text-base tracking-tight max-w-2xl">
            As a senior developer for Rap La Rue, I designed & developed a high-performance, scalable application platform & administration interface for application evaluation, analyzation, etc.
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          <Image
            src={`/images/projects/web.png`}
            className="rounded invert border border-white/10"
            width={850}
            height={0}
            alt="Rap La Rue Project Image"
          />
          <h2 className="text-xs uppercase text-black/50 tracking-wide font-medium">Administration dashboard with application statistics & user count</h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-5 items-center">
            <p className="text-3xl font-semibold text-black/20">02</p>
            <h1 className="text-3xl font-semibold tracking-tighter">Technology Stack</h1>
          </div>

          <div className="flex flex-row flex-wrap gap-5 max-w-3xl">
            {technologies.map(technology =>
              <div className="flex flex-row gap-3 items-center" key={technology}>
                <div className="w-6 h-6 bg-black/10 rounded-full" />
                <p className="font-medium text-2xl tracking-tight">{technology}</p>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
}