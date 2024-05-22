import UseCaseInterface from "../../@shared/usecase/usecase.interface";
import ClientAdmFacadeInterface, { AddClientFacadeInputDto, FindClientFacadeInputDto, FindClientFacadeOutputDto } from "./client_adm.facade.interface";


export interface UseCasesProps {
    addUsecase: UseCaseInterface;
    findUsecase: UseCaseInterface;
}
export default class ClientAdmFacade implements ClientAdmFacadeInterface {
    private _addUsecase: any;
    private _findUsecase: any;

    constructor(usecasesProps: UseCasesProps) {
        this._addUsecase = usecasesProps.addUsecase;
        this._findUsecase = usecasesProps.findUsecase;
    }


    add(input: AddClientFacadeInputDto): Promise<void> {
       
        return this._addUsecase.execute(input);
    }
    find(input: FindClientFacadeInputDto): Promise<FindClientFacadeOutputDto> {
        return this._findUsecase.execute(input);
    }
}