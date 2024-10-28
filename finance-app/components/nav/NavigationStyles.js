
export const navStyles = (current, showBar, page) => {
   return {
        section: `2xl:h-screen flex-grow-0 relative flex transition-all duration-700 w-full ${showBar ? "2xl:w-[300px] relative w-full md:mx-auto 2xl:mx-[unset] md:w-[768px]" : "2xl:w-[88px]"
            } bg-[#201F24] sm:px-10 px-4 2xl:px-[unset] sm:h-[74px] h-[52px] 2xl:rounded-l-none rounded-t-lg 2xl:rounded-r-xl`,
        
        buttons: `flex transition-all duration-700 2xl:pl-8 flex-col 2xl:flex-row mt-auto 2xl:mt-[unset] justify-center 2xl:justify-start items-center ${current === page ? "bg-[#F8F4F0] 2xl:border-b-0 border-b-4 border-b-[#277C78] 2xl:border-l-4  2xl:border-l-[#277C78] text-black" : "bg-none text-gray-300"
           } border-r-0 flex-shrink-0 2xl:rounded-r-xl 2xl:rounded-tl-none rounded-t-lg sm:gap-1 leading-[150%] text-[12px] 2xl:text-[1rem] font-bold 2xl:gap-4 items-center sm:w-[104px] w-[69px] h-11 sm:h-[66px] 2xl:h-[56px] 2xl:w-full`,
        btnSpan:`sm:block ${showBar? 'opacity-100 transition-all duration-[1.7s]':'opacity-0 hidden block transition-all duration-[0.2s]'} hidden`,
        BTNsWrapper: `2xl:w-full transition-all duration-700 2xl:pt-10 pt-[unset] md:gap-[42px] gap-0 h-full flex 2xl:flex-col 2xl:gap-1 flex-row ${showBar? 'pr-6':'pr-[9px]'}`
    }
}
