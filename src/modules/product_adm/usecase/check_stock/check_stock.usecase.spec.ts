import Id from "../../../@shared/domain/value_object/id.value-object";
import Product from "../../domain/product.entity";
import AddProductUseCase from "../add_product/add_product.usecase";
import CheckStockUseCase from "./check_stock.usecase";

const product = new Product({
    id: new Id("1"),
    name: "Product 1",
    description: "Product 1 description",
    purchasePrice: 100,
    stock: 10,
    createdAt: new Date(),
    updatedAt: new Date()
});


const MockRepository = () => {
    return {
        add: jest.fn(),
        find: jest.fn().mockResolvedValue(product)
    }
}

describe("CheckStock usecase unit test", () => {
    it("should get stock of a product", async () => {
        const productRepository = MockRepository();
        const addProductUsecase = new AddProductUseCase(productRepository);
        const checkStockUsecase = new CheckStockUseCase(productRepository);


        const input = {
            name: "Product 1",
            description: "Product 1 description",
            purchasePrice: 100,
            stock: 10
        };

        const result = await addProductUsecase.execute(input);


        const stock = await checkStockUsecase.execute({ productId: result.id });

        expect(productRepository.find).toHaveBeenCalled();
        expect(stock.productId).toBe("1");
    });
});