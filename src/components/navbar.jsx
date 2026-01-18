import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
// Import Redux hooks
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './context/themeContext';

export const Navbar = () => {

    const isDark = useSelector((state) => state.theme.isDark);
    const dispatch = useDispatch();

    return (
        <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex justify-between items-center bg-white/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-500">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-stone-900 dark:text-white">
                Vasant Dora
            </Link>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest font-medium text-stone-600 dark:text-stone-300">
                    {['Home', 'About', 'Portfolio', 'Credentials', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="hover:text-stone-900 dark:hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* 3. Dispatch the toggle action on click */}
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-stone-900 dark:text-white"
                    aria-label="Toggle Theme"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </nav>
    );
};