import { CustomerGroupService, EventBusService } from "@medusajs/medusa"


type InjectedProperties = {
  eventBusService: EventBusService
  customerGroupService: CustomerGroupService
}


class CustomerGroupAssignmentSubscriber {
  private customerGroupService: CustomerGroupService

  constructor(properties: InjectedProperties) {
    this.customerGroupService = properties.customerGroupService;

    properties.eventBusService.subscribe("customer.created", this.handleGroupAssignment);
  }

  handleGroupAssignment = async (data) => {

    let customerGroup;

    // Check if "New Customers" customer group exists
    let customerGroupList = await this.customerGroupService.list({ name: "New Customers" }, { take: 1 });

    // If it doesn't exist, create it
    if (!customerGroupList.length) {
      customerGroup = await this.customerGroupService.create({ name: "New Customers" });
    } else {
      customerGroup = customerGroupList[0];
    }

    // Add customer to "New Customers" customer group
    await this.customerGroupService.addCustomers(customerGroup.id, data.id);
  }
}

export default CustomerGroupAssignmentSubscriber;
