using system;
using Newtonsoft.Json;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;
class Program{
    static void Main(string [] agrs)
    {
        Product List<Product> = null;
        using (StreamReader reader = new StreamReader("productBasket.json"))
        {
            List<Product> = JsonConvert.DeserializeObject<List<Product>>(reader.ReadToEnd());
        }
        
    }
}