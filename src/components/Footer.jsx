
export default function Footer() {
  return (
    <footer className="border-t border-[#30312c] bg-[#0b0c0a] px-[9%] py-[35px] max-[700px]:px-[7%]">
      <div className="flex items-center justify-between border-b border-[#30312c] pb-[30px]">
        <a
          href="#home"
          className="text-[25px] font-extrabold tracking-[-1px]"
        >
          IRON<span className="text-[#c5f45b]">.</span>DISTRICT
        </a>

        <a
          href="#home"
          className="text-[10px] font-bold tracking-[1px] text-[#85877e] transition-colors hover:text-[#c5f45b]"
        >
          BACK TO TOP ↑
        </a>
      </div>

      <div className="flex items-center justify-between gap-5 pt-[25px] text-[9px] font-bold tracking-[1px] text-[#85877e] max-[700px]:flex-col max-[700px]:items-start">
        <span>© 2026 IRON DISTRICT ATHLETIC CLUB</span>
        <span>BUILT FOR THOSE WHO SHOW UP.</span>

        <div className="flex gap-5">
          <a href="#home" className="hover:text-[#c5f45b]">
            INSTAGRAM ↗
          </a>
          <a href="#home" className="hover:text-[#c5f45b]">
            FACEBOOK ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
