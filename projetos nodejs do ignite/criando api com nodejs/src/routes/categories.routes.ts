import { Router } from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { CategoriesRepository } from '../repositories/CategoriesRepository';



const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);
    createCategoryService.execute({name, description})
    // 201 criado
    return response.status(201).send();
});

categoriesRoutes.get("/", (resquest, response) => {
   const all = categoriesRepository.list();

   return response.json(all);
})

export { categoriesRoutes };