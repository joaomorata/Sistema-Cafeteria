async function buscarDados() {
    var inputNome = document.getElementById("nomeCliente").value;
    
    if (inputNome == "") {
        alert("Digite um nome primeiro.");
        return;
    }

    try {
        // 1. Busca os clientes
        var respostaClientes = await fetch("http://localhost:5237/api/Cliente");
        var clientes = await respostaClientes.json();
        
        var clienteEncontrado = null;

        // Procura o cliente na lista usando um FOR simples
        for (var i = 0; i < clientes.length; i++) {
            if (clientes[i].nome == inputNome) {
                clienteEncontrado = clientes[i];
                break;
            }
        }

        if (clienteEncontrado == null) {
            alert("Cliente não encontrado.");
            return;
        }

        // Preenche os dados na tela
        document.getElementById("lblNome").innerText = clienteEncontrado.nome;
        document.getElementById("lblEmail").innerText = clienteEncontrado.email;
        document.getElementById("lblStatus").innerText = clienteEncontrado.statusConta;

        // 2. Busca os pedidos
        var respostaPedidos = await fetch("http://localhost:5237/api/Pedido/listarPedidosCustom");
        var pedidos = await respostaPedidos.json();
        
        var corpoTabela = document.getElementById("corpoTabela");
        corpoTabela.innerHTML = ""; // Limpa a tabela
        
        var temPedido = false;

        // Preenche a tabela com os pedidos do cliente
        for (var j = 0; j < pedidos.length; j++) {
            var pedido = pedidos[j];
            
            if (pedido.clienteID == clienteEncontrado.clienteId) {
                temPedido = true;
                
                // Formata a data de forma simples
                var dataPed = new Date(pedido.dataPedido).toLocaleDateString();
                var dataPrev = new Date(pedido.dataPrevisao).toLocaleDateString();

                // Monta a linha da tabela
                var linha = "<tr>";
                linha += "<td>" + pedido.nomeProduto + "</td>";
                linha += "<td>" + dataPed + "</td>";
                linha += "<td>" + dataPrev + "</td>";
                linha += "<td>[" + pedido.statusPedido + "]</td>";
                linha += "</tr>";
                
                corpoTabela.innerHTML += linha;
            }
        }

        if (temPedido == false) {
            corpoTabela.innerHTML = "<tr><td colspan='4'>Nenhum pedido cadastrado.</td></tr>";
        }

    } catch (erro) {
        alert("Erro na conexão com a API.");
    }
}