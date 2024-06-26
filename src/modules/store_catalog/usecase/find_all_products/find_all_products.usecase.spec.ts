import Id from "../../../@shared/domain/value_object/id.value-object";
import Product from "../../domain/product.entity";
import FindAllProductsUsecase from "./find_all_products.usecase";

const product = new Product({
    id: new Id("1"),
    name: "Product 1",
    description: "Product 1 description",
    salesPrice: 100
});

const product2 = new Product({
    id: new Id("2"),
    name: "Product 2",
    description: "Product 2 description",
    salesPrice: 100
});

const MockRepository = () => {
    return {
        find: jest.fn(),
        findAll: jest.fn().mockReturnValue(Promise.resolve([product, product2]))
    }
};

describe("Find all products usecase unit test", () => {
    it("should find all products", async () => {

        const productRepository = MockRepository();
        const usecase = new FindAllProductsUsecase(productRepository);

        const result = await usecase.execute();

        expect(productRepository.findAll).toHaveBeenCalled();
        expect(result.products.length).toBe(2);
        expect(result.products[0].id).toBe("1");
        expect(result.products[0].name).toBe("Product 1");
        expect(result.products[0].description).toBe("Product 1 description");
        expect(result.products[0].salesPrice).toBe(100);

    });
});