using AjaxImplementation.Data;
using Microsoft.AspNetCore.Mvc;
using AjaxImplementation.Models;

namespace AjaxImplementation.Controllers
{
    public class ProductsController : Controller
    {
        private readonly ApplicationDbContext db;
        public ProductsController(ApplicationDbContext db)
        {
            this.db = db;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AddProduct(Product p)
        {
            db.products.Add(p);
            db.SaveChanges();
            return new JsonResult("");
        }
        public IActionResult ShowProduct()
        {
            var data=db.products.ToList();         
            return new JsonResult(data);
        }
        public IActionResult DeleteProduct(int prodid)
        {
            var data = db.products.Find(prodid);
            if (data != null)
            {
                db.products.Remove(data);
                db.SaveChanges();
                
            }
            return new JsonResult("");
        }
        public IActionResult UpdateProduct(int prodid)
        {
            var data = db.products.Find(prodid);
            
            return new JsonResult(data);
        }
        public IActionResult ModifyProduct(Product p)
        {
            db.products.Update(p);
            db.SaveChanges();
            return new JsonResult("");
        }
        public IActionResult SearchProduct(string searchp)
        {
            if (string.IsNullOrEmpty(searchp))
            {
                var data = db.products.ToList();
                return new JsonResult(data);
            }
            else
            {
                var data = db.products.Where(x=>x.Pname.Contains(searchp) || x.Pcat.Contains(searchp) || x.Price.ToString().Contains(searchp));
                return new JsonResult(data);
            }
     
        }

        public IActionResult HTL()
        {
            var data = db.products.OrderByDescending(t => t.Price).ToList();
            return new JsonResult(data);
        }

        public IActionResult LTH()
        {
            var data = db.products.OrderBy(t => t.Price).ToList();
            return new JsonResult(data);
        }
    }
}
