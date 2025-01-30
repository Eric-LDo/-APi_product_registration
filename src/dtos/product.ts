import { IsNotEmpty } from 'class-validator'

//
export class CreateProduct {
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    name: string    
    description?: string
    @IsNotEmpty({ message: 'Preço é obrigatório' })
    value: number
    @IsNotEmpty({ message:'Status é obrigatório'})
    status: number
    @IsNotEmpty({ message: 'O id do usuário é obrigatório'})
    userId: string
}

//
export class UpdateProduct {
    @IsNotEmpty({ message: 'id é obrigatório' })
    id: string
    name?: string
    description?: string
    value?: number
    status?: number
    userId?: string
}

//
export class GetProduct {
    @IsNotEmpty({ message: 'id é obrigatório' })
    id: string
}

//
export class GetMenyProducts {
    @IsNotEmpty({ message: 'id é obrigatório' })
    userId: string
}

//
export class DeleteProduct {
    @IsNotEmpty({ message: 'id é obrigatório' })
    id: string
}