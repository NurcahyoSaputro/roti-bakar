/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Star, 
  Utensils, 
  Heart,
  Facebook,
  Twitter
} from "lucide-react";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Roti Bakar Cokelat Keju",
    description: "Perpaduan klasik cokelat meses premium dan parutan keju melimpah.",
    price: "Rp 15.000",
    image: "https://images.unsplash.com/photo-1584947897558-86866164283b?q=80&w=800&auto=format&fit=crop",
    category: "Manis"
  },
  {
    id: 2,
    name: "Roti Bakar Srikaya",
    description: "Selai srikaya homemade yang legit dan harum pandan.",
    price: "Rp 12.000",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    category: "Manis"
  },
  {
    id: 3,
    name: "Roti Bakar Telur Kornet",
    description: "Isian gurih telur mata sapi dan kornet sapi pilihan.",
    price: "Rp 18.000",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop",
    category: "Gurih"
  },
  {
    id: 4,
    name: "Roti Bakar Green Tea",
    description: "Sentuhan modern dengan selai green tea yang creamy.",
    price: "Rp 16.000",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop",
    category: "Manis"
  }
];

const TESTIMONIALS = [
  {
    name: "Andi Wijaya",
    comment: "Roti bakarnya empuk banget, isiannya gak pelit. Favorit keluarga!",
    rating: 5
  },
  {
    name: "Siti Aminah",
    comment: "Paling suka yang cokelat keju. Harganya terjangkau tapi rasa bintang lima.",
    rating: 5
  },
  {
    name: "Budi Santoso",
    comment: "Pelayanan cepat dan ramah. Cocok buat cemilan malam hari.",
    rating: 4
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] font-sans text-[#4A3428]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#EADBC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-[#D24545] p-2 rounded-lg">
                <Utensils className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#D24545]">Roti Bakar Mantap</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#home" className="hover:text-[#D24545] transition-colors">Beranda</a>
              <a href="#menu" className="hover:text-[#D24545] transition-colors">Menu</a>
              <a href="#about" className="hover:text-[#D24545] transition-colors">Tentang Kami</a>
              <a href="#contact" className="hover:text-[#D24545] transition-colors">Kontak</a>
            </div>
            <button className="bg-[#D24545] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#A93333] transition-all shadow-lg shadow-[#D24545]/20">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#F9D6D6] text-[#D24545] text-xs font-bold uppercase tracking-widest mb-6">
                Lezat & Higienis
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-[#2C1810]">
                Nikmati Kehangatan <span className="text-[#D24545]">Roti Bakar</span> Sejati
              </h1>
              <p className="text-lg text-[#6B4F3F] mb-8 max-w-lg leading-relaxed">
                Dibuat dengan bahan premium dan resep rahasia yang diwariskan turun-temurun. Temukan sensasi krispi di luar dan lembut di dalam.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#D24545] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-[#D24545]/30">
                  Lihat Menu <ChevronRight size={20} />
                </button>
                <button className="bg-white border-2 border-[#EADBC8] text-[#4A3428] px-8 py-4 rounded-xl font-bold hover:bg-[#F8F0E5] transition-colors">
                  Lokasi Kami
                </button>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="Customer"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-500 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="font-medium text-[#4A3428]">500+ Pelanggan Puas</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F9D6D6] rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#EADBC8] rounded-full blur-3xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop" 
                className="relative rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 object-cover aspect-[4/5] w-full"
                alt="Roti Bakar Hero"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FFFBF5] border border-[#F8F0E5] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F9D6D6] rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-[#D24545]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bahan Premium</h3>
              <p className="text-[#6B4F3F]">Kami hanya menggunakan roti pilihan dan selai kualitas terbaik untuk Anda.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FFFBF5] border border-[#F8F0E5] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F9D6D6] rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-[#D24545]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Selalu Fresh</h3>
              <p className="text-[#6B4F3F]">Roti dibakar langsung saat Anda memesan, menjamin kesegaran dan kehangatan.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FFFBF5] border border-[#F8F0E5] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F9D6D6] rounded-xl flex items-center justify-center mb-6">
                <Utensils className="text-[#D24545]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Varian Melimpah</h3>
              <p className="text-[#6B4F3F]">Tersedia lebih dari 20 varian rasa mulai dari yang manis hingga gurih.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#2C1810] mb-4">Menu Favorit Kami</h2>
            <p className="text-[#6B4F3F] max-w-2xl mx-auto">Pilih varian rasa favoritmu dan rasakan kelezatan yang tak terlupakan di setiap gigitan.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENU_ITEMS.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#EADBC8]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover"
                    alt={item.name}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#D24545]">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-[#2C1810]">{item.name}</h3>
                  <p className="text-sm text-[#6B4F3F] mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#D24545] font-bold text-xl">{item.price}</span>
                    <button className="p-2 bg-[#F8F0E5] rounded-lg hover:bg-[#D24545] hover:text-white transition-colors">
                      <Utensils size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="text-[#D24545] font-bold border-b-2 border-[#D24545] pb-1 hover:text-[#A93333] hover:border-[#A93333] transition-all">
              Lihat Semua Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop" 
                className="rounded-2xl shadow-lg mt-12"
                alt="About 1"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
                className="rounded-2xl shadow-lg"
                alt="About 2"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-[#2C1810] mb-6">Cerita Di Balik <br/><span className="text-[#D24545]">Roti Bakar Mantap</span></h2>
              <p className="text-[#6B4F3F] mb-6 leading-relaxed">
                Berawal dari sebuah gerobak kecil di pinggir jalan pada tahun 2015, kami memiliki misi sederhana: menyajikan roti bakar yang jujur dengan bahan terbaik.
              </p>
              <p className="text-[#6B4F3F] mb-8 leading-relaxed">
                Kini, Roti Bakar Mantap telah menjadi tempat favorit bagi banyak orang untuk berkumpul, bercerita, dan menikmati hidangan hangat yang menenangkan jiwa. Kami percaya bahwa makanan yang baik dibuat dengan cinta.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-[#D24545] mb-1">8+</h4>
                  <p className="text-sm font-medium text-[#6B4F3F]">Tahun Pengalaman</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-[#D24545] mb-1">15k+</h4>
                  <p className="text-sm font-medium text-[#6B4F3F]">Porsi Terjual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F8F0E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-[#2C1810] mb-16">Apa Kata Mereka?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#EADBC8] relative">
                <div className="absolute -top-4 left-8 bg-[#D24545] text-white p-2 rounded-lg">
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-[#6B4F3F] italic mb-6">"{t.comment}"</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EADBC8] flex items-center justify-center font-bold text-[#D24545]">
                    {t.name[0]}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-[#2C1810]">{t.name}</h4>
                    <div className="flex text-yellow-500">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2C1810] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="p-12 lg:p-20 flex-1 text-white">
              <h2 className="text-4xl font-bold mb-8">Kunjungi Kami</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="text-[#D24545]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Alamat</h4>
                    <p className="text-white/70">Jl. Roti Bakar No. 123, Jakarta Selatan, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="text-[#D24545]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Telepon / WhatsApp</h4>
                    <p className="text-white/70">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Clock className="text-[#D24545]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Jam Buka</h4>
                    <p className="text-white/70">Setiap Hari: 16:00 - 23:00 WIB</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D24545] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D24545] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D24545] transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            <div className="flex-1 min-h-[400px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.257482319206!2d106.82283!3d-6.22974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4a4297b85%3A0x20b0f748d767a058!2sJakarta!5e0!3m2!1sen!2sid!4v1625000000000!5m2!1sen!2sid" 
                className="absolute inset-0 w-full h-full grayscale invert opacity-80"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFFBF5] py-12 border-t border-[#EADBC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-[#D24545] p-1.5 rounded-lg">
              <Utensils className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-[#D24545]">Roti Bakar Mantap</span>
          </div>
          <p className="text-[#6B4F3F] text-sm mb-8">
            © 2026 Roti Bakar Mantap. Semua Hak Dilindungi. <br/>
            Dibuat dengan ❤️ untuk pecinta kuliner Indonesia.
          </p>
          <div className="flex justify-center space-x-6 text-xs font-semibold text-[#6B4F3F]">
            <a href="#" className="hover:text-[#D24545]">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#D24545]">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-[#D24545]">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
