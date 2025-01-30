import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateProduct, DeleteProduct, GetMenyProducts, GetProduct, UpdateProduct } from "src/dtos/product";

@Injectable()
export class ProductService{
    private readonly prisma = new PrismaClient();

    async createProduct({name, description, value, status, userId}: CreateProduct){
        const product = await this.prisma.product.create({
            data: {
                name,
                description,
                value,
                status,
                userId,
            },
        }).then((e) => {
            console.log(e);
        })
        .catch((err) => {
            console.log(err);
        });
        return product;
    }

    async getManyProducts({userId}: GetMenyProducts){
        const products = await this.prisma.product.findMany({
            where: {
                userId: userId,
            },
            orderBy:{
                name:'asc'
            }
            }).then((e) => {
            console.log(e);
        }).catch((err) => {
            console.log(err);
        });
        return products;
    }

    async updateProduct({id, name, description, value, status, userId}: UpdateProduct){
        const product = await this.prisma.product.update({
            where: {
                id: id,
                },
            data: {
                name,
                description,
                value,
                status,
                userId,
            },
        }).then((e) => {
            console.log(e);
        })
        .catch((err) => {
            console.log(err);
        });
        return product;
    }
    
    async getProduct({id}: GetProduct){
        const product = await this.prisma.product.findFirst({
            where: {
                id: id,
            },
        }).then((e) => {
            console.log(e);
        }).catch((err) => {
            console.log(err);
        });
        return product;
    }

    async deleteProduct({id}: DeleteProduct){
        const product = await this.prisma.product.delete({
            where: {
                id: id,
            }
        }).then((e) => {
            console.log(e);
        })
        .catch((err) => {
            console.log(err);
        });
        return product;
    }
}


