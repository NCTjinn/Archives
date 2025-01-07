// Header HTML content with dropdown menu
const headerContent = `
<header class="bg-gray-800 text-white py-4">
    <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between">
            <div class="text-xl font-bold">Your Logo</div>
            <ul class="flex space-x-6">
                <li><a href="index.html" class="hover:text-gray-300">Home</a></li>
                <li class="relative">
                    <button 
                        id="services-dropdown" 
                        class="hover:text-gray-300 flex items-center"
                        aria-expanded="false"
                    >
                        Services 
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <ul 
                        id="dropdown-menu" 
                        class="absolute hidden bg-gray-700 mt-2 py-2 w-48 rounded-md shadow-xl"
                        style="z-index: 1000;"
                    >
                        <li><a href="service1.html" class="block px-4 py-2 hover:bg-gray-600">Service 1</a></li>
                        <li><a href="service2.html" class="block px-4 py-2 hover:bg-gray-600">Service 2</a></li>
                        <li><a href="service3.html" class="block px-4 py-2 hover:bg-gray-600">Service 3</a></li>
                    </ul>
                </li>
                <li><a href="about.html" class="hover:text-gray-300">About</a></li>
                <li><a href="contact.html" class="hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>
`;

// Make header content available globally
window.headerContent = headerContent;

// Function to initialize dropdown functionality
window.initializeHeader = function() {
    const dropdownButton = document.getElementById('services-dropdown');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    // Toggle dropdown on button click
    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
        dropdownButton.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        dropdownButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.add('hidden');
    });

    // Handle keyboard navigation
    dropdownButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            dropdownButton.click();
        }
    });
};