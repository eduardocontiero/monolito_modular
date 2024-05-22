import UseCaseInterface from "../../@shared/usecase/usecase.interface";
import ProductAdmFacadeInterface, { AddProductFacadeInputDto, CheckStockFacadeInputDto, CheckStockFacadeOutputDto } from "./product_adm.facade.interface";

export interface UseCasesProps {
    addUsecase: UseCaseInterface;
    stockUsecase: UseCaseInterface;
}
export default class ProductAdmFacade implements ProductAdmFacadeInterface {
    private _addUsecase: any;
    private _checkStockUsecase: any;

    constructor(usecasesProps: UseCasesProps) {
        this._addUsecase = usecasesProps.addUsecase;
        this._checkStockUsecase = usecasesProps.stockUsecase;
    }


    addProduct(input: AddProductFacadeInputDto): Promise<void> {
        // caso o dto do caso de uso for !- do dto da facade, converter o dto da facade para o dto do caso de uso
        return this._addUsecase.execute(input);
    }
    checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
        return this._checkStockUsecase.execute(input);
    }
}