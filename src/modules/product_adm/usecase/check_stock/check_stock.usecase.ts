import ProductGateway from "../../gateway/product.gateway";
import { CheckStockInputDto, CheckStockOutputDto } from "./check_stock.dto";

export default class CheckStockUseCase {
    private _productRepository: ProductGateway;
    constructor(productRepository: ProductGateway) {
        this._productRepository = productRepository;
    }

    async execute(input: CheckStockInputDto): Promise<CheckStockOutputDto> {

        const result = await this._productRepository.find(input.productId);

        return {
            productId: result.id.id,
            stock: result.stock
        }
    }

}