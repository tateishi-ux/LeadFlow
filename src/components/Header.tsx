import { Button } from "./ui/button";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl lg:text-3xl font-extrabold text-blue-600 tracking-tight">LeadFlow</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-blue-600 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full hover:scale-105"
            >
              特長
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className="text-gray-600 hover:text-blue-600 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full hover:scale-105"
            >
              導入事例
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-blue-600 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full hover:scale-105"
            >
              価格
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-blue-600 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full hover:scale-105"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full hover:scale-105"
            >
              お問い合わせ
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-6"
              onClick={() => scrollToSection('hero')}
            >
              無料トライアル
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}