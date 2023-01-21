import { ApiProperty } from "@nestjs/swagger";

export class CreateMenuDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    restaurantId?: string;
    @ApiProperty()
    menuStar: number;
    @ApiProperty()
    price: number;
    @ApiProperty()
    categoryId?: string;
}
