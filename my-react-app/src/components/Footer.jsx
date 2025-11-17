export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white mt-10">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Cột 1: Giới thiệu */}
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-orange-400">ECMA - WD20307</h3>
                    <p className="text-gray-200 leading-relaxed">
                        ECMA - WD20307 là đơn vị cung cấp dịch vụ du lịch lữ hành Quốc tế,
                        chuyên thị trường Mỹ, Canada, Châu Âu, Úc, Singapore - Malaysia,
                        Thái Lan. Ngoài ra còn chuyên Du lịch MICE, tổ chức Event, TeamBuilding, Gala Dinner.
                    </p>
                </div>

                {/* Cột 2: Liên kết nhanh */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-orange-300">Liên kết nhanh</h3>
                    <ul className="space-y-2 text-gray-200">
                        <li className="hover:text-white cursor-pointer">Trang chủ</li>
                        <li className="hover:text-white cursor-pointer">Tour du lịch</li>
                        <li className="hover:text-white cursor-pointer">Giới thiệu</li>
                        <li className="hover:text-white cursor-pointer">Liên hệ</li>
                    </ul>
                </div>

                {/* Cột 3: Liên hệ */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-orange-300">Liên hệ</h3>
                    <p className="text-gray-200">📍 123 Đường ABC, TP. Hồ Chí Minh</p>
                    <p className="text-gray-200">📞 0909 123 456</p>
                    <p className="text-gray-200">✉️ contact@ecma-tour.vn</p>
                </div>
            </div>

            {/* Dòng cuối */}
            <div className="bg-blue-950 text-center py-3 text-gray-300 text-sm">
                © {new Date().getFullYear()} ECMA - WD20307. All rights reserved.
            </div>
        </footer>
    );
}
