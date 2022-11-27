import { Controller, Get } from "@nestjs/common";

@Controller('v1')
export class TestController {
    
    @Get('test')
    async getTodos() {
        return "todos.map((todo) => new TodoPresenter(todo))";
      }
}