export const Navbar = () => {
  return (
    <div className={`
      lg:pt-10 bg-base-100
      sticky top-0 z-40 w-full 
      after:bg-transparent-top after:w-full after:h-16 after:absolute after:z-50 
    `}>

      <nav className={`
          flex items-center justify-between gap-4 
          font-monospace text-xs
      `}>
        <div className="flex gap-2 items-center -ml-1">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8227 15.875C12.4571 16.5083 11.5429 16.5083 11.1773 15.875M12.8227 15.875L11.1773 15.875M12.8227 15.875L12.2598 15.55L11.1773 15.875M12.8227 15.875L16.6332 9.275C16.9989 8.64167 16.5418 7.85 15.8105 7.85H8.18949C7.45818 7.85 7.00111 8.64166 7.36676 9.275L11.1773 15.875" stroke="#CECECE" strokeWidth="1.3">
              </path>
            </svg>
          </span>
          <div className="flex gap-3">
            <span>Post</span>
            <span className="opacity-50">::</span>
            <span className="opacity-50">Published</span>
          </div>
          
        </div>
        <span className="text-white mr-2 lg:mr-1">Welcome to my blog</span>
      </nav>
    </div>
  )
}
