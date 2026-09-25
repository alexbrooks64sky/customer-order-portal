const { getOrder, formatOrder } = require('../src/orders');

describe('Customer Order Portal', () => {
    test('Order 100042 can be retrieved', () => {
        const order = getOrder('100042');
        expect(order).toBeTruthy();
        expect(order.orderNumber).toBe('100042');
    });

    test('Order contains correct customer', () => {
        const order = getOrder('100042');
        expect(order.customer).toBe('Alpine Retail Ltd');
    });

    test('Order contains a delivery estimate', () => {
        const order = getOrder('100042');
        expect(order.estimatedDelivery).toBeTruthy();
    });

    test('Unknown order returns null', () => {
        expect(getOrder('999999')).toBeNull();
    });

    test('Order can be formatted for display', () => {
        const output = formatOrder(getOrder('100042'));
        expect(output).toContain('Order: 100042');
        expect(output).toContain('Status: Processing');
    });

    test('Shipped order contains carrier information', () => {
        const order = getOrder('100043');
        expect(order.carrier).toBe('DHL');
    });

    test('Shipped order contains a tracking number', () => {
        const order = getOrder('100043');
        expect(order.trackingNumber).toBe('DHL-GB-784512963');
    });

    test('Tracking information is displayed for shipped orders', () => {
        const output = formatOrder(getOrder('100043'));
        expect(output).toContain('Carrier: DHL');
        expect(output).toContain('Tracking Number: DHL-GB-784512963');
    });
});
