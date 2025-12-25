const Inp = ({ icon,rightIcon, ...props }) => {
    return (
        <div className='flex items-center gap-2 border-2 px-3 py-1 rounded-2xl bg-white'>
            {icon}
            <input {...props} className='text-black w-full border-none focus:outline-none' />
            {rightIcon}
        </div>
    )
}

export default Inp