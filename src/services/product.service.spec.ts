import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { ProductService } from './product.service';
import { CreateProduct, DeleteProduct, GetMenyProducts, GetProduct, UpdateProduct } from 'src/dtos/product';

describe('ProductService', () => {
  let service: ProductService;
  let prisma: PrismaClient;
  let idtest: string

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService, PrismaClient],
    }).compile();

    service = module.get<ProductService>(ProductService);
    prisma = module.get<PrismaClient>(PrismaClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Teste para o método createProduct
  it('should create a product', async () => {
    const createProductDto: CreateProduct = { 
      name: 'Test Product', 
      description: 'Description', 
      value: 100, 
      status: 1, 
      userId: '31e8734e-7e96-4dfe-bc06-cbd86c2503dc' };
    jest.spyOn(prisma.product, 'create').mockResolvedValue(createProductDto as any);
    const result = await service.createProduct(createProductDto);
    expect(result).toEqual(createProductDto);
    idtest=result.id
  });

  // Teste para o método getManyProducts
  it('should get many products', async () => {
    const getManyProductsDto: GetMenyProducts = { userId: '31e8734e-7e96-4dfe-bc06-cbd86c2503dc' };
    const products = [{  
      id: idtest,
      name: 'Test Product', 
      description: 'Description', 
      value: 100, 
      status: 1, 
      userId: '31e8734e-7e96-4dfe-bc06-cbd86c2503dc' }];
    jest.spyOn(prisma.product, 'findMany').mockResolvedValue(products as any);
    const result = await service.getManyProducts(getManyProductsDto);
    expect(result).toEqual(products);
  });

  // Teste para o método updateProduct
  it('should update a product', async () => {
    const updateProductDto: UpdateProduct = { id: '1', name: 'Updated Product', description: 'Updated Description', value: 200, status: 2, userId: '1' };
    jest.spyOn(prisma.product, 'update').mockResolvedValue(updateProductDto as any);
    const result = await service.updateProduct(updateProductDto);
    expect(result).toEqual(updateProductDto);
  });

  // Teste para o método getProduct
  it('should get a product', async () => {
    const getProductDto: GetProduct = { id: idtest };
    const product = { 
      id: '1', 
      name: 'Test Product', 
      description: 'Description', 
      value: 100, 
      status: 1, 
      userId: '31e8734e-7e96-4dfe-bc06-cbd86c2503dc' 
    };
    jest.spyOn(prisma.product, 'findFirst').mockResolvedValue(product as any);
    const result = await service.getProduct(getProductDto);
    expect(result).toEqual(product)
    ;
  });

  // Teste para o método deleteProduct
  it('should delete a product', async () => {
    const deleteProductDto: DeleteProduct = { id: '1' };
    jest.spyOn(prisma.product, 'delete').mockResolvedValue(deleteProductDto as any);
    const result = await service.deleteProduct(deleteProductDto);
    expect(result).toEqual(deleteProductDto);
  });
});