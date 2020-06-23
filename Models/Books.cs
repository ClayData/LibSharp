using System;
using System.ComponentModel.DataAnnotations;

namespace LibSharp.Models
{
    public class Book
    {
        public int BookId { get; set; }

        [Required]
        public string Title { get; set; }

        public string Author { get; set; }

        public string Description { get; set; }

        public string view { get; set; }

        public string image { get; set; }

    }
}