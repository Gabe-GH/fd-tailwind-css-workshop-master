import styles from "../css/card.module.css";

const name = "Gabe Lira";
const degree = "Computer Science";
const year = 2025;

const card_styling =
  " w-3/4 z-20 rounded-[40px] backdrop-blur-[8px] border-[rgba(100,148,237,0.386)] border-2 overflow-hidden h-2/3 max-w-80";

const MobileCardName = () => {
  return (
    <>
      <div className="flex text-gray-200 justify-between items-center px-5 pb-2 -mb-9">
        <div>
          <p className="text-xl">{name}</p>
          <p className="text-xs">{degree}</p>
        </div>
        <p className="text-base bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
          {year}
        </p>
      </div>
    </>
  );
};

interface BadgeProps {
  icon: string;
}

const Badge: React.FC<BadgeProps> = ({ icon }) => (
  <img
    src={`assets/icons/${icon}.png`}
    alt={`badge icon for ${icon}`}
    className="w-1/12"
  />
);

const badges = ["express", "mongodb", "next", "node", "react"];

const Badges = () => {
  return (
    <div className="flex gap-4 justify-center">
      {badges.map((badge) => (
        <Badge key={badge} icon={badge} />
      ))}
    </div>
  );
};

const Picture = () => {
  return (
    <>
      <div className="h-4/5 bg-gray-600 w-full rounded-2xl px-4 py-3 flex items-end">
        <p className="text-xs text-gray-200">
          Computer Science student with a creative background in design and
          media, currently focused on web development and software engineering.
          Experienced in blending visual design with code, and actively involved
          in the developer community.
        </p>
      </div>
    </>
  );
};

const MobileCard = () => {
  return (
    <>
      {/* Background */}
      <div
        id="bg"
        className={`${styles.bg_gradient} ${styles.anta_regular} w-screen h-screen overflow-hidden flex justify-center items-center relative md:hidden`}
      >
        {/* move the image INSIDE this container */}
        <img
          src="./assets/crystal-bg.mobile.png"
          alt=""
          className="absolute w-screen h-screen object-contain z-0 scale-200"
        />

        {/* Card */}
        <div id="card" className={`${styles.card_bg} ${card_styling}`}>
          {/* Overlay */}
          <div className={`${styles.pattern}`}>
            {/* Text Content */}
            <div className="content h-full flex flex-col justify-between">
              <MobileCardName />
              <Picture />
              <Badges />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Card() {
  return (
    <div className="md:hidden">
      <MobileCard />
    </div>
  );
}
