import { db } from "@portfolio/db";
import { Button } from "@portfolio/ui/button";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ProjectScope from "./_components/project-scope";

export default async function Layout({ children }: PropsWithChildren) {
  const portfolio = await db.portfolio.findFirst();

  if (!portfolio)
    notFound();

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-center h-10 text-xs tracking-tight bg-black/5 text-black">
        This portfolio is open source! Check it out.
      </div>

      <main className="flex flex-1 flex-row">
        <div className="sticky top-0 flex h-dvh w-64 shrink-0 flex-col gap-4   px-2 py-8 t-12 max-lg:hidden border-r border-black/5 shadow-sm">
          <div className="flex flex-col">
            <h2 className="py-2 px-3 text-sm uppercase font-semibold">Start</h2>
            <Button size={"sm"}>About me</Button>
          </div>

          <div className="flex flex-col">
            <h2 className="py-2 px-3 text-sm uppercase font-semibold">Projects</h2>
            <ProjectScope techStack={["Next.js", "Prisma"]}>Rap La Rue</ProjectScope>
            <ProjectScope techStack={["C++", "D3D11"]}>TRILOGYS:MP</ProjectScope>
          </div>
        </div>

        <div className="flex flex-1 min-w-0 flex-col gap-10 container py-16 max-w-6xl">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2">
              <h1 className="text-6xl font-bold tracking-tighter">
                {portfolio.firstName} {portfolio.lastName}
              </h1>

              <FaLinkedin className="w-8 h-8 text-[#007EBB]" />
              <FaGithub className="w-8 h-8" />
            </div>

            <h2 className="text-2xl max-w-xl tracking-tighter text-foreground/70 font-medium">
              {portfolio.description}
            </h2>
          </div>

          {children}
        </div>


      </main>
    </div>
  );
}