import {
  AlertTriangle,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Home,
  LogOut,
  Menu,
  Minus,
  MoreVertical,
  Package,
  Phone,
  Plus,
  Printer,
  Search,
  Settings,
  ShoppingCart,
  ToggleRight,
  TrendingUp,
  User,
  Wallet,
  X,
} from 'lucide-react';
import { useState } from 'react';

const AuthScreen = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingCart className="text-white w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">WarungKu</h1>
        <p className="text-gray-600">Aplikasi Manajemen Warung</p>
      </div>
      {children}
    </div>
  </div>
);

const LoginScreen = ({ onLogin, onNavigateToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // --- SIMULASI API CALL ---
    // Di aplikasi nyata, Anda akan mengirim email/password ke backend.
    // Backend akan memvalidasi dan mengembalikan data pengguna.
    let user = null;
    if (email === 'admin@warungku.com' && password === 'password') {
      user = { id: 'user-001', nama: 'Admin Warung', email: 'admin@warungku.com', role: 'admin' };
    } else if (email === 'karyawan@warungku.com' && password === 'password') {
      user = { id: 'user-002', nama: 'Karyawan', email: 'karyawan@warungku.com', role: 'karyawan' };
    }

    if (user) {
      onLogin(user); // Kirim seluruh objek user saat login berhasil
    } else {
      alert('Email atau password salah!');
    }
  };
  // --- AKHIR SIMULASI ---

  return (
    <AuthScreen>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="masukkan@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Masuk
        </button>

        <div className="text-center">
          <a href="#" className="text-blue-600 text-sm hover:underline">Lupa Password?</a>
        </div>

        <div className="text-center pt-4 border-t">
          <p className="text-sm text-gray-600 mb-2">Belum punya akun?</p>
          <button type="button" onClick={onNavigateToSignUp} className="text-blue-600 font-semibold hover:underline">
            Daftar Akun Baru
          </button>
        </div>
      </form>
    </AuthScreen>
  );
};

const SignUpScreen = ({ onSignUp, onNavigateToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika sign up sederhana
    console.log('Mendaftarkan pengguna:', { name, email });
    onSignUp(); // Anggap pendaftaran berhasil dan langsung login
  };

  return (
    <AuthScreen>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Nama Anda"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="masukkan@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Daftar
        </button>

        <div className="text-center pt-4 border-t">
          <p className="text-sm text-gray-600 mb-2">Sudah punya akun?</p>
          <button type="button" onClick={onNavigateToLogin} className="text-blue-600 font-semibold hover:underline">
            Masuk di sini
          </button>
        </div>
      </form>
    </AuthScreen>
  );
};

