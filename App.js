// =========================================
// DECATHLON CONCEPT STORE - JAVASCRIPT
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // MOBILE MENU TOGGLE
    // =========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = mobileMenuToggle.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // =========================================
    // SEARCH FUNCTIONALITY
    // =========================================
    const searchInputs = document.querySelectorAll('.search-input');
    const searchBtns = document.querySelectorAll('.search-btn');
    
    searchInputs.forEach((input) => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(input.value);
            }
        });
    });
    
    searchBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const input = btn.previousElementSibling;
            performSearch(input.value);
        });
    });
    
    function performSearch(query) {
        if (query.trim()) {
            console.log('Searching for:', query);
            alert('Recherche: ' + query);
        }
    }
    
    // =========================================
    // CART FUNCTIONALITY
    // =========================================
    let cartCount = 0;
    const cartBadge = document.querySelector('.cart-badge');
    const addToCartBtns = document.querySelectorAll('.product-btn');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            cartCount++;
            if (cartBadge) {
                cartBadge.textContent = cartCount;
                cartBadge.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    cartBadge.style.transform = 'scale(1)';
                }, 200);
            }
            
            const originalText = btn.textContent;
            btn.textContent = 'Ajouté !';
            btn.style.background = '#10b981';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 1500);
        });
    });
    
    // =========================================
    // SPORT CATEGORY BUTTONS
    // =========================================
    const sportBtns = document.querySelectorAll('.sport-btn');
    
    sportBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const sportName = btn.previousElementSibling.textContent;
            console.log('Discover:', sportName);
            alert('Découvrir: ' + sportName);
        });
    });
    
    // =========================================
    // TARGET CARDS HOVER EFFECTS
    // =========================================
    const targetCards = document.querySelectorAll('.target-card');
    
    targetCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.target-arrow');
            if (arrow) {
                arrow.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.target-arrow');
            if (arrow) {
                arrow.style.transform = 'scale(1)';
            }
        });
    });
    
    // =========================================
    // PERSONA BUTTONS
    // =========================================
    const personaBtns = document.querySelectorAll('.persona-btn');
    
    personaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = btn.textContent;
            console.log('Action:', action);
            alert(action);
        });
    });
    
    // =========================================
    // HERO BUTTONS
    // =========================================
    const heroBtns = document.querySelectorAll('.hero-buttons .btn-primary, .hero-buttons .btn-secondary');
    
    heroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = btn.textContent;
            console.log('Hero action:', action);
            alert(action);
        });
    });
    
    // =========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // =========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // =========================================
    // NAVBAR SCROLL EFFECT
    // =========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // =========================================
    // ANIMATE ELEMENTS ON SCROLL
    // =========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.target-card, .sport-card, .product-card, .persona-card, .engagement-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animation class
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    console.log('Decathlon Concept Store - Loaded successfully');
});

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