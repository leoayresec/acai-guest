import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { EmailVerificacaoModule } from '../email_verificacao/email_verificacao.module';
import { EmailModule } from '../config/email/email.module';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [
    EmailVerificacaoModule,
    EmailModule,
  ],
  controllers: [EmpresaController],
  providers: [EmpresaService, PrismaService],
})
export class EmpresaModule {}
