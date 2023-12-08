import crypto from 'crypto';

class Utilidades {
  static TamanhoDeArquivoEmKB(tamanho_em_bytes: number): number {
    const tamanho_em_kb: number = tamanho_em_bytes / 1024;
    return Math.round(tamanho_em_kb * 100) / 100;
  }

  static GerarHashAleatorio(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  static GerarHashDeTexto(texto: string): string {
    return crypto.createHash('sha256').update(texto).digest('hex');
  }
}

export default Utilidades;
