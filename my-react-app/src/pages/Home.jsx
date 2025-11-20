import Footer from '../components/Footer'
import Header from '../components/Header'
import TourCard from '../components/TourCard'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Text from '../components/Text'
function Home() {
    // mock data
    const tours = [
        {
            id: 1,
            title: 'Tour Du Lịch Cuba',
            image:
                'https://th.bing.com/th/id/OIP.ZpU41Bu7Y9-31RiLXqWqvgHaE6?w=254&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        },
        {
            id: 2,
            title: 'Tour Du Lịch Hoa Ky',
            image:
                'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
        },
        {
            id: 3,
            title: 'Tour Du Lịch Nhat Ban ',
            image:
                'https://th.bing.com/th/id/OIP.iQU5HeSGrfmogUB-EtDohQHaFL?w=294&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        },
        {
            id: 4,
            title: 'Tour Du Lịch Việt Nam',
            image:
                'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
        },
    ]
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main>
                <Heading title="Các Chuyến Đi Nổi Bật" />
                <p className="text-xl font-medium my-2 px-2">
                    Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biêt, luôn
                    sẵn sàng tạo ra những trải nghiệm độc đáo và không quên cho du khách,
                    giúp mang đến những chuyến hành trình tuyệt vời.
                </p>
                <div className="flex gap-2 justify-center">
                    {tours.map(tour => (
                        <TourCard key={tour.id} title={tour.title} image={tour.image} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home