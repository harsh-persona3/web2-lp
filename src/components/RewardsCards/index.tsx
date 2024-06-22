import React, { ReactNode } from "react";

const cardsConfig = [
    {
        imageSource: '/images/reward1.png',
        description: React.createElement(
                'p',
                { className: 'text-2xl' },
                React.createElement('span', { className: 'font-bold' }, 'Get your complete order for free'),
                ' by registering with an insurance company'
            )
    },
    {
        imageSource: '/images/reward1.png',
        description: React.createElement(
            'p',
            { className: 'text-2xl' },
            React.createElement('span', { className: 'font-bold' }, 'Get your delivery fee waived off'),
            ' by registering for a gym membership'
        )
    },
    {
        imageSource: '/images/reward3.png',
        description: React.createElement(
            'p',
            { className: 'text-2xl' },
            React.createElement('span', { className: 'font-bold' }, 'Get 30% discount on the order'),
            ' by subscribing for an entertainment platform'
        )
    }
];

export default function RewardsCards() {

    return (
        <div className="flex flex-col gap-20 items-center w-[80%] mx-auto">
            
            <div className="">
                <p className="text-6xl font-bold">Risk-free rewards <br></br> users want to click</p>
            </div>

            <div className="flex flex-row justify-between">
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
        <div className="w-[32%] bg-black rounded-xl">
            <div className="flex flex-col gap-5 rounded-xl font-agrandir p-4 border border-black bg-white translate-y-[-4px] translate-x-[-4px] h-full">
                <img src={imageSource} className="w-full"></img>
                <p className="text-2xl">{description}</p>
                <div className="max-w-[fit-content] font-agrandir text-2xl rounded-xl px-6 py-2 border border-black bg-cyan-300 font-bold mt-auto">
                    <p className="font-agrandir">
                        CLAIM
                    </p>
                </div>
            </div>
        </div>
    );

}