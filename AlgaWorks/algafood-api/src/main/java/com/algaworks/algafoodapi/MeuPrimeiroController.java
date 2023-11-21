package com.algaworks.algafoodapi;

import Models.Cliente;
import Service.AtivacaoClienteService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MeuPrimeiroController {

    private AtivacaoClienteService ativacaoClienteService;

    public MeuPrimeiroController(AtivacaoClienteService ativacaoClienteService) {
        this.ativacaoClienteService = ativacaoClienteService;
    }

    @GetMapping("/hello-world")
    @ResponseBody
    public String HelloWorld() {
        Cliente c = new Cliente("Gustavo", "121312", "gustavo@gmail.com");
        c.ativar();
        return "Hello World";
    }
}