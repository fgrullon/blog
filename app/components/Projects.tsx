import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "../projects/data";
import TypeAnimation from "./TypeAnimation";
import GradientBorder from "./GradientBorder";
import { Project } from "../projects/components/ProjectsGrid";
import Posts from "../components/Posts";

export default () => {
  return (
    <div className="mx-auto max-w-3xl pb-10 text-start">
      <div className="mb-6 flex items-center gap-4">
        {/* <GradientBorder rounded="rounded-full" padding="p-1">IMAGE</GradientBorder> */}
        <Image
          className="border-2 border-black h-full select-none rounded-[100px] shadow transition-all hover:rounded-l-[10px] hover:shadow-lg active:translate-x-1 max-md:w-[50px] dark:border-slate-500 drop-shadow-xl shadow-black"
          src="/images/profile.jpg"
          alt="Leon image"
          width={130}
          height={130}
          priority
          draggable={false}
        />

        <div className="flex flex-col gap-1 max-md:gap-0">
          <span className="text-4xl font-extrabold leading-none transition-all max-md:text-xl">
            Frank Grullon
          </span>
          <Employment
            title="Information Systems Manager"
            companyName="Scotiabank"
            companyUrl="https://scotiabank.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          👋{" "}
          <TypeAnimation
            cursor={false}
            deletionSpeed={1}
            sequence={["Hello there!", 2000, "Hello, I am Frank Grullon."]}
          />
        </div>

        {/* WORK */}
        <div>
          I currently work as MIS at{" "}
          <Link
            href="https://scotiabank.com"
            target="_blank"
            className="inline-flex items-baseline underline-offset-2 hover:underline"
            draggable={false}
          >
            <span className="font-semibold underline-offset-2 hover:underline">
              Scotiabank
            </span>
          </Link>
          , where i manage the development and maintenace of the web tools that
          the unit uses for daily activities.
        </div>

        {/* DEV */}
        <div>
          My primary areas of interest are web development and Discord bots.
          Feel free to{" "}
          <Link
            href="/projects"
            className="font-semibold underline-offset-2 hover:underline"
          >
            browse all my projects!
          </Link>
        </div>

        <Posts />

        {/* RESUME */}
        <div className="flex flex-col gap-1">
          <span className="mt-2 text-xl font-semibold">
            Want to learn more?
          </span>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[{ title: "Open English Resume", url: "/cv" }].map(
              ({ title, url }) => (
                <GradientBorder
                  key={title}
                  rounded="rounded-[6px]"
                  padding="p-[2px]"
                  hoverable
                >
                  <Link
                    href={url}
                    target="_blank"
                    className="flex items-center justify-between rounded bg-slate-100 p-2 dark:bg-kinda-black"
                  >
                    <div>
                      <i className="fa-solid fa-file-text fa-lg fa-fw me-1" />
                      <span>{title}</span>
                    </div>
                    <i className="fa-solid fa-external-link dark:text-kinda-white" />
                  </Link>
                </GradientBorder>
              )
            )}
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="flex flex-col gap-1">
          <span className="mt-2 text-xl font-semibold">
            Featured{" "}
            <Link
              href="/projects"
              className="underline-offset-2 hover:underline"
            >
              projects
            </Link>
          </span>
          <div className="flex flex-col gap-2">
            <Project project={projects[17]} displayTags={false} />
            <Project project={projects[7]} displayTags={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Employment = ({
  title,
  companyName,
  companyUrl,
}: {
  title: string;
  companyName?: string;
  companyUrl?: string;
}) => {
  return (
    <span className="text-xl transition-all max-md:text-sm">
      {title}
      {companyName && (
        <>
          {" "}
          @{" "}
          <a
            href={companyUrl}
            target="_blank"
            className="underline-offset-2 hover:underline"
            draggable={false}
          >
            {companyName}
          </a>
        </>
      )}
    </span>
  );
};
