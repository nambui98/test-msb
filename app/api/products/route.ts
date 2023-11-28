import { Product } from "@/types"

export async function GET() {
    try {

        const products: Product[] = [
            {
                id: 1,
                title: "Thẻ tín dụng",
                content: "Đa dạng lựa chọn theo phong cách chi tiêu",
                imageUrl: "/images/product1.jpeg"
            },
            {
                id: 2,
                title: "Vay Linh Hoạt",
                content: "Giải ngân tức thì, tiêu dùng linh hoạt",
                imageUrl: "/images/product2.jpeg"
            },
            {
                id: 3,
                title: "Mua trước trả sau",
                content: "Chuyển đổi trả góp, nhẹ ví chi tiêu",
                imageUrl: "/images/product3.jpeg"
            }, {
                id: 4,
                title: "Tiền nhanh",
                content: "Nhận khoản vay dự phòng, chủ động và nhanh chóng.",
                imageUrl: "/images/product4.jpeg"
            }, {
                id: 5,
                title: "Tài khoản thanh toán M-Pro",
                content: "Siêu miễn phí, hoàn tiền tới 3,6 triệu đồng",
                imageUrl: "/images/product5.jpeg"
            }, {
                id: 6,
                title: "Thẻ tín dụng",
                content: "Mua bảo hiểm trực tuyến dễ dàng chỉ với vài thao tác",
                imageUrl: "/images/product6.png"
            },
        ]

        return new Response(JSON.stringify(products))
    } catch (error) {
        return new Response(null, { status: 500 })
    }
}

