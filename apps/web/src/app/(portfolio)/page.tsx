import { prisma } from "@portfolio/db";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { SiHackerone } from "react-icons/si";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-semibold tracking-tighter">Work Experience</h1>

      <div className="max-w-2xl">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-5 items-center">
            <div className="rounded-full border-black/5 border w-16 h-16 items-center flex justify-center"></div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Rap La Rue</h2>
              <h3 className="text-sm">Senior Lead Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
