import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty()
    id: string
    @ApiProperty()
    name: string
    @ApiProperty()
    description: string
}
