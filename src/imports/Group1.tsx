import imgImage1 from "figma:asset/fe15dc57bd4bc76ee5621a473a9fe93b5f08e669.png";
import imgEllipse1 from "figma:asset/75e4acaa2cc144d6abfae176843b981c97439686.png";
import imgGithubMark1 from "figma:asset/f3018b26b7e8d58d254f7494d360a2340fed8789.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[503px] left-0 rounded-[25px] top-0 w-[781px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[25px] size-full" src={imgImage1} />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.31)] h-[503px] left-0 rounded-[25px] top-0 w-[781px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[25px]" />
      </div>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[50px] not-italic text-[#969da7] text-[12px] top-[28px] w-[27px]">DEV</p>
      <div className="absolute h-[28px] left-[16px] top-[22px] w-[27px]">
        <img alt="" className="block max-w-none size-full" height="28" src={imgEllipse1} width="27" />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[264px] not-italic text-[12px] text-nowrap text-white top-[28px] whitespace-pre">Inicío</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[305px] not-italic text-[12px] text-nowrap text-white top-[28px] whitespace-pre">Sobre</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[348px] not-italic text-[12px] text-nowrap text-white top-[28px] whitespace-pre">Habilidades</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[423px] not-italic text-[12px] text-nowrap text-white top-[28px] whitespace-pre">Projetos</p>
      <div className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[480px] not-italic text-[12px] text-nowrap text-white top-[28px] whitespace-pre">
        <p className="mb-0">Chat</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute h-0 left-[267px] top-[44px] w-[24px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
            <line id="Line 1" stroke="var(--stroke-0, #FF0000)" x2="24" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[728px] size-[30px] top-[21px]" data-name="github-mark 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGithubMark1} />
      </div>
    </div>
  );
}