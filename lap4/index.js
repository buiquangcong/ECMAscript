
async function processOrderAsync(orderId) {
    try {
        const order = await getOrderAsync(orderId);
        const user = await getUserAsync(order.userId);
        const products = await getProductsAsync(order.productIds);
        return { order, user, products };

    } catch (error) {
        console.error(`Không thể xử lý đơn hàng ${orderId}:`, error);
        return null;
    }
}