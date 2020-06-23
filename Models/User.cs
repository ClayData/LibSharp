using System;
using System.ComponentModel.DataAnnotations;

namespace LibSharp.Models
{
    public class User
    {
        public int UserId { get; set; }

        [Required]
        public string email { get; set; }

        public string password { get; set; }

    }
}

