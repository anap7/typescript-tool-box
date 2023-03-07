import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            new Customer("", "Jonis");
        }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            new Customer("3432443", "");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        // Arrange
       const customer = new Customer("3293", "Cleide");

       // Act
       customer.changeName("Neidecleide");

       // Assert
       expect(customer.name).toBe("Neidecleide")
    });

    it("should activate customer", () => {
        // Arrange
       const customer = new Customer("32933", "CustomerTest");
       const address = new Address("Street 1", 325, "34532-173", "São Paulo");

       customer.Address = address;
       
       customer.activate();

       expect(customer.isActive()).toBe(true);
    });

    it("should deactivate customer", () => {
        // Arrange
       const customer = new Customer("32933", "CustomerTest");
       
       customer.deactivate();

       expect(customer.isActive()).toBe(false);
    });

    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new Customer("32933", "CustomerTest");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });
});