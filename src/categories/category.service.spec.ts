import CategoryService from "./category.service";
import CategoryModel from './category.interface';

const categoryService = new CategoryService();

describe('Method get data -> CategoryService', () => {
    test('probando el método getData', () => {
        const expected= expect.any(Array<CategoryModel>);
        const result = categoryService.getData();

        expect(result).toStrictEqual(expected);
    })
})