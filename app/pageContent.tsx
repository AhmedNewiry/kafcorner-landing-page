'use client'
import Image from "next/image";
import Link from 'next/link'
import cover from '../public/conver.jpg'
import add from '../public/add.jpg'
import borrow from '../public/borrow.jpg'

export const MainPageContent = ()=>{
    return (
      
     <>


      {/* Header Section */}
    
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">KafCorner</h1>
              <p className="text-sm text-gray-600">Lend, Borrow, and Exchange Books</p>
            </div>
            <nav className="space-x-4">
              <Link className="text-gray-600 hover:text-gray-800" href="#features">
                Features
              </Link>
              <Link href="#about">
                About
              </Link>
            </nav>
            <Link className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" href="https://github.com/AhmedNewiry/kafcorner">
          
                Visit GitHub
           
            </Link>
          </div>
        </div>
   

      {/* Introduction Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
             
              <Image src={cover} alt="kafcorner cover" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to KafCorner</h2>
              <p className="text-lg text-gray-600">
                KafCorner is a book sharing app designed to make lending, borrowing, and exchanging books convenient and easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
            
              <Image src={add} alt="add a book" className="mb-4 rounded-lg"/>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lending Books</h3>
              <p className="text-gray-600">
                Easily lend your books to others in your community and explore books to borrow.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src={borrow} alt="lend" className="mb-4 rounded-lg"/>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Borrowing Books</h3>
              <p className="text-gray-600">
                Browse a wide selection of books available for borrowing from other users.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
            
              <Image src={borrow} alt="exchange" className="mb-4 rounded-lg"/>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exchanging Books</h3>
              <p className="text-gray-600">
                Exchange books with others to discover new reads and share your favorites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About</h2>
          <p className="text-lg text-gray-600 mb-4">
            KafCorner was inspired by our passion for reading and our desire to create a community-driven platform for book lovers. 
            This project is a Portfolio Project for ALX, showcasing our skills in web development and teamwork. 
            <br />
            <br />
            Learn more about the team members:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ahmed Abd Alfattah</h3>
              <p className="text-gray-600 mb-2">Frontend & Backend Developer</p>
              <div className="flex space-x-4">
                <Link className="text-blue-500 hover:text-blue-700"  href="https://eg.linkedin.com/in/ahmed-abd-al-fattah-3b371b23a">
                  LinkedIn
                </Link>
                <Link  className="text-blue-500 hover:text-blue-700"  href="https://github.com/AhmedNewiry">
                  GitHub
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ammar Abd Alfattah</h3>
              <p className="text-gray-600 mb-2">Frontend Developer</p>
              <div className="flex space-x-4">
                <Link  className="text-blue-500 hover:text-blue-700"  href="https://www.linkedin.com/in/ammar-abd-alfattah-8b208a247">
                  LinkedIn
                </Link>
                <Link  className="text-blue-500 hover:text-blue-700" href="https://github.com/AmmarAbdalfattah3">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" href="https://github.com/AhmedNewiry/kafcorner">
            
                View Project on GitHub
            
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 KafCorner. All rights reserved.</p>
      </footer>

      </>
        
     
        
    )
}