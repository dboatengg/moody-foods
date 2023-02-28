import Arrow from "../assets/arrow.png";

const Hero = () => {
  const style = {
    container: `h-[100vh] w-full absolute top-0 left-0`,
    content: `h-full w-full relative py-[30px] flex items-center flex-col justify-between`,
    heroTop: `relative top-[180px] w-full relative`,
    heroBottom: `text-[25px] flex flex-col items-center gap-3`,
    title: `text-[80px] font-kaushan text-center`,
    subtitle: `block`,
    arrow: `w-[120px]`,
    everyday: `text-brand-yellow`,
  };
  return (
    <div className={`${style.container} hero`}>
      <div className={`${style.content} hero__content`}>
        <div className={style.heroTop}>
          <h1 className={`${style.title} title`}>
            Enjoy! <span className={style.subtitle}>Breakfast</span>
          </h1>
          <img className={`${style.arrow} arrow`} src={Arrow} alt="" />
        </div>
        <div className={style.heroBottom}>
          <p className={style.everyday}>EVERDAY</p>
          <p>7AM.9PM </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;