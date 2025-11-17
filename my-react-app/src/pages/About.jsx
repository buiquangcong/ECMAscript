import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Button from '../components/Button'

function About() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className=" p-4 md:p-8">
                <Heading title="Về Chúng Tôi" />

                <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
                    <p className="text-xl font-medium leading-relaxed">
                        Chúng tôi là công ty du lịch hàng đầu với sứ mệnh mang lại những trải nghiệm du lịch tuyệt vời nhất, kết nối mọi người với những nền văn hóa và vẻ đẹp thiên nhiên độc đáo trên toàn thế giới.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 text-blue-600">
                        Giá Trị Cốt Lõi
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>**Uy tín & Chất lượng:** Cam kết mang đến dịch vụ du lịch chất lượng cao và đáng tin cậy.</li>
                        <li>**Sáng tạo:** Luôn tìm kiếm và thiết kế các tour du lịch độc đáo, mới lạ.</li>
                        <li>**Bền vững:** Du lịch có trách nhiệm, bảo vệ môi trường và văn hóa địa phương.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-8 text-blue-600">
                        Đội Ngũ Của Chúng Tôi
                    </h3>
                    <div>
                        <Button add="Xem Thêm" detail="Liên Hệ Với Chúng Tôi" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About