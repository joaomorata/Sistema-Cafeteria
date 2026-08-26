using System;
using System.Collections.Generic;

namespace CafeteriaDB.Models;

public partial class Produto
{
    public int ProdutoId { get; set; }

    public string Nome { get; set; } = null!;

    public decimal Preco { get; set; }

    public int QuantidadeEstoque { get; set; }

    public int? CategoriaId { get; set; }

    public virtual Categoria? Categoria { get; set; }

    public virtual ICollection<Pedido> Pedidos { get; set; } = new List<Pedido>();
}
