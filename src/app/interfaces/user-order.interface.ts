export interface UserOrder{
    amount_due: number;
    bill_lines: Array<{
        description: string;
        price: number;
        quantity: number;
    }>;
    shipment: {
        address: string;
        city: string;
        delivered: string;
        estimated_arrival: Date;
        phone_number: string;
        state: string;
        zipcode: string;
    }
    total: number
}