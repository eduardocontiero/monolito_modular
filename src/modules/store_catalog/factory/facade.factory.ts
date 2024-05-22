import StoreCatalogFacade from "../facade/store_catalog.facade";
import ProductRepository from "../repository/product.repository";
import FindAllProductsUsecase from "../usecase/find_all_products/find_all_products.usecase";
import FindProductUseCase from "../usecase/find_product/find_product.usecase";

export default class StoreCatalogFacadeFactory {
    static create(): StoreCatalogFacade {
        const productRepository = new ProductRepository();
        const findUseCase = new FindProductUseCase(productRepository);
        const findAllUseCase = new FindAllProductsUsecase(productRepository);

        const facade = new StoreCatalogFacade({
            findUseCase: findUseCase,
            findAllUseCase: findAllUseCase
        });

        return facade;

    }
}