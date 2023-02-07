export default function ThirdyButton({ type = 'submit', className = '', processing, children, onClick, href }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs px-2.5 py-1 md:text-sm md:px-5 md:py-2.5  text-center mr-2 mb-2 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
            href={href}
            
        >
            {children}
        </button>
    );
}
