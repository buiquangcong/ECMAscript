export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-extrabold text-blue-600">
                    ECMA<span className="text-orange-500">Travel</span>
                </h1>

                <nav>
                    <ul className="flex gap-8 text-lg font-semibold">
                        <li className="hover:text-blue-600 transition">
                            <a href="/">Home</a>
                        </li>
                        <li className="hover:text-blue-600 transition">
                            <a href="/about">About</a>
                        </li>
                        <li className="hover:text-blue-600 transition">
                            <a href="/booking">Booking</a>
                        </li>
                        <li className="hover:text-blue-600 transition">
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
