import { db } from "@portfolio/db";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default async function Layout({ children }: PropsWithChildren) {
  const portfolio = await db.portfolio.findFirst();

  if (!portfolio)
    notFound();

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-center h-10 text-xs tracking-tight bg-black/5 text-black">
        This portfolio is open source! Check it out.
      </div>

      <main className="container h-screen py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2">
              <h1 className="text-6xl font-bold tracking-tighter">
                { portfolio.firstName } { portfolio.lastName }
              </h1>

              <FaLinkedin className="w-8 h-8 text-[#007EBB]" />
              <FaGithub className="w-8 h-8" />
            </div>

            <h2 className="text-2xl max-w-xl tracking-tighter text-foreground/70 font-medium">
              { portfolio.description }
            </h2>
          </div>

          {children}
        </div>
      </main>
    </div>
  );
}