import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'

function Booking() {
    // Khai báo biến tĩnh (để hiển thị giao diện mẫu)
    // Sau này nếu muốn bấm nút cộng trừ được thì bạn mới cần thêm logic vào đây
    const priceAdult = 2500000;
    const priceChild = 1250000;
    const adults = 1; // Đang để cứng là 1
    const children = 0; // Đang để cứng là 0
    const totalPrice = (adults * priceAdult) + (children * priceChild);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-50">
            <Header />

            <main className="py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    {/* Tiêu đề trang */}
                    <div className="mb-8">
                        <Heading title="Đặt Tour Ngay" />
                        <p className="text-center text-gray-600 mt-2">Hoàn tất thông tin để xác nhận chuyến đi của bạn.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* --- CỘT TRÁI: FORM ĐIỀN THÔNG TIN --- */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Block 1: Thông tin liên hệ */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                    Thông Tin Liên Hệ
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
                                        <input type="text" placeholder="Nguyễn Văn A" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" placeholder="email@example.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                        <input type="tel" placeholder="0912 345 678" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                                        <input type="text" placeholder="Hà Nội, Việt Nam" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                                    </div>
                                </div>
                            </div>

                            {/* Block 2: Số lượng khách */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                    Số Lượng Khách
                                </h3>
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Người lớn */}
                                    <div className="flex-1 flex items-center justify-between p-4 border rounded-lg hover:border-blue-300 transition">
                                        <div>
                                            <p className="font-bold text-gray-800">Người lớn</p>
                                            <p className="text-sm text-gray-500">&gt; 12 tuổi</p>
                                            <p className="text-blue-600 font-bold mt-1">{priceAdult.toLocaleString()}đ</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-bold cursor-not-allowed">-</button>
                                            <span className="w-8 text-center font-bold text-lg">{adults}</span>
                                            <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">+</button>
                                        </div>
                                    </div>

                                    {/* Trẻ em */}
                                    <div className="flex-1 flex items-center justify-between p-4 border rounded-lg hover:border-blue-300 transition">
                                        <div>
                                            <p className="font-bold text-gray-800">Trẻ em</p>
                                            <p className="text-sm text-gray-500">5 - 12 tuổi</p>
                                            <p className="text-blue-600 font-bold mt-1">{priceChild.toLocaleString()}đ</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-bold cursor-not-allowed">-</button>
                                            <span className="w-8 text-center font-bold text-lg">{children}</span>
                                            <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Block 3: Phương thức thanh toán */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                                    Phương Thức Thanh Toán
                                </h3>
                                <div className="space-y-3">
                                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                        <input name="payment" type="radio" className="w-5 h-5 text-blue-600" defaultChecked />
                                        <span className="ml-3 font-medium text-gray-700">Chuyển khoản ngân hàng (QR Code)</span>
                                    </label>
                                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                        <input name="payment" type="radio" className="w-5 h-5 text-blue-600" />
                                        <span className="ml-3 font-medium text-gray-700">Thẻ tín dụng / Ghi nợ quốc tế</span>
                                    </label>
                                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                        <input name="payment" type="radio" className="w-5 h-5 text-blue-600" />
                                        <span className="ml-3 font-medium text-gray-700">Tiền mặt tại văn phòng</span>
                                    </label>
                                </div>
                            </div>

                        </div>

                        {/* --- CỘT PHẢI: TÓM TẮT ĐƠN HÀNG --- */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
                                <div className="h-48 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2070&auto=format&fit=crop"
                                        alt="Tour Da Nang"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0  from-black/80 to-transparent p-4">
                                        <h4 className="text-white font-bold text-lg">Đà Nẵng - Hội An - Bà Nà</h4>
                                    </div>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="space-y-3 text-sm border-b border-dashed border-gray-200 pb-4">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Mã Tour:</span>
                                            <span className="font-medium text-gray-900">GB-DN01</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Khởi hành:</span>
                                            <span className="font-medium text-gray-900">25/12/2025</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Thời gian:</span>
                                            <span className="font-medium text-gray-900">4 Ngày 3 Đêm</span>
                                        </div>
                                    </div>

                                    {/* Chi tiết giá */}
                                    <div className="space-y-3 pb-4 border-b border-gray-200">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Người lớn <span className="text-xs bg-gray-100 px-1 rounded">x{adults}</span></span>
                                            <span className="font-medium text-gray-900">{adults * priceAdult}đ</span>
                                        </div>
                                        {children > 0 && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Trẻ em <span className="text-xs bg-gray-100 px-1 rounded">x{children}</span></span>
                                                <span className="font-medium text-gray-900">{children * priceChild}đ</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Tổng tiền */}
                                    <div>
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="font-bold text-gray-800">Tổng tiền:</span>
                                            <span className="text-2xl font-bold text-blue-600">{totalPrice}đ</span>
                                        </div>
                                        <p className="text-xs text-gray-400 text-right mb-6">Đã bao gồm thuế & phí</p>

                                        <button className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                                            Xác Nhận Đặt Tour
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Booking