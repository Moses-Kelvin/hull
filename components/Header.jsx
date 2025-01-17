"use client";
import { headerRound } from "../svgs";
import React, { useState } from "react";
import Btn from "./Btn";
import HeaderDropDown from "./HeaderDropDown";
import { headerDrop } from "../data";
import Link from "next/link";

const Header = () => {
	const [selectedHeader, setSelectedHeader] = useState("");


	const dropData = headerDrop();

	return (
		<div className="hidden lg:flex flex-col w-full px-[3.75rem] pt-[1rem] items-end">
			<div className="flex justify-between w-full">
				<Link
					href="/"
					className="flex flex-col text-justify space-y-[10px] mt-[3rem]"
				>
					<span>{headerRound("#2056A7")}</span>
					<h2 className="sf600 text-[10px] leading-[12px] uppercase text-[#68768C] font-[500]">
						Regulatory IMPLEMentation & compliance scheme
					</h2>
					<h2 className="sf600 text-[10px] leading-[12px] uppercase text-[#68768C] font-[500]">
						OCCUPATIONAL SAFETY & HEALTH DEPARTMENT
					</h2>
					<h2 className="sf600 text-[10px] leading-[12px] uppercase text-[#68768C] font-[500]">
						FEDERAL MINISTRY OF LABOUR & EMPLOYMENT
					</h2>
				</Link>
				<Link href="/"
					className="flex flex-col text-center space-y-[10px]  mt-[1rem]">
					<img alt="" className="self-center w-8 h-8" src="/images/logo.jpg" />
					<h2 className='sf500 text-[10px] text-[#68768C] uppercase leading-[12px] tracking-[-0.2px] font-[500]'>
						Technical Consultant
					</h2>
					<h2 className='sf500 text-[10px] text-[#68768C] uppercase leading-[12px] tracking-[-0.2px] font-[500]'>
						Boiler & Pressure Vessel Regulation
					</h2>
					<h2 className='sf500 text-[10px] text-[#68768C] uppercase leading-[12px] tracking-[-0.2px] font-[500]'>
						Lifting & Allied Work Equipment (Safety) Regulation
					</h2>
					<h2 className='sf500 text-[10px] text-[#68768C] uppercase leading-[12px] tracking-[-0.2px] font-[500]'>
						info@ries.gov.ng, www. ries.gov.ng
					</h2>
				</Link>
				<Link className="" href="/signin">
					<Btn text="Sign in" />
				</Link>
			</div>


			<div className='mt-[3rem] flex items-center space-x-[2rem] justify-between pb-[5px]'>
				{dropData?.map((drop, i) => (
					<HeaderDropDown
						header={drop.header}
						drop={drop.drop}
						key={i}
						href={drop.href}
						selectedHeader={selectedHeader}
						setSelectedHeader={setSelectedHeader}
					/>
				))}
			</div>
		</div>
	);
};

export default Header;
