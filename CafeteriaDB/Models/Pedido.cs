using System;
using System.Collections.Generic;

namespace CafeteriaDB.Models;

public partial class Pedido
{
    public int PedidoId { get; set; }

    public int ClienteId { get; set; }

    public int ProdutoId { get; set; }

    public DateOnly DataPedido { get; set; }

    public DateOnly DataPrevisao { get; set; }

    public string? StatusPedido { get; set; }

    public virtual Cliente Cliente { get; set; } = null!;

    public virtual Produto Produto { get; set; } = null!;
}
