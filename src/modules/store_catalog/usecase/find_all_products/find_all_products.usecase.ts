import UseCaseInterface from "../../../@shared/usecase/usecase.interface";
import ProductGateway from "../../gateway/product.gateway";
import { FindAllProductsOutputDto } from "./find_all_products.dto";

export default class FindAllProductsUsecase implements UseCaseInterface {



    constructor(private productRepository: ProductGateway) {

    }

    async execute(): Promise<FindAllProductsOutputDto> {
        const products = await this.productRepository.findAll();

        return {
            products: products.map((product) => ({

                id: product.id.id,
                name: product.name,
                description: product.description,
                salesPrice: product.salesPrice
            }))  
        }
    }

}