export default function Menu({ isEffect, setIsEffect, className, children}){
    const addClassName = className ? className : ''

    return(
        <a href='#' onClick={() => setIsEffect(!isEffect)} className={`${isEffect ? 'animate-slide-in-blurred-left' : ''} ${addClassName} w-fit relative group font-roboto font-semibold my-5 text-lg hover:font-bold`}>
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>  
        </a>
    )
}