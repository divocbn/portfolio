"use client"

import { Button } from "@portfolio/ui/button";
import { Badge } from "@portfolio/ui/badge";
import { PropsWithChildren } from "react";

type ProjectScopeProps = {
  techStack: string[]
}

export default function ProjectScope({ children, techStack }: PropsWithChildren<ProjectScopeProps>) {
  return (
    <Button size={"sm"}>
      {children}

      <div className="flex flex-row gap-2 ml-2">
        {techStack.map((stack, index) =>
          <Badge key={index}>
            {stack}
          </Badge>
        )}
      </div>
    </Button>
  );
}