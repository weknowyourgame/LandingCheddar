/* eslint-disable */

import { Twitter } from "@/app/components/icons";
import { GlareCard } from "./CardPatterns/Glare";
import React from "react";
import { MessageCircle, Search } from "lucide-react";

export default function FUIFeatureSectionWithCards() {
	const features = [
		{
			icon: <MessageCircle className="w-5 h-5" />,
			title: "Blinks Trading",
			desc: "Buy and sell coins seamlessly inside the Telegram group chat, without leaving the app.",
		  },
		  {
			icon: <Search className="w-5 h-5" />,
			title: "Share Alpha",
			desc: "Share trade opportunities with the community, allowing others to execute trades directly within Telegram.",
		  },
		  {
			icon: <Twitter className="w-5 h-5" />,
			title: "Referral Rewards",
			desc: "Earn referral bonuses or commissions when someone executes a trade using your shared insights.",
		  },
		  {
			icon: (
			  <svg
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="16"
			  >
				<path d="M13 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1ZM2 2h10v8H8v4H2V2Z" />
			  </svg>
			),
			title: "Live Trade Canvas",
			desc: "Visualize trade opportunities in a 2D canvas, track trends, and execute real-time market moves.",
		  },
		  {
			icon: <Search className="w-5 h-5" />,
			title: "Real-time Market Data",
			desc: "Get live updates on market movements, helping you make informed trading decisions quickly.",
		  },
		  {
			icon: (
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				className="w-5 h-"
			  >
				<path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
			  </svg>
			),
			title: "AI Trade Assistant",
			desc: "Get personalized trade suggestions based on your historical trading data and market trends.",
		  },		  
	];

	return (
		<section className="relative z-20 pb-14">
			<div className="px-4 mx-auto max-w-screen-xl text-gray-400 md:px-8 lg:px-0">
				<div className="relative mx-auto max-w-2xl sm:text-center">
					<div className="relative z-10">
						<h3 className="mt-4 text-3xl font-normal tracking-tighter text-gray-200 sm:text-4xl md:text-5xl font-geist"></h3>
					</div>
					<div
						className="absolute inset-0 mx-auto max-w-xs h-44 blur-[118px]"
						style={{
							background:
								"linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
						}}
					></div>
				</div>
				<div className="relative z-20 mt-[4rem]">
					<ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((item, idx) => (
							<GlareCard key={`l-${idx}`}>
								<li
									key={idx}
									className="z-20 transform-gpu space-y-3 rounded-xl border  border-white/10 bg-transparent/20 p-4 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
								>
									<div className="w-fit transform-gpu rounded-full p-4 text-purple-600 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
										{item.icon}
									</div>
									<h4 className="text-lg font-bold tracking-tighter text-gray-300 font-geist">
										{item.title}
									</h4>
									<p className="text-gray-500">{item.desc}</p>
								</li>
							</GlareCard>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
