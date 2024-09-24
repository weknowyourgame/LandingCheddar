/* eslint-disable */

"use client";

import { motion } from "framer-motion";
import {
	Discord,
	Github,
	Instagram,
	Medium,
	Notion,
	Reddit,
	Telegram,
	Twitter,
	WhatsApp,
} from "@/app/components/icons";
import { FAQ } from "@/app/components/FAQ";

const icons = [
	<div className="rounded-full bg-purple-600/20 p-4">
		<Discord className="h-8 w-8 text-purple-500" />
	</div>,
	<div className="rounded-full bg-blue-800/20 p-4">
		<Twitter className="h-8 w-8 text-blue-500" />
	</div>,
	<div className="rounded-full bg-blue-800/20 p-4">
		<Telegram className="h-8 w-8 text-green-500" />
	</div>,
	<div className="rounded-full bg-red-800/20 p-6">
		<Instagram className="h-8 w-8 text-red-500" />
	</div>,
	<div className="rounded-full bg-white/20 p-4">
		<WhatsApp className="h-8 w-8 text-white" />
	</div>,
];

const RotatingIcons: React.FC = () => {
	return (
		<div className="relative flex w-full flex-col items-center justify-center gap-8 px-4 sm:px-6 mt-10">
			<motion.h1
				{...{
					transition: { delay: 0.2 },
				}}
				className="text-center max-w-2xl  mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  bg-clip-text text-4xl tracking-tighter   text-transparent md:text-5xl lg:text-6xl"
			>
				{" "}
				<span className="bg-gradient-to-r from-zinc-300 to-blue-200 bg-clip-text text-transparent">
					FAQs
				</span>
			</motion.h1>
			<div className="flex items-center justify-center w-[1200px]">
					<FAQ/>
						{/* {icons.map((icon, index) => (
							<motion.div
								key={index}
								className="absolute top-1/2 -translate-x-10 transform"
								style={{
									originX: "200px",
									originY: "-8px",
								}}
								animate={{
									rotate: [0, 360],
								}}
								transition={{
									repeat: Infinity,
									duration: 5,
									ease: "linear",
									delay: index,
								}}
							>
								<motion.div
									style={{
										rotate: index * 72,
									}}
									animate={{
										rotate: [0, -360],
									}}
									transition={{
										repeat: Infinity,
										duration: 5,
										ease: "linear",
										delay: index,
									}}
								>
									{icon}
								</motion.div>
							</motion.div>
						))}
						<Image
							src="/CheddarLogo.svg"
							alt="Cheddar logo"
							width={80}
							height={80}
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
						/>
					*/}
					</div>
				</div>
	);
};

export default RotatingIcons;
