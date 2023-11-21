package Service;

import Models.Cliente;
import Notificacao.Notificador;
import Notificacao.NotificadorEmail;
import org.springframework.stereotype.Component;

@Component
public class AtivacaoClienteService {

    private Notificador notificadorDois;

    public AtivacaoClienteService(NotificadorEmail notificador) {
        this.notificadorDois = notificador;

        System.out.println("Atividcao Cliente Service");
    }

    public void ativar(Cliente cliente) {
        cliente.ativar();
        this.notificadorDois.notificar(cliente, "Cliente ativado");
    }
}
