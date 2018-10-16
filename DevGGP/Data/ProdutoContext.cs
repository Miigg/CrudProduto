using Microsoft.EntityFrameworkCore;

namespace DevGGP.Models
{
    public class ProdutoContext : DbContext
    {
        public ProdutoContext (DbContextOptions<ProdutoContext> options)
            : base(options)
        {
        }

        public DbSet<DevGGP.Models.Produto> Produto { get; set; }
    }
}
