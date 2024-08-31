import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { SiHackerone } from "react-icons/si";

import * as React from "react"
import Image from "next/image";
import { db } from "@portfolio/db";

import dashify from "dashify";

export default async function WorkExperience() {
  const experiences = await db.experience.findMany();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-semibold tracking-tighter">Work Experience</h1>

      <div className="max-w-2xl">
        {experiences.map(experience =>
          <div
            key={experience.id}
            className="flex flex-col">
            <div className="flex flex-row gap-5 items-start justify-between">
              <div className="flex flex-row gap-5">
                <div className="rounded-full border-black/5 border w-16 h-16 p-3 items-center flex justify-center relative">
                  <Image
                    src={`/images/work/${dashify(experience.company)}.png`}
                    className="invert"
                    width={100} height={0}
                    alt="RapLaRue Work Experience Logo" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold">{experience.company}</h2>
                  <h3 className="text-sm">{experience.title}</h3>
                </div>
              </div>
              <p className="tracking-tight text-sm text-black/60">
                {`${experience.from.toLocaleDateString('default', { month: 'long', year: 'numeric' })} - ${experience.to?.toLocaleDateString('default', { month: 'long', year: 'numeric' })}`}
              </p>
            </div>

            <div className="text-xs max-w-xl ml-[5.25rem]">
              {experience.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
