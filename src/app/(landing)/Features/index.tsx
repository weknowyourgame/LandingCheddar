/* eslint-disable */
"use client"
import { CheckIcon, ChevronRight, GithubIcon } from "lucide-react";
import { Gradient } from "./features";
import Generating from "./generating";
import Image from "next/image";
import { AnimatedBeamShow } from "../CardPatterns/AnimatedBeamWithOutput";
import service1 from "@/app/public/images/service-1.png";
import vault from "@/app/public/images/landing_vault.png";
import blinks from "@/app/public/blinks.png";
import { motion } from "framer-motion";

const slap = {
	initial: { opacity: 0, scale: 1.1 },
	whileInView: { opacity: 1, scale: 1 },
	transition: { duration: 0.5, ease: "easeInOut" },
	viewport: { once: true },
  };

const Services = () => {
	return (

		<div id="how-to-use">
		<div className="container">
		  <div className="mr-auto max-w-5xl">
			<h1 className="mr-auto text-left font-geistSans tracking-tighter text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
			  Sounds super cool? There's more.
			</h1>
			<p className="mb-10 ml-auto text-lg tracking-tight text-left font-nomral"></p>
		  </div>
  
		  <div className="relative bg-page-gradient">
			<div className="flex overflow-hidden relative items-stretch p-8 mb-5 rounded-3xl border lg:p-20 z-1 h-[55rem] md:h-[45rem] border-white/20 xl:h-[46rem]">
			  <img
				src="/images/tailwind-bg-gradient.avif"
				className="absolute top-0 right-0 opacity-100 z-2"
			  />
			  <img
				src="/images/tailwind-bg-gradient.avif"
				className="absolute top-0 right-0 opacity-100 z-2"
			  />
			  <div className="flex w-full">
				<div className="w-2/5">
				  <Image
					className="object-cover transition-all duration-500 ease-linear transform group-hover:rotate-3"
					width={600}
					alt="Blinks"
					height={800}
					src={blinks}
				  />
				</div>
				<div className="w-3/5 flex items-center justify-start px-20">
				  <motion.div
					{...{ ...slap, transition: { ...slap.transition, delay: 0.2 } }}
					className="flex flex-col">
					<h1 className="bg-[linear-gradient(180deg,_#FFF5E5_0%,_rgba(255,_245,_204,_0.00)_202.08%)] bg-clip-text text-3xl tracking-tighter sm:text-4xl text-transparent md:text-5xl lg:text-6xl mb-4 items-start">
					  Integrated Blinks
					</h1>
					<p className="body-2 mb-[3rem] text-n-3">
						Create and interact with Blinks directly in the app
					
					</p>
				  </motion.div>
				</div>
			  </div>
				
				</div>
					<div className="grid relative gap-5 lg:grid-cols-2 z-1">
						<div className="overflow-hidden flex flex-col md:flex-row md:block relative rounded-3xl border min-h-[34rem] bg-hero-gradient bg-slate-950/10 border-white/10">
							<div className="md:absolute inset-0">
								<div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

							</div>

							<div className="flex md:absolute md:mt-4 lg:-mt-20 inset-0 flex-col md:justify-end justify-center items-center md:items-start p-8 bg-glass-gradient">
								<h4 className="text-3xl tracking-tight mb-2 text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
									Cheddar works everywhere you are.
								</h4>
								{/* <p className="max-w-lg text-lg font-normal tracking-tighter text-gray-400 mb-[3rem]">
									We already have integrations for Telegram and Twitter (X),
									with whatsapp and SMS coming soon. Send Blinks and earn commission on every transaction.
								</p> */}
								<a
									href="/"
									className="inline-flex justify-center items-center py-4 px-10 w-full text-center bg-transparent bg-gradient-to-tr to-transparent rounded-xl transition-colors sm:w-auto mt-[-20px] bg-glass-gradient group from-zinc-300/5 via-gray-400/5 border-white/10 border-[1px] hover:bg-transparent/10"
								>
									Get started
									<ChevronRight className="ml-2 w-4 h-4 duration-300 group-hover:translate-x-1" />
								</a>
							</div>
						</div>

						<div
							style={{
								background:
									"linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(140, 121, 249, 0.3) 60.92%, rgba(140, 121, 249, 0) 80.35%)",
							}}
							className="overflow-hidden relative py-4 rounded-3xl group bg-glass-gradient lg:min-h-[30rem]"
						>
							<div className="relative py-12 px-4 xl:px-8">
								<h4 className="text-3xl tracking-tight mb-2 text-left text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
									Secure and reliable transactions
								</h4>
								<p className="text-lg text-gray-400 body-2 mb-[2rem]">
								Experience secure, lightning-fast transactions that ensure your meme coin trades are always safe and reliable.
								</p>
							</div>

							<div className="overflow-hidden relative rounded-xl h-[20rem] md:h-[25rem]">
								<Image
  									src={vault}
  									className="object-cover w-full h-full transition-all duration-500 ease-linear transform group-hover:rotate-3"
									width={520}
									height={400}
									alt="vault image"
								/>
							</div>

							<Gradient opacity={5} />
						</div>
					</div>

					{/* <div
						style={{
							background:
								"linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(140, 121, 249, 0.2) 40.92%, rgba(140, 121, 249, 0) 80.35%)",
						}}
						className="flex overflow-hidden relative items-center p-8 mt-5 mb-5 rounded-3xl border lg:p-20 bg-page-gradient z-1 h-[38rem] border-white/20 xl:h-[28rem] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
					>
						<img
							src="/images/tailwind-bg-gradient.avif"
							className="absolute top-0 right-0 opacity-60 z-2"
						/>
					</div> */}

					<div className="grid w-full relative lg:grid-cols-2 z-1 py-5 ">
						<div className="overflow-hidden relative rounded-3xl border max-h-[20rem] min-h-[40rem] md:min-h-[33rem] bg-hero-gradient bg-slate-950/10 border-white/10">
							<div className="absolute inset-0">
								<AnimatedBeamShow />
							</div>

							<div className="flex absolute inset-0 flex-col justify-end items-start p-8 pl-10 mt-4 lg:-mt-20 translate-y-10 md:translate-y-0 bg-glass-gradient">
								<h4 className="text-3xl tracking-tight mb-2 text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
								</h4>
								<p className="max-w-lg text-lg font-normal tracking-tighter text-gray-400 mb-[3rem]">
								</p>
							</div>
						</div>

						{/* <div className="overflow-hidden bg-page-gradient relative py-4 rounded-3xl max-h-[33rem] group  lg:min-h-[30rem]">
							<div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
							<Gradient opacity={5} />
						</div> */}
					</div>

					<Gradient />
				</div>
			</div>
		</div>
	);
};

export default Services;
const cheddarPoints = [
	"Privacy focused",
	"Works everywhere you are",
	"Self hostable",
	"Super affordable, with a generous free tier",
];
