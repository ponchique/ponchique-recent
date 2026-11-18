import type { Project } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
  project: Project;
  views: number;
};

const covers: Record<string, { src: string; width: number; height: number }> = {
  "concrete-chat": {
    src: "/images/taskany.webp",
    width: 4000,
    height: 2800,
  },
  "pet-care-app": {
    src: "/images/boopable.webp",
    width: 1590,
    height: 1272,
  },
  "post-covid-symptoms-assessment-ux-analytics": {
    src: "/images/long-covid-checker.webp",
    width: 1590,
    height: 1272,
  },
};

export const Article: React.FC<Props> = ({ project, views }) => {
  const cover = covers[project.slug];
  return (
    <Link href={`/case-studies/${project.slug}`}>
      <article className="group p-4 md:p-8">
        {cover && (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${cover.src}`}
            alt={project.title}
            width={cover.width}
            height={cover.height}
            className="w-full mb-6 rounded-md"
          />
        )}
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-300 text-zinc-900 group-hover:text-zinc-200 drop-shadow-orange">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { year: "numeric" }).format(new Date(project.date))}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
          {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
            <Eye className="w-4 h-4" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
          </span> */}
        </div>
        <h2 className="z-20 text-xl font-medium duration-800 lg:text-3xl text-zinc-900 group-hover:text-zinc-200 font-display">
          {project.title}
        </h2>
        <p className="z-20 mt-4 text-sm  duration-800 text-zinc-900 group-hover:text-zinc-200">
          {project.description}
        </p>
      </article>
    </Link>
  );
};