const Sidebar = ({ menuItems, currentScreen, onNavigate, onClose }) => (
  <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform lg:translate-x-0 lg:static lg:inset-0">
    <div className="flex items-center justify-between p-4 border-b lg:justify-center">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
          <ShoppingCart className="text-white w-4 h-4" />
        </div>
        <span className="font-bold text-xl text-gray-800">WarungKu</span>
      </div>
      <button
        onClick={onClose}
        className="lg:hidden"
      >
        <X className="w-6 h-6" />
      </button>
    </div>

    <nav className="p-4 overflow-y-auto h-screen">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${currentScreen === item.id
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  </div>
);

const Header = ({ menuItems, currentScreen, onMenuClick, lowStock, onLogout, currentUser }) => (
  <header className="bg-white shadow-sm border-b px-4 py-4 lg:px-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800 capitalize">
          {menuItems.find(item => item.id === currentScreen)?.label || 'Dashboard'}
        </h2>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          {lowStock > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {lowStock}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-700">{currentUser?.nama || 'Pengguna'}</span>
        </div>
        <button onClick={onLogout} className="text-gray-600 hover:text-red-500" title="Logout">
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
);

const Dashboard = ({ todaySales, cashBalance, pendingDebt, lowStock }) => (
  <div className="p-4 lg:p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Penjualan Hari Ini</p>
            <p className="text-2xl font-bold text-gray-800">Rp {todaySales.toLocaleString('id-ID')}</p>
            <p className="text-sm text-green-600 flex items-center mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% dari kemarin
            </p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Saldo Kas</p>
            <p className="text-2xl font-bold text-gray-800">Rp {cashBalance.toLocaleString('id-ID')}</p>
            <p className="text-sm text-blue-600 flex items-center mt-1">
              <Wallet className="w-4 h-4 mr-1" />
              3 Akun aktif
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Wallet className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Utang Belum Lunas</p>
            <p className="text-2xl font-bold text-gray-800">Rp {pendingDebt.toLocaleString('id-ID')}</p>
            <p className="text-sm text-orange-600 flex items-center mt-1">
              <Clock className="w-4 h-4 mr-1" />
              2 Jatuh tempo
            </p>
          </div>
          <div className="bg-orange-100 p-3 rounded-full">
            <CreditCard className="w-6 h-6 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Stok Menipis</p>
            <p className="text-2xl font-bold text-gray-800">{lowStock} Barang</p>
            <p className="text-sm text-red-600 flex items-center mt-1">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Perlu restok
            </p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Grafik Penjualan 7 Hari</h3>
          <select className="text-sm border border-gray-300 rounded px-3 py-1">
            <option>7 hari</option>
            <option>30 hari</option>
            <option>90 hari</option>
          </select>
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Grafik penjualan akan ditampilkan disini</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Notifikasi Terbaru</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Stok Beras hampir habis</p>
              <p className="text-xs text-gray-600">Sisa 5 kg - 2 jam yang lalu</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
            <Calendar className="w-5 h-5 text-orange-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Utang ke supplier jatuh tempo besok</p>
              <p className="text-xs text-gray-600">Rp 500.000 - 5 jam yang lalu</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <DollarSign className="w-5 h-5 text-green-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Pembayaran piutang diterima</p>
              <p className="text-xs text-gray-600">Rp 100.000 dari Ahmad - 1 hari yang lalu</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Produk Terlaris</h3>
        <div className="space-y-3">
          {[
            { name: 'Beras 5kg', sold: 25, revenue: 1625000 },
            { name: 'Minyak Goreng 1L', sold: 18, revenue: 324000 },
            { name: 'Gula Pasir 1kg', sold: 15, revenue: 225000 }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.sold} terjual</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">Rp {item.revenue.toLocaleString('id-ID')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Keuangan</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Pemasukan</span>
            <span className="font-semibold text-green-600">Rp 15.750.000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Pengeluaran</span>
            <span className="font-semibold text-red-600">Rp 8.250.000</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-medium">Laba Bersih</span>
              <span className="font-bold text-lg text-green-600">Rp 7.500.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const POSScreen = ({ cartItems, updateCartItem, addToCart, products, getCartTotal, customerPaid, setCustomerPaid, calculateChange, paymentMethod, setPaymentMethod }) => (
  <div className="p-4 lg:p-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk atau scan barcode..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex space-x-2 mb-4">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold text-sm">Semua</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Sembako</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Minuman</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Makanan</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors"
              >
                <div className="w-full h-20 bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                  <Package className="w-8 h-8 text-gray-400" />
                </div>
                <p className="font-medium text-sm text-gray-800 mb-1">{product.name}</p>
                <p className="text-xs text-blue-600 font-semibold">Rp {product.price.toLocaleString('id-ID')}</p>
                <p className="text-xs text-gray-500">Stok: {product.stock}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Keranjang Belanja</h3>

        <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500">Keranjang kosong</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-600">Rp {item.price.toLocaleString('id-ID')} x {item.qty}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateCartItem(item.id, item.qty - 1)}
                    className="w-6 h-6 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200"
                  >
                    <Minus className="w-3 h-3 mx-auto" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                  <button
                    onClick={() => updateCartItem(item.id, item.qty + 1)}
                    className="w-6 h-6 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    <Plus className="w-3 h-3 mx-auto" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span>Rp {getCartTotal().toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Diskon:</span>
            <span>Rp 0</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Pajak:</span>
            <span>Rp 0</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>Rp {getCartTotal().toLocaleString('id-ID')}</span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex space-x-2">
            <button
              onClick={() => setPaymentMethod('tunai')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${paymentMethod === 'tunai'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              Tunai
            </button>
            <button
              onClick={() => setPaymentMethod('transfer')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${paymentMethod === 'transfer'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              Transfer
            </button>
          </div>

          {paymentMethod === 'tunai' && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Uang Diterima</label>
              <input
                type="number"
                value={customerPaid}
                onChange={(e) => setCustomerPaid(e.target.value)}
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {customerPaid && (
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="text-sm text-gray-600">Kembalian:</span>
                  <span className={`font-bold ${calculateChange() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    Rp {calculateChange().toLocaleString('id-ID')}
                  </span>
                </div>
              )}
            </div>
          )}

          <button
            disabled={cartItems.length === 0}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            Simpan Transaksi
          </button>

          <button
            disabled={cartItems.length === 0}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Nota</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const PlaceholderScreen = ({ screenId, menuItems }) => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
      <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Settings className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {menuItems.find(item => item.id === screenId)?.label}
      </h3>
      <p className="text-gray-600">Fitur ini sedang dalam pengembangan</p>
    </div>
  </div>
);

const DebtScreen = ({ activeTab, setActiveTab, showDebtForm, setShowDebtForm }) => {
  const debts = [
    { id: 1, type: 'utang', to: 'Supplier A', amount: 500000, due: '2024-08-15', status: 'overdue' },
    { id: 2, type: 'piutang', to: 'Pelanggan B', amount: 150000, due: '2024-08-20', status: 'partial' },
    { id: 3, type: 'utang', to: 'Supplier C', amount: 250000, due: '2024-09-01', status: 'pending' },
    { id: 4, type: 'piutang', to: 'Pelanggan D', amount: 75000, due: '2024-07-30', status: 'paid' },
  ];

  const filteredDebts = debts.filter(d => d.type === activeTab);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'partial': return 'bg-blue-100 text-blue-700';
      case 'overdue': return 'bg-red-100 text-red-700';
      default: return 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex border-b">
            <button onClick={() => setActiveTab('utang')} className={`px-4 py-2 font-medium ${activeTab === 'utang' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Utang</button>
            <button onClick={() => setActiveTab('piutang')} className={`px-4 py-2 font-medium ${activeTab === 'piutang' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Piutang</button>
          </div>
          <button onClick={() => setShowDebtForm(!showDebtForm)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Tambah {activeTab === 'utang' ? 'Utang' : 'Piutang'}</span>
          </button>
        </div>

        {showDebtForm && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Form Tambah {activeTab === 'utang' ? 'Utang' : 'Piutang'}</h3>
            {/* Form fields would go here */}
            <p className="text-gray-500">Form untuk menambah data baru...</p>
          </div>
        )}

        <div className="flex space-x-2 mb-4">
          <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Semua</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Jatuh Tempo</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Lunas Sebagian</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Lunas</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3">Deskripsi</th>
                <th className="p-3">Jumlah</th>
                <th className="p-3">Jatuh Tempo</th>
                <th className="p-3">Status</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredDebts.map(debt => (
                <tr key={debt.id} className="border-b">
                  <td className="p-3 font-medium">{debt.to}</td>
                  <td className="p-3">Rp {debt.amount.toLocaleString('id-ID')}</td>
                  <td className="p-3">{debt.due}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(debt.status)}`}>
                      {debt.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:underline">Bayar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const BookkeepingScreen = ({ showTransactionForm, setShowTransactionForm }) => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Buku Kas Harian</h3>
        <button onClick={() => setShowTransactionForm(!showTransactionForm)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Tambah Transaksi</span>
        </button>
      </div>

      {showTransactionForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option>Belanja Stok</option>
              <option>Biaya Operasional</option>
              <option>Pemasukan Lain</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah</label>
            <input type="number" placeholder="0" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Bukti (Opsional)</label>
            <input type="file" className="w-full text-sm" />
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Deskripsi</th>
              <th className="p-3">Pemasukan</th>
              <th className="p-3">Pengeluaran</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">1 Agu 2024</td>
              <td className="p-3 font-medium">Penjualan Harian</td>
              <td className="p-3 text-green-600">Rp 2.450.000</td>
              <td className="p-3"></td>
            </tr>
            <tr className="border-b">
              <td className="p-3">1 Agu 2024</td>
              <td className="p-3 font-medium">Belanja Stok Beras</td>
              <td className="p-3"></td>
              <td className="p-3 text-red-600">Rp 1.500.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const StockScreen = ({ products, showProductForm, setShowProductForm }) => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Manajemen Stok</h3>
        <button onClick={() => setShowProductForm(!showProductForm)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Tambah Produk</span>
        </button>
      </div>

      {showProductForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Form Tambah Produk</h3>
          <p className="text-gray-500">Form untuk menambah data produk baru...</p>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3">Nama Produk</th>
              <th className="p-3">Stok</th>
              <th className="p-3">Harga Jual</th>
              <th className="p-3">Stok Min.</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b">
                <td className="p-3 font-medium">{product.name}</td>
                <td className={`p-3 font-semibold ${product.stock <= product.minStock ? 'text-red-600' : 'text-gray-800'}`}>{product.stock}</td>
                <td className="p-3">Rp {product.price.toLocaleString('id-ID')}</td>
                <td className="p-3">{product.minStock}</td>
                <td className="p-3 flex space-x-2">
                  <button className="text-blue-600 hover:underline">Tambah Stok</button>
                  <button className="text-orange-600 hover:underline">Kurangi Stok</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ReportsScreen = ({ selectedPeriod, setSelectedPeriod, selectedReport, setSelectedReport }) => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <div>
            <label className="text-sm font-medium">Jenis Laporan:</label>
            <select value={selectedReport} onChange={e => setSelectedReport(e.target.value)} className="ml-2 border border-gray-300 rounded-lg px-3 py-2">
              <option value="penjualan">Laporan Penjualan</option>
              <option value="laba_rugi">Laporan Laba Rugi</option>
              <option value="stok">Laporan Stok</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Periode:</label>
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value)} className="ml-2 border border-gray-300 rounded-lg px-3 py-2">
              <option value="harian">Harian</option>
              <option value="mingguan">Mingguan</option>
              <option value="bulanan">Bulanan</option>
            </select>
          </div>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Ekspor PDF</span>
        </button>
      </div>

      <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Chart dan tabel laporan akan ditampilkan di sini.</p>
        </div>
      </div>
    </div>
  </div>
);

const RemindersScreen = ({ showReminderForm, setShowReminderForm }) => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Pengingat</h3>
        <button onClick={() => setShowReminderForm(!showReminderForm)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Tambah Pengingat</span>
        </button>
      </div>

      {showReminderForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Form Tambah Pengingat</h3>
          <p className="text-gray-500">Form untuk menambah pengingat baru...</p>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">Catat Penjualan Harian</p>
            <p className="text-sm text-gray-600">Setiap hari pukul 21:00</p>
          </div>
          <button><ToggleRight className="w-10 h-10 text-blue-600" /></button>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">Bayar Tagihan Listrik</p>
            <p className="text-sm text-gray-600">Setiap tanggal 20</p>
          </div>
          <button><ToggleRight className="w-10 h-10 text-blue-600" /></button>
        </div>
      </div>
    </div>
  </div>
);

const ReceiptSettingsScreen = () => (
  <div className="p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold mb-4">Pengaturan Nota</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Usaha</label>
          <input type="text" defaultValue="WarungKu Jaya" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
          <textarea defaultValue="Jl. Merdeka No. 17, Jakarta" className="w-full px-3 py-2 border border-gray-300 rounded-lg"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nomor HP</label>
          <input type="text" defaultValue="081234567890" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Logo Usaha</label>
          <input type="file" className="w-full text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prefix Nomor Nota</label>
          <input type="text" defaultValue="WK-" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold mb-4">Preview Nota</h3>
      <div className="border p-4 rounded-lg font-mono text-sm">
        <div className="text-center mb-4">
          <h4 className="font-bold">WarungKu Jaya</h4>
          <p>Jl. Merdeka No. 17, Jakarta</p>
          <p>081234567890</p>
        </div>
        <div className="border-t border-dashed pt-2">
          <p>No: WK-00123</p>
          <p>Tgl: 1 Agu 2024</p>
        </div>
        <div className="border-t border-dashed mt-2 pt-2">
          <div className="flex justify-between"><span>Beras 5kg (x2)</span><span>130.000</span></div>
          <div className="flex justify-between"><span>Minyak 1L (x1)</span><span>18.000</span></div>
        </div>
        <div className="border-t border-dashed mt-2 pt-2 font-bold">
          <div className="flex justify-between"><span>TOTAL</span><span>148.000</span></div>
        </div>
        <div className="text-center mt-4">
          <p>Terima kasih!</p>
        </div>
      </div>
    </div>
  </div>
);

const BusinessCardScreen = () => (
  <div className="p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold mb-4">Kartu Nama Usaha</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Usaha</label>
          <input type="text" defaultValue="WarungKu Jaya" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slogan</label>
          <input type="text" defaultValue="Solusi Kebutuhan Harian Anda" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
          <input type="text" defaultValue="081234567890" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col items-center justify-center">
      <h3 className="text-lg font-semibold mb-4">Preview Kartu Nama</h3>
      <div className="w-80 h-48 bg-blue-600 text-white rounded-xl p-4 flex flex-col justify-between shadow-lg">
        <div>
          <h4 className="font-bold text-xl">WarungKu Jaya</h4>
          <p className="text-sm">Solusi Kebutuhan Harian Anda</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">0812-3456-7890</p>
        </div>
      </div>
      <div className="mt-4 p-2 bg-white border rounded">
        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
          <p className="text-xs text-gray-500">QR Code</p>
        </div>
      </div>
    </div>
  </div>
);

const AccountsScreen = () => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Saldo Kas & Bank</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Tambah Akun</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border p-4 rounded-lg">
          <p className="text-sm text-gray-600">Kas Tunai</p>
          <p className="text-2xl font-bold">Rp 5.750.000</p>
        </div>
        <div className="border p-4 rounded-lg">
          <p className="text-sm text-gray-600">Bank BCA</p>
          <p className="text-2xl font-bold">Rp 12.300.000</p>
        </div>
      </div>

      <h4 className="text-md font-semibold mb-2">Riwayat Mutasi Terbaru</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Akun</th>
              <th className="p-3">Deskripsi</th>
              <th className="p-3">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">1 Agu 2024</td>
              <td className="p-3">Kas Tunai</td>
              <td className="p-3 font-medium">Setoran penjualan</td>
              <td className="p-3 text-green-600">+ Rp 2.450.000</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">1 Agu 2024</td>
              <td className="p-3">Bank BCA</td>
              <td className="p-3 font-medium">Transfer ke Supplier A</td>
              <td className="p-3 text-red-600">- Rp 500.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ContactsScreen = ({ showContactForm, setShowContactForm }) => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Kontak</h3>
        <button onClick={() => setShowContactForm(!showContactForm)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Tambah Kontak</span>
        </button>
      </div>

      {showContactForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Form Tambah Kontak</h3>
          <p className="text-gray-500">Form untuk menambah kontak baru...</p>
        </div>
      )}

      <div className="flex space-x-2 mb-4">
        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Semua</button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Pelanggan</button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Supplier</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3">Nama</th>
              <th className="p-3">Nomor HP</th>
              <th className="p-3">Tipe</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-medium">Ahmad</td>
              <td className="p-3">0812-xxxx-xxxx</td>
              <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Pelanggan</span></td>
              <td className="p-3"><button><MoreVertical className="w-4 h-4" /></button></td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-medium">Supplier A</td>
              <td className="p-3">0856-xxxx-xxxx</td>
              <td className="p-3"><span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Supplier</span></td>
              <td className="p-3"><button><MoreVertical className="w-4 h-4" /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const WarungKuApp = () => {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // Ganti isLoggedIn dengan currentUser
  const [authScreen, setAuthScreen] = useState('login'); // 'login' or 'signup'
  const [selectedPeriod, setSelectedPeriod] = useState('bulanan');
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Beras 5kg', price: 65000, qty: 2, subtotal: 130000 },
    { id: 2, name: 'Minyak Goreng 1L', price: 18000, qty: 1, subtotal: 18000 }
  ]);
  const [paymentMethod, setPaymentMethod] = useState('tunai');
  const [showDebtForm, setShowDebtForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showReminderForm, setShowReminderForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [selectedReport, setSelectedReport] = useState('penjualan');
  const [activeTab, setActiveTab] = useState('utang');
  const [customerPaid, setCustomerPaid] = useState('');
  // Sample data
  const todaySales = 2450000;
  const cashBalance = 5750000;
  const pendingDebt = 850000;
  const lowStock = 3;

  // Definisikan semua menu yang mungkin ada
  const allMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'pos', label: 'Kasir/POS', icon: ShoppingCart },
    { id: 'stock', label: 'Manajemen Stok', icon: Package },
    { id: 'debt', label: 'Utang & Piutang', icon: CreditCard },
    { id: 'bookkeeping', label: 'Pembukuan', icon: BookOpen },
    { id: 'reports', label: 'Laporan Usaha', icon: FileText },
    { id: 'contacts', label: 'Kontak', icon: Phone },
    { id: 'accounts', label: 'Saldo Kas & Bank', icon: Wallet },
    { id: 'reminders', label: 'Pengingat', icon: Bell },
    { id: 'receipt', label: 'Pengaturan Nota', icon: Settings },
    { id: 'business-card', label: 'Kartu Nama', icon: User },
    // { id: 'manage-users', label: 'Manajemen Pengguna', icon: Users }, // Contoh menu khusus admin
  ];

  // Filter menu berdasarkan peran pengguna
  const menuItems = allMenuItems.filter(item => {
    if (currentUser?.role === 'admin') {
      return true; // Admin bisa lihat semua
    }
    if (currentUser?.role === 'karyawan') {
      // Karyawan hanya bisa lihat menu tertentu
      return ['pos', 'stock', 'contacts'].includes(item.id);
    }
    return false;
  });

  const products = [
    { id: 1, name: 'Beras 5kg', stock: 25, minStock: 10, price: 65000, cost: 55000, category: 'Sembako', barcode: '8997123456789' },
  ];

  // Helper functions
  const calculateChange = () => {
    const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
    const paid = parseFloat(customerPaid) || 0;
    return paid - total;
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  };

  const updateCartItem = (id, qty) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(0, qty), subtotal: item.price * Math.max(0, qty) }
          : item
      ).filter(item => item.qty > 0)
    );
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      updateCartItem(product.id, existingItem.qty + 1);
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1,
        subtotal: product.price
      }]);
    }
  };

  const renderScreen = () => {
    // Jika role karyawan mencoba mengakses halaman yang tidak diizinkan, arahkan ke halaman default mereka (misal: POS)
    if (currentUser?.role === 'karyawan' && !menuItems.find(item => item.id === currentScreen)) {
      setCurrentScreen('pos');
      return null; // Render ulang akan terjadi
    }

    switch (currentScreen) {
      case 'dashboard': return <Dashboard
        todaySales={todaySales}
        cashBalance={cashBalance}
        pendingDebt={pendingDebt}
        lowStock={lowStock}
      />;
      case 'pos': return <POSScreen
        cartItems={cartItems}
        updateCartItem={updateCartItem}
        addToCart={addToCart}
        products={products}
        getCartTotal={getCartTotal}
        customerPaid={customerPaid}
        setCustomerPaid={setCustomerPaid}
        calculateChange={calculateChange}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />;
      case 'debt': return <DebtScreen
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showDebtForm={showDebtForm}
        setShowDebtForm={setShowDebtForm}
      />;
      case 'bookkeeping': return <BookkeepingScreen
        showTransactionForm={showTransactionForm}
        setShowTransactionForm={setShowTransactionForm}
      />;
      case 'stock': return <StockScreen products={products} showProductForm={showProductForm} setShowProductForm={setShowProductForm} />;
      case 'reports': return <ReportsScreen
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        selectedReport={selectedReport}
        setSelectedReport={setSelectedReport}
      />;
      case 'reminders': return <RemindersScreen showReminderForm={showReminderForm} setShowReminderForm={setShowReminderForm} />;
      case 'receipt': return <ReceiptSettingsScreen />;
      case 'business-card': return <BusinessCardScreen />;
      case 'accounts': return <AccountsScreen />;
      case 'contacts': return <ContactsScreen showContactForm={showContactForm} setShowContactForm={setShowContactForm} />;
      default:
        return <Dashboard
          todaySales={todaySales}
          cashBalance={cashBalance}
          pendingDebt={pendingDebt}
          lowStock={lowStock}
        />;
    }
  };

  if (!currentUser) { // Cek jika currentUser null
    if (authScreen === 'signup') {
      return <SignUpScreen onSignUp={(user) => setCurrentUser(user)} onNavigateToLogin={() => setAuthScreen('login')} />;
    }
    return <LoginScreen
      onLogin={(user) => setCurrentUser(user)}
      onNavigateToSignUp={() => setAuthScreen('signup')}
    />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <div className={`fixed inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out lg:static lg:inset-0 lg:translate-x-0`}>
        <Sidebar
          menuItems={menuItems}
          currentScreen={currentScreen}
          onNavigate={(screen) => {
            setCurrentScreen(screen);
            setSidebarOpen(false);
          }}
          onClose={() => setSidebarOpen(false)}
        />
      </div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          menuItems={menuItems}
          currentScreen={currentScreen}
          onMenuClick={() => setSidebarOpen(true)}
          lowStock={lowStock}
          onLogout={() => setCurrentUser(null)} // Set currentUser menjadi null saat logout
          currentUser={currentUser}
        />
        <main className="flex-1 overflow-y-auto">
          {renderScreen()}
        </main>
      </div>
    </div>
  );
};

export default WarungKuApp;