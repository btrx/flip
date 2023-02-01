export default function Hamburger({ isEffect, setIsEffect }) {

    return (
        <div>
            <button className='relative group' onClick={() => setIsEffect(!isEffect)}>
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isEffect ? 'group-focus:translate-y-6' : ''} delay-100`}></div>
                        <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isEffect ? 'group-focus:translate-y-6' : ''} delay-75 `}></div>
                        <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isEffect ? 'group-focus:translate-y-6' : ''} `}></div>

                        <div className={`absolute flex w-0 items-center justify-between top-2.5 ${isEffect ? 'transform transition-all duration-500 -translate-x-10 group-focus:translate-x-0 group-focus:w-12' : ''} `}>
                            <div className={`absolute bg-white h-[2px] w-5 ${isEffect ? 'transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45' : ''} `}></div>
                            <div className={`absolute bg-white h-[2px] w-5 ${isEffect ? 'transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45' : ''} `}></div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}