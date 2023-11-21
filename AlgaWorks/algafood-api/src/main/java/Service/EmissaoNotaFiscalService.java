package Service;

import Models.Cliente;
import Models.Produto;
import Notificacao.NotificadorEmail;

public class EmissaoNotaFiscalService {
    public void emitir(Cliente cliente, Produto produto) {
        NotificadorEmail notificadorEmail = new NotificadorEmail();
        notificadorEmail.notificar(cliente, "Nota Fiscal Emitida!");
    }
}
