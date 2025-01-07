const headerContent = `
<header class="bg-gray-800 text-white py-4">
    <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between">
            <!-- Left: Logo -->
            <a href="index.html" class="text-xl font-bold hover:text-gray-300">
                Your Logo
            </a>

            <!-- Center: Navigation -->
            <ul class="flex space-x-6">
                <li><a href="index.html" class="hover:text-gray-300">Home</a></li>
                <li class="relative group">
                    <!-- Create a continuous hover area -->
                    <div class="relative inline-block">
                        <button class="hover:text-gray-300 flex items-center">
                            Services 
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <!-- Remove any gap between button and dropdown -->
                        <div class="absolute left-0 w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out">
                            <div class="absolute w-full top-0 pt-2">
                                <ul class="relative top-0 bg-gray-700 rounded-md shadow-xl py-2">
                                    <li>
                                        <a href="service1.html" class="block px-4 py-2 hover:bg-gray-600 whitespace-nowrap">
                                            Service 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="service2.html" class="block px-4 py-2 hover:bg-gray-600 whitespace-nowrap">
                                            Service 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="service3.html" class="block px-4 py-2 hover:bg-gray-600 whitespace-nowrap">
                                            Service 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="about.html" class="hover:text-gray-300">About</a></li>
                <li><a href="contact.html" class="hover:text-gray-300">Contact</a></li>
            </ul>

            <!-- Right: Profile Icon -->
            <button class="hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
            </button>
        </nav>
    </div>
</header>
`;

// Make header content available globally
window.headerContent = headerContent;

// Initialize header functionality
window.initializeHeader = function() {
    // Can add any additional initialization if needed
};