import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
// import Button from '../components/Button' 

function About() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800">
            <Header />

            <main className="">
                <div className="relative w-full h-[400px] md:h-[500px]">
                    <img
                        src="https://bcp.cdnchinhphu.vn/Uploaded/duongphuonglien/2020_09_24/giai%20nhat%20thuyen%20hoa.jpg"
                        alt="Travel Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-sm">
                            Khám Phá Thế Giới Cùng Chúng Tôi
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 max-w-2xl font-medium">
                            Hành trình vạn dặm bắt đầu từ một bước chân.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Heading title="Về Chúng Tôi" />

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Chúng tôi là công ty du lịch hàng đầu với sứ mệnh mang lại những trải nghiệm du lịch tuyệt vời nhất. Tại đây, mỗi chuyến đi không chỉ là kỳ nghỉ, mà là hành trình khám phá văn hóa và thiên nhiên.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Với đội ngũ hướng dẫn viên bản địa giàu kinh nghiệm, chúng tôi cam kết mang đến cho bạn những khoảnh khắc an toàn, vui vẻ và đáng nhớ.
                            </p>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://s3.centours.vn/centours/file-gallery/nha-trang-centours.jpg"
                                alt="Happy travelers"
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <div>
                            <div className="text-4xl font-bold text-blue-600">10+</div>
                            <div className="text-sm text-gray-600 mt-2">Năm Kinh Nghiệm</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600">500+</div>
                            <div className="text-sm text-gray-600 mt-2">Tour Đã Tổ Chức</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600">20k+</div>
                            <div className="text-sm text-gray-600 mt-2">Khách Hàng</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600">50+</div>
                            <div className="text-sm text-gray-600 mt-2">Đối Tác</div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Giá Trị Cốt Lõi</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2332/2332039.png"
                                    alt="Uy tín"
                                    className="w-16 h-16 mx-auto mb-6"
                                />
                                <h4 className="text-xl font-bold mb-3">Uy Tín & Chất Lượng</h4>
                                <p className="text-gray-600">Cam kết dịch vụ chuẩn 5 sao, an toàn tuyệt đối.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png"
                                    alt="Sáng tạo"
                                    className="w-16 h-16 mx-auto mb-6"
                                />
                                <h4 className="text-xl font-bold mb-3">Tour Độc Đáo</h4>
                                <p className="text-gray-600">Thiết kế lịch trình mới lạ, không trùng lặp.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2913/2913465.png"
                                    alt="Bền vững"
                                    className="w-16 h-16 mx-auto mb-6"
                                />
                                <h4 className="text-xl font-bold mb-3">Du Lịch Xanh</h4>
                                <p className="text-gray-600">Bảo vệ môi trường và văn hóa địa phương.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Đội Ngũ Hướng Dẫn Viên</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Thành viên 1 */}
                            <div className="text-center group">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md group-hover:border-blue-500 transition-colors">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Member" className="w-full h-full object-cover" />
                                </div>
                                <h5 className="font-bold text-lg">Trần Văn A</h5>
                                <p className="text-sm text-gray-500">CEO & Founder</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md group-hover:border-blue-500 transition-colors">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Member" className="w-full h-full object-cover" />
                                </div>
                                <h5 className="font-bold text-lg">Nguyễn Thị B</h5>
                                <p className="text-sm text-gray-500">Trưởng phòng Tour</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md group-hover:border-blue-500 transition-colors">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="Member" className="w-full h-full object-cover" />
                                </div>
                                <h5 className="font-bold text-lg">Lê Văn C</h5>
                                <p className="text-sm text-gray-500">Hướng Dẫn Viên</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md group-hover:border-blue-500 transition-colors">
                                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="Member" className="w-full h-full object-cover" />
                                </div>
                                <h5 className="font-bold text-lg">Phạm Thị D</h5>
                                <p className="text-sm text-gray-500">CSKH</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-600 rounded-2xl p-12 text-center text-white shadow-xl">
                        <h3 className="text-3xl font-bold mb-4">Sẵn sàng cho chuyến đi tiếp theo?</h3>
                        <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
                            Liên hệ ngay để nhận ưu đãi giảm giá 20% cho khách hàng mới.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md">
                                Đặt Tour Ngay
                            </button>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}

export default About