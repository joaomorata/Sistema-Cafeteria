using System;
using System.Collections.Generic;

namespace CafeteriaDB.Models;

public partial class Cliente
{
    public int ClienteId { get; set; }

    public string Nome { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Telefone { get; set; }

    public DateOnly? DataCadastro { get; set; }

    public string? StatusConta { get; set; }

    public virtual ICollection<Pedido> Pedidos { get; set; } = new List<Pedido>();
}
