import ProductAdmFacade from "../facade/product_adm.facade";
import ProductRepository from "../repository/product.repository";
import AddProductUseCase from "../usecase/add_product/add_product.usecase";
import CheckStockUseCase from "../usecase/check_stock/check_stock.usecase";

export default class ProductAdmFacadeFactory {
    static create() {
        const productRepository = new ProductRepository();
        const addProductUsecase = new AddProductUseCase(productRepository);
        const checkStockUsecase = new CheckStockUseCase(productRepository);
        const productFacade = new ProductAdmFacade({ addUsecase: addProductUsecase, stockUsecase: checkStockUsecase });

        return productFacade;
    }
}