const orders = {
    '100042': {
        orderNumber: '100042',
        customer: 'Alpine Retail Ltd',
        status: 'Processing',
        estimatedDelivery: '29 September 2026'
    },
    '100043': {
        orderNumber: '100043',
        customer: 'Contoso Manufacturing',
        status: 'Shipped',
        estimatedDelivery: '26 September 2026',
        carrier: 'DHL',
        trackingNumber: 'DHL-GB-784512963'
    },
    '100044': {
        orderNumber: '100044',
        customer: 'Northwind Traders',
        status: 'Awaiting Dispatch',
        estimatedDelivery: '30 September 2026'
    }
};

function getOrder(orderNumber) {
    return orders[orderNumber] || null;
}

function formatOrder(order) {
    if (!order) {
        return 'Order not found';
    }

    const details = [
        `Order: ${order.orderNumber}`,
        `Customer: ${order.customer}`,
        `Status: ${order.status}`,
        `Estimated Delivery: ${order.estimatedDelivery}`
    ];

    if (order.carrier) {
        details.push(`Carrier: ${order.carrier}`);
    }

    if (order.trackingNumber) {
        details.push(`Tracking Number: ${order.trackingNumber}`);
    }

    return details.join('\n');
}

module.exports = {
    getOrder,
    formatOrder
};
