
const Navbar = () => {
    return (
        <div className='flex py-3 flex-wrap justify-around'>
            <div>
            <h1 className="text-lg font-semibold">ToDo</h1>
            </div>
       <div>
       <ul className="flex gap-10 text-lg">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
       </div>
        </div>
    );
};

export default Navbar;