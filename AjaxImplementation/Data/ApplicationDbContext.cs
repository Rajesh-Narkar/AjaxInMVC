using Microsoft.EntityFrameworkCore;
using AjaxImplementation.Models;

namespace AjaxImplementation.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
        
        }

        public DbSet<Product> products { get; set; }

    }
}
