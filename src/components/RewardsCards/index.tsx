import React, { ReactNode } from "react";
import Image from "next/image";

const cardsConfig = [
    {
        imageSource: '/images/reward1.png',
        description: React.createElement(
                'p',
                { className: 'text-[19px] min-[780px]:text-[21px] text-black/70' },
                React.createElement('span', { className: 'font-bold' }, 'Get your complete order for free'),
                ' by registering with an insurance company'
            )
    },
    {
        imageSource: '/images/reward2.png',
        description: React.createElement(
            'p',
            { className: 'text-[19px] min-[780px]:text-[21px] text-black/70' },
            React.createElement('span', { className: 'font-bold' }, 'Get your delivery fee waived off'),
            ' by registering for a gym membership'
        )
    },
    {
        imageSource: '/images/reward3.png',
        description: React.createElement(
            'p',
            { className: 'text-[19px] min-[780px]:text-[21px] text-black/70' },
            React.createElement('span', { className: 'font-bold' }, 'Get 30% discount on the order'),
            ' by subscribing for an entertainment platform'
        )
    }
];

export default function RewardsCards() {

    return (
        <div className="flex flex-col gap-10 items-center w-[80%] mx-auto my-20 py-10">
            
            <div className="relative w-full flex justify-center items-center">
                <div className="absolute top-[-60%] left-[-5%] min-[500px]:left-[1%] w-[40px] min-[600px]:w-[50px] min-[800px]:w-[60px] min-[880px]:w-[70px]">
                    <Image
                        className=""
                        src={'/heart.svg'}
                        width={0}
                        height={0}
                        style={{ width: "100%" }}
                        sizes="100vw"
                        alt="reward"
                    />
                </div>
                <div className="absolute top-[0%] right-[-5%] min-[500px]:right-[1%] w-[40px] min-[600px]:w-[50px] min-[800px]:w-[60px] min-[880px]:w-[70px]">
                    <Image
                        className=""
                        src={'/gift.svg'}
                        width={0}
                        height={0}
                        style={{ width: "100%" }}
                        sizes="100vw"
                        alt="reward"
                    />
                </div>
                <p className="text-3xl min-[600px]:text-5xl min-[720px]:text-6xl min-[1000px]:text-7xl font-bold">Risk-free rewards <br></br> users want to click</p>
            </div>

            <div className="flex flex-col min-[880px]:flex-row max-[720px]:items-center justify-between flex-wrap md:flex-nowrap gap-4">
                {
                    cardsConfig.map((card, index) => {
                        return <RewardCard {...card} key={index} />
                    })
                }
            </div>

        </div>
    );

}

interface RewardCardProps {
    description: ReactNode;
    imageSource: string;
}

function RewardCard(props: RewardCardProps) {

    const {description, imageSource} = props;

    return (
        <div className=" w-[80%] min-[600px]:w-[60%] min-[720px]:w-full min-[880px]:w-[32%] bg-black rounded-xl">
            <div className="flex flex-col min-[720px]:flex-row min-[880px]:flex-col gap-6 rounded-xl font-agrandir p-4 border border-black bg-white translate-y-[-2px] translate-x-[-2px] h-full">
                <div className="w-full min-[720px]:w-[50%] min-[880px]:w-full">
                    <Image
                        className=""
                        src={imageSource}
                        width={0}
                        height={0}
                        style={{ width: "100%" }}
                        sizes="100vw"
                        alt="reward"
                    />
                </div>
                <div className="flex flex-col gap-6 flex-1">
                    {description}
                    <div className="max-w-[fit-content] font-agrandir rounded-xl px-6 py-[6px] border border-black bg-[#ADF0F2] font-bold min-[880px]:mt-auto">
                        <p className="font-agrandir text-[18px] min-[780px]:text-[21px]">
                            CLAIM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}