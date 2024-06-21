import Brands from "../Brands";
import InfoCard from "../InfoCard";

const infoCards = [
    {
      title: 'CHECKOUT PARTNERS',
      info: 'Grow lifetime revenue at zero cost through Persona’s checkout flywheel!!!',
      description: 'Subsidize your user’s checkout all sponsored by Persona’s advertising partners.',
      reverse: true,
      color: 'bg-cyan-300'
    },
    {
      title: 'ADVERTISERS',
      info: 'Target high intent users on the checkout pages of our partner websites.',
      description: 'Pay only for conversions, not impressions. A portion of your payment subsidizes the user\'s checkout experience on our partner websites—making users love your brand!',
      reverse: false,
      color: 'bg-violet-400'
    },
    {
      title: 'FOR USERS',
      info: 'Users love us and therefore love you',
      description: 'You care about user experience, we get it. Don’t worry, they win, BIG! They receive direct financial rewards without being annoyed.',
      reverse: true,
      color: 'bg-pink-300'
    }
  ]

export default function BrandsAndInfo() {

    return (
        <div className="w-full bg-blue bg-gradient-to-b from-white to-white via-cyan-200">
            <Brands />
            <div className="flex flex-col gap-20 py-20">
            {
                infoCards.map((infoCard, index) => {
                    return <InfoCard {...infoCard} key={index} />
                })
            }
            </div>
        </div>
    );

}