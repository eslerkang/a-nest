import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const err = exception.getResponse() as
      | string
      | { error: string; statusCode: 400; message: string[] };

    return response.status(status).json({
      success: false,
      code: status,
      data: typeof err !== 'string' ? err.message : err,
    });
  }
}
