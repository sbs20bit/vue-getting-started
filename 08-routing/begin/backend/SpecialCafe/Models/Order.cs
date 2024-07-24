
namespace SpecialCafe.Models {
    public class Order
    {
        public int Id { get; set; }
        public string? CustomerName { get; set; }
        public List<Drink> DrinksOrdered { get; set; } = new List<Drink>();
    }
}
