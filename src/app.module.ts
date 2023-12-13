import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { FeriadosModule } from './feriados/feriados.module';
import { FiliaisModule } from './filiais/filiais.module';
import { TipoDeFeriadoModule } from './tipodeferiado/tipodeferiado.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CargosModule } from './cargos/cargos.module';
import { ClassesSecundariasModule } from './classessecundarias/classessecundarias.module';
import { ClassesPrimariasModule } from './classesprimarias/classesprimarias.module';
import { ClassificacoesModule } from './classificacoes/classificacoes.module';
import { ClientesModule } from './clientes/clientes.module';
import { DivisoesModule } from './divisoes/divisoes.module';
import { EventosPadraoModule } from './eventospadrao/eventospadrao.module';
import { FiscalYearsModule } from './fiscalyears/fiscalyears.module';
import { IndustriasModule } from './industrias/industrias.module';
import { OrigensDeProjetosModule } from './origensdeprojetos/origensdeprojetos.module';
import { ProfissionaisModule } from './profissionais/profissionais.module';
import { ProgramacaoModule } from './programacao/programacao.module';
import { PropostasModule } from './propostas/propostas.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CargosModule,
    ClassesPrimariasModule,
    ClassesSecundariasModule,
    ClassificacoesModule,
    ClientesModule,
    DivisoesModule,
    EventosPadraoModule,
    FeriadosModule,
    FiliaisModule,
    FiscalYearsModule,
    IndustriasModule,
    OrigensDeProjetosModule,
    ProfissionaisModule,
    ProgramacaoModule,
    PropostasModule,
    StaffModule,
    TipoDeFeriadoModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
