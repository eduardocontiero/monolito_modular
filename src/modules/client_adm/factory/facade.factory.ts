import ClientAdmFacade from "../facade/client_adm.facade";
import ClientRepository from "../repository/client.repository";
import AddClientUseCase from "../usecase/add_client/add_client.usecase";
import FindClientUseCase from "../usecase/find_client/find_client.usecase";


export default class ClientAdmFacadeFactory {
    static create() {
        const productRepository = new ClientRepository();
        const addProductUsecase = new AddClientUseCase(productRepository);
        const findUsecase = new FindClientUseCase(productRepository);
        const clientFacade = new ClientAdmFacade({ addUsecase: addProductUsecase, findUsecase: findUsecase });

        return clientFacade;
    }
}