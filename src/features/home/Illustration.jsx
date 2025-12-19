import bedangshuProfile from "../../assets/images/bedangshu-profile-v2.jpg";
function Illustration() {
  return (
    <div className="  h-[560px] w-[620px] max-sm:h-[440px] max-sm:w-full flex items-center justify-center">
      <div className=" box border-4 border-accentColor h-[440px] w-[440px] overflow-hidden md:h-[480px] md:w-[480px]">
        <img
          src={bedangshuProfile}
          alt="Bedangshu Raj Mudiar"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Illustration;
