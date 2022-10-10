import {Delete, Get, JsonController, Param, QueryParam, Req, Res, UseBefore} from "routing-controllers";
import {AuthMiddleware} from "../middlewares/auth.middleware";
import {Response} from "express";
import {IRequest} from "../bin/common/interfaces/request.interface";
import {getCustomService} from "../bin/utils/service-register.utility";
import {UserService} from "../services/user.service";
import {IResponse} from "../bin/common/interfaces/respons.interface";
import {response, responseError} from "../bin/utils/response.utility";
import {StatusCodesEnum} from "../bin/common/enum/status-codes.enum";
import {L} from "../bin/utils";

@UseBefore(AuthMiddleware)
@JsonController('/api/v1.0')
export class UserController {
    @Get('/user/list')
    async list(@Req() req: IRequest, @Res() res: Response,
                @QueryParam('take') take: number, @QueryParam('skip') skip: number): Promise<Response<IResponse>> {
        const userService = getCustomService(UserService);
        const users = await userService.allUsers({take, skip});
        const total_count = await userService.totalCount();
        return response(res, false, users, { row_count: users.length, total_count: total_count }, null);
    }

    @Get('/user/:user_id')
    async user(@Req() req: IRequest, @Res() res: Response, @Param('user_id') user_id: string,
                @QueryParam('take') take: number, @QueryParam('skip') skip: number): Promise<Response<IResponse>> {
        const userService = getCustomService(UserService);
        const user = await userService.findByID(user_id, false);
        return response(res, false, user, {}, user ? null : L('NOT_FOUND', req.language_code, user_id));
    }

    @Delete('/user/:user_id')
    async delete(@Req() req: IRequest, @Res() res: Response, @Param('user_id') user_id: string): Promise<Response<IResponse>> {
        const userService = getCustomService(UserService);
        if (await userService.delete(user_id)) {
            return response(res, false, null, {}, L('SUCCESSFULLY', req.language_code), StatusCodesEnum.CREATED);
        }
        return responseError(res, null, {}, L('UNEXPECTED_ERROR', req.language_code), StatusCodesEnum.BAD_REQUEST);
    }
}
