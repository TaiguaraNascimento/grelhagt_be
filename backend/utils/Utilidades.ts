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

  static DateFromString(texto: string): Date {
    try {
      const partes = texto.split('/');
      const data = new Date(`${partes[2]}-${partes[1]}-${partes[0]}`);

      if (data instanceof Date && isNaN(data.getTime())) {
        return null;
      } else {
        return data;
      }
    } catch {
      return null;
    }
  }

  static verificarDataValida(data: any): boolean {
    if (!data) {
      return false;
    } else {
      let dataConvertida;
      try {
        dataConvertida = new Date(data);
      } catch {
        return false;
      }

      if (dataConvertida instanceof Date == false) {
        return false;
      }

      return true;
    }
  }
}

export default Utilidades;
