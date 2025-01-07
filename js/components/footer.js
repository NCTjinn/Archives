const footerContent = `
<footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Email: info@example.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Main St, City, Country</p>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="privacy.html" class="hover:text-gray-300">Privacy Policy</a></li>
                    <li><a href="terms.html" class="hover:text-gray-300">Terms of Service</a></li>
                    <li><a href="faq.html" class="hover:text-gray-300">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                    <a href="#" class="hover:text-gray-300">Facebook</a>
                    <a href="#" class="hover:text-gray-300">Twitter</a>
                    <a href="#" class="hover:text-gray-300">LinkedIn</a>
                </div>
            </div>
        </div>
        <div class="mt-8 text-center border-t border-gray-700 pt-4">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    </div>
</footer>
`;

// Make it available globally
window.footerContent = footerContent;