using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.IO;
using SpecialCafe.Models;
using Newtonsoft.Json;

[Route("api/[controller]")]
[ApiController]
public class CafeController : ControllerBase
{
     private readonly string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
     
    private string filePath = ""; 

    public CafeController(){
        filePath = baseDirectory + "\\database\\drinks.txt";
    }

    [HttpGet]
    public ActionResult<List<Drink>>GetDrinks()
    { 
        try
        {
            List<Drink>? drinks = new List<Drink>();
            string drinksJson = System.IO.File.ReadAllText(filePath);
            //var Json = new JRaw(drinks);
            if (!string.IsNullOrWhiteSpace(drinksJson)){
              drinks = JsonConvert.DeserializeObject<List<Drink>>(drinksJson);
            }
            return Ok(drinks); 
        }
        catch (Exception ex)
        {
            return BadRequest($"Error: {ex.Message}");
        }
    }

    // [HttpPost]
    // public ActionResult SaveData([FromBody] string newData)
    // {
    //     try
    //     {
    //         // Validate newData or perform any necessary processing
    //         if (string.IsNullOrWhiteSpace(newData))
    //         {
    //             return BadRequest("New data cannot be empty.");
    //         }

    //         System.IO.File.WriteAllText(filePath, newData);
    //         return Ok("Data saved successfully.");
    //     }
    //     catch (Exception ex)
    //     {
    //         return BadRequest($"Error: {ex.Message}");
    //     }
    // }
}