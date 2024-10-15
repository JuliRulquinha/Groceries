using Newtonsoft.Json;
using System.Runtime.Serialization.Formatters.Binary;

namespace PersistenceDemo
{
  public class Product {
    public string Name { get; set; }
    public string ImgUrl { get; set; }
    public string Description { get; set; }

    public double Price { get; set; }
    public int Quantity { get; set; }
    public Boolean isAvailable { get; set; }
  }  

} 