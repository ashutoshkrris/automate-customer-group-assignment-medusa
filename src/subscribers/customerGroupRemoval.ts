import { CustomerService, CustomerGroupService, EventBusService, OrderService } from "@medusajs/medusa"


type InjectedProperties = {
    eventBusService: EventBusService
    customerGroupService: CustomerGroupService
    customerService: CustomerService
    orderService: OrderService
}


class CustomerGroupRemovalSubscriber {
    private customerGroupService: CustomerGroupService
    private customerService: CustomerService
    private orderService: OrderService

    constructor(properties: InjectedProperties) {
        this.customerGroupService = properties.customerGroupService;
        this.customerService = properties.customerService;
        this.orderService = properties.orderService;

        properties.eventBusService.subscribe("order.placed", this.handleGroupRemoval);
    }

    handleGroupRemoval = async (data) => {

        // Retrieve the order by id
        const order = await this.orderService.retrieve(data.id);

        // Retrieve the customer associated with the order and its groups
        const customer = await this.customerService.retrieve(order.customer_id, { relations: ["groups"] });

        // Check if the customer is in the "New Customers" group
        const customerInGroup = customer.groups.find(group => group.name === "New Customers");

        // If the customer is in the "New Customers" group, remove it
        if (customerInGroup) {
            await this.customerGroupService.removeCustomer(customerInGroup.id, [customer.id]);
        }
    }
}

export default CustomerGroupRemovalSubscriber;
