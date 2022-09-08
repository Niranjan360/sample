import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav>

            <h1>Pogo</h1>

           <div>
            <input type="search" />
            <button>search</button>
           </div>


           <Link to="/">Home</Link>
            <Link to="/wishlist">wishlist</Link>

        </nav>
    );
}
 
export default Navbar;