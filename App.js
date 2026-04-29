const { useState, useEffect } = React;

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initialisation des icônes Lucide après le rendu
    useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* 1. NAVBAR */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="bg-[#1a1a1a] text-white text-xs py-2 px-4 text-center font-medium hidden md:block">
                    Retours offerts pendant 365 jours avec le compte Decathlon
                </div>

                <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between py-4 gap-4 md:gap-8">
                        <div className="flex items-center gap-4">
                            <button className="md:hidden p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <i data-lucide="menu"></i>
                            </button>
                            <a href="#" className="text-2xl md:text-3xl font-black tracking-tighter text-[#004ECC] uppercase">
                                Decathlon
                            </a>
                        </div>

                        <div className="hidden md:flex flex-1 max-w-2xl relative">
                            <input type="text" placeholder="Rechercher un produit..." className="w-full bg-gray-100 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#004ECC]" />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#004ECC] text-white rounded-full">
                                <i data-lucide="search" size="18"></i>
                            </button>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="hidden lg:flex flex-col items-center text-gray-700 cursor-pointer">
                                <i data-lucide="map-pin"></i>
                                <span className="text-xs font-semibold">Magasin</span>
                            </div>
                            <div className="flex flex-col items-center text-gray-700 cursor-pointer relative">
                                <i data-lucide="shopping-cart"></i>
                                <span className="absolute -top-1 -right-2 bg-yellow-400 text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* 2. HERO SECTION */}
                <section className="relative h-[60vh] bg-gray-900 flex items-center text-white px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-black uppercase mb-6">Le sport commence là où tu es.</h1>
                        <p className="text-xl mb-8 text-gray-300">Équipements accessibles et adaptés à tous les niveaux.</p>
                        <button className="bg-[#004ECC] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition">
                            S'équiper maintenant
                        </button>
                    </div>
                </section>

                {/* 3. PRODUITS */}
                <section className="py-16 max-w-[1440px] mx-auto px-8">
                    <h2 className="text-3xl font-black mb-12 uppercase">Nos incontournables</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { name: "T-shirt Run Dry", price: "6€" },
                            { name: "Chaussures Jogflow", price: "35€" },
                            { name: "Tapis de Fitness", price: "15€" },
                            { name: "Veste Imperméable", price: "25€" }
                        ].map((prod, i) => (
                            <div key={i} className="border p-4 rounded-xl flex flex-col group">
                                <div className="bg-gray-100 aspect-square mb-4 rounded-lg"></div>
                                <h3 className="font-bold text-lg">{prod.name}</h3>
                                <p className="text-2xl font-black mt-2 mb-4">{prod.price}</p>
                                <button className="mt-auto bg-[#004ECC] text-white py-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                                    Ajouter
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-[#1a1a1a] text-white py-12 text-center">
                <p className="text-2xl font-black uppercase tracking-tighter">Decathlon</p>
                <p className="text-gray-500 text-sm mt-2">© 2026 Decathlon - Projet Démo</p>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);