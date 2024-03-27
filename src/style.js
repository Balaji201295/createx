const styles = {
  boxWidth: "xl:max-w-[1140px] w-full mx-auto",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  heading: "text-base sm:text-[20px] sm:leading-[30px] font-bold",
  paragraph: "text-sm font-normal",

  padding: "sm:px-16 px-4 sm:py-12 py-8",

  paddingX: "sm:px-16 px-4",
  paddingY: "sm:py-16 py-8",

  marginX: "sm:mx-16 mx-8",
  marginY: "sm:my-16 my-8",
};

export const layout = {
  section: `flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.padding}  justify-between items-center`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter}`,
  sectionImg: `flex-1 flex ${styles.flexCenter}`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
