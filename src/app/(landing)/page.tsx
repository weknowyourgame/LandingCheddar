/* eslint-disable */

import RotatingIcons from "./RotatingIcons";
import Hero from "./Hero";
import { Navbar } from "./Navbar";
import Cta from "./Cta";
// import { Toaster } from "../../../../packages/ui/shadcn/toaster";
import Features from "./Features";
import Footer from "./footer";
// import { auth } from "@/server/auth";
import Services from "./Features/index";
import { Showcases } from "./Showcase";
import BackgroundPlus from "./GridPatterns/PlusGrid";
import { redirect } from "next/navigation";
import { GridBackground } from "./GridPatterns/Grid";

export const runtime = "edge";

export default async function Home() {
	// const user = await auth();

	// if (user) {
		// await redirect("/home");
	// }

	return (
		<>
			{/* <GridBackground /> */}
			<main className="flex overflow-x-hidden relative flex-col items-center px-2 min-h-screen md:px-0 font-geistSans bg-hero-gradient">
				<div className="absolute top-0 -z-10 min-h-screen w-screen overflow-hidden bg-inherit bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(255,255,204,0.3),rgba(255,255,255,0))]"></div>

				<Navbar />

				{/* Background gradients */}
				<div className="absolute top-0 left-0 w-full h-full z-[-1]">
					<div className="overflow-x-hidden">
						<div
							className="absolute left-0 h-32 w-[95%] overflow-x-hidden bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 bg-opacity-70 blur-[337.4px]"
							style={{ transform: "rotate(-30deg)" }}
						/>
					</div>

					{/* a yellow gradient line that's slightly tilted with blur */}
					{/* <div className="overflow-x-hidden overflow-y-hidden">
						<div
							className="absolute left-0 top-[100%] h-32 w-[90%] overflow-x-hidden bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-opacity-40 blur-[337.4px]"
							style={{ transform: "rotate(-30deg)" }}
						/>
					</div> */}

					{/* <div className="overflow-x-hidden overflow-y-hidden">
						<div className="absolute right-0 top-[145%] h-40 w-[17%] overflow-x-hidden bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-opacity-20 blur-[110px]" />
					</div> */}
				</div>

				{/* Hero section */}
				<Hero />
				<Showcases />
				<Services />

				{/* Features section */}
				<Features />

				<RotatingIcons />
				<Cta />

				{/* <Toaster /> */}
				<Footer />
			</main>
		</>
	);
}
