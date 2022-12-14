import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
        return response.status(400).json({error: "Category Already Exists"})
    }

    categoriesRepository.create({name, description})
    
    // 201 criado
    return response.status(201).send();
});

categoriesRoutes.get("/", (resquest, response) => {
   const all = categoriesRepository.list();

   return response.json(all);
})

export { categoriesRoutes };