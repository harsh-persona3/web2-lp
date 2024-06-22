import Brands from "../Brands";
import InfoCard from "../InfoCard";

const infoCards = [
    {
      title: 'CHECKOUT PARTNERS',
      info: 'Grow lifetime revenue at zero cost through Persona’s checkout flywheel!!!',
      description: 'Subsidize your user’s checkout all sponsored by Persona’s advertising partners.',
      reverse: true,
      color: 'bg-cyan-300',
      source: 'info1'
    },
    {
      title: 'ADVERTISERS',
      info: 'Target high intent users on the checkout pages of our partner websites.',
      description: 'Pay only for conversions, not impressions. A portion of your payment subsidizes the user\'s checkout experience on our partner websites—making users love your brand!',
      reverse: false,
      color: 'bg-violet-400',
      source: 'info2'
    },
    {
      title: 'FOR USERS',
      info: 'Users love us and therefore love you',
      description: 'You care about user experience, we get it. Don’t worry, they win, BIG! They receive direct financial rewards without being annoyed.',
      reverse: true,
      color: 'bg-pink-300',
      source: 'info3'
    }
  ]

export default function BrandsAndInfo() {

    return (
        <div className="w-full bg-blue bg-gradient-to-b from-white to-white via-cyan-200">
            <Brands />
            <div className="flex flex-col gap-40 px-10 py-10">

          <div className={`flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-10"`}>
            <div className="w-4/5 md:w-1/2 pl-auto flex items-center justify-center">
              <div className="flex flex-col text-center md:text-left items-center md:items-start gap-8 w-4/5">
                <div className="max-w-[fit-content] flex-none border border-black z-10">
                  <div className={`max-w-[fit-content] py-4 px-4 bg-cyan-300 bg-opacity-60 transition-transform transform translate-y-[6px] translate-x-[6px]`}>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold">{infoCards[0].title}</p>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl lg:text-[40px] font-bold lg:leading-[50px]">
                  {infoCards[0].info}
                </p>
                <p className="text-lg md:text-lg lg:text-[26px] lg:leading-[36px]">
                  {infoCards[0].description}
                </p>
              </div>
            </div>
            <div className="flex w-4/5 md:w-1/2 items-center justify-center">
              <img src={`/images/info1.png`} className="w-4/5" />
            </div>
          </div>

          <div className={`flex flex-row-reverse flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-10"`}>
            <div className="w-4/5 md:w-1/2 pl-auto flex items-center justify-center">
              <div className="flex flex-col text-center md:text-left items-center md:items-start gap-8 w-4/5">
                <div className="max-w-[fit-content] flex-none border border-black z-10">
                  <div className={`max-w-[fit-content] py-4 px-4 bg-violet-400 bg-opacity-60 transition-transform transform translate-y-[6px] translate-x-[6px]`}>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold">{infoCards[1].title}</p>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl lg:text-[40px] font-bold lg:leading-[50px]">
                  {infoCards[1].info}
                </p>
                <p className="text-lg md:text-lg lg:text-[26px] lg:leading-[36px]">
                  {infoCards[1].description}
                </p>
              </div>
            </div>
            <div className="flex w-4/5 md:w-1/2 items-center justify-center">
              <img src={`/images/info2.png`} className="w-1/2" />
            </div>
          </div>

          <div className={`flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-10"`}>
            <div className="w-4/5 md:w-1/2 pl-auto flex items-center justify-center">
              <div className="flex flex-col text-center md:text-left items-center md:items-start gap-8 w-4/5">
                <div className="max-w-[fit-content] flex-none border border-black z-10">
                  <div className={`max-w-[fit-content] py-4 px-4 bg-pink-300 bg-opacity-70 transition-transform transform translate-y-[6px] translate-x-[6px]`}>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold">{infoCards[2].title}</p>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl lg:text-[40px] font-bold lg:leading-[50px]">
                  {infoCards[2].info}
                </p>
                <p className="text-lg md:text-lg lg:text-[26px] lg:leading-[36px]">
                  {infoCards[2].description}
                </p>
              </div>
            </div>
            <div className="flex w-4/5 md:w-1/2 items-center justify-center">
              <img src={`/images/info1.png`} className="w-4/5" />
            </div>
          </div>

            </div>
        </div>
    );

}