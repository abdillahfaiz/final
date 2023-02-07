export default function SecondaryButton({ type = 'button', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-xs px-2.5 py-1 md:text-sm md:px-5 md:py-2.5  text-center mr-2 mb-2 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
            
        >
            {children}
        </button>
    );
}
