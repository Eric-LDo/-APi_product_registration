import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProduct, DeleteProduct, GetMenyProducts, GetProduct, UpdateProduct } from "src/dtos/product";
import { ProductService } from "src/services/product.service";



@Controller('/product')
export class ProductController {
    constructor(private readonly ProductService: ProductService){}
    @Post()
    createProduct(@Body() Body: CreateProduct) {
        return this.ProductService.createProduct(Body);
    }
    @Get('/:id')
    getProduct(@Param() id: GetProduct) {
        return this.ProductService.getProduct(id);
    }

    @Put()
    updateProduct(@Body() body: UpdateProduct) {
        return this.ProductService.updateProduct(body);
    }

    @Get('/list/:userId')
    getManyProducts(@Param() userId: GetMenyProducts) {
        return this.ProductService.getManyProducts(userId);
    }

    @Delete('/:id')
    deleteProduct(@Param() body: DeleteProduct){
        return this.ProductService.deleteProduct(body);
    }

}

