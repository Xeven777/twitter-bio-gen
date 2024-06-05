import Output from "@/components/home/Output";
import UserInput from "@/components/home/UserInput";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { BioProvider } from "@/context/BioContext";
import { ChevronRight, Star } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Twitter Bio Generator Built using Next.js",
  description:
    "Generate your perfect Twitter bio with the help of AI. Just answer a few questions and let our AI craft a bio that truly represents you.",
};

export default function Home() {
  return (
    <main className="relative grid  grid-cols-1 slg:grid-cols-2 gap-12  px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:p-24">
      <div className="col-span-full group w-full flex flex-col items-center justify-center space-y-2 sm:space-y-4 mb-4 text-center">
        <Link
          href="https://github.com/codebucks27/AI-Powered-Twitter-Bio-Generator"
          target="_blank"
          className=""
        >
          <AnimatedGradientText className="px-6 py-2 rounded-full">
            <Star className="w-6 h-6 fill-yellow-300 text-yellow-400" />
            <hr className="mx-2 h-4 w-[1px] bg-gray-300" />
            Star on Github
            <ChevronRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </Link>
        <h1 className="font-bold tracking-tight text-4xl md:text-5xl slg:text-6xl text-center w-full max-w-2xl lg:w-[90%] mx-auto pt-4">
          Create the perfect <br />{" "}
          <span className="bg-gradient-to-r from-green-300 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            TWITTER BIO
          </span>{" "}
          <br /> with AI!✨
        </h1>
        <p className=" text-sm sm:text-base  md:text-lg text-muted-foreground">
          Just answer a few questions, and we&apos;ll generate a bio that
          captures who you are.
        </p>
      </div>

      <BioProvider>
        <UserInput />
        <Output />
      </BioProvider>
    </main>
  );
}
