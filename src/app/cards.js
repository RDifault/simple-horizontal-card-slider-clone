import Image from "next/image";
import content from "./data";

export default function Cards() {
  return (
    <>
      {content.cards.map((card) => (
        <div
          key={card.id}
          className="relative group top-10 transition duration-200 ease-in border translate-y-[40px] flex rounded-t-[30px] rounded-b-[30px] sm:rounded-b-[0px] w-[80vw] sm:min-w-[45vw] lg:min-w-[28vw] sm:h-[80vh] mr-0 mb-10 sm:mr-8 hover:translate-y-[1px]"
        >
          <div>
            <Image
              src={card.image}
              alt="hero"
              width={600}
              height={600}
              quality={100}
              className="relative rounded-t-[30px] object-cover h-[65%] z-10"
            />
            <div className="p-4 xs:p-8 z-10 flex flex-col">
              <p className="text-2xl xs:text-3xl font-[600] z-10">{card.title}</p>
              <p className="text-sm xs:text-xl text-gray-600 pt-2 xs:pt-6 font-medium z-10">
                {card.content}
              </p>
              <div className="hidden sm:block transition ease-in-out duration-[350ms] origin-bottom bottom-0 w-full h-[1px] absolute z-0 bg-[#F5F5F7] left-0 sm:group-hover:scale-y-[259]"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
