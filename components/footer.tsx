import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Simplons Beauty Care Center</h3>
                        <p className="text-sm text-gray-600">Enhancing your natural beauty with care and expertise.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-md font-semibold text-gray-800">Quick Links</h4>
                        <ul className="space-y-2">
                            {["Home", "Products", "Services", "About Us", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-600 hover:text-pink-600 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-md font-semibold text-gray-800">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>123 Beauty Lane, Glamour City</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: info@simplonsbeauty.com</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-md font-semibold text-gray-800">Newsletter</h4>
                        <p className="text-sm text-gray-600">Stay updated with our latest offers and beauty tips.</p>
                        <form className="flex space-x-2">
                            <Input type="email" placeholder="Your email" className="flex-grow" />
                            <Button type="submit" variant="secondary">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-600">
                            © {new Date().getFullYear()} Simplons Beauty Care Center. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                                <Facebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}