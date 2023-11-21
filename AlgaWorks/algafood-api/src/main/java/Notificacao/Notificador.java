package Notificacao;

import Models.Cliente;

public interface Notificador {
    void notificar(Cliente cliente, String mensagem);
}
