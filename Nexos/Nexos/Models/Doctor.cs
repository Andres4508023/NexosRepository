﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Nexos.Models
{
    public class Doctor
    {
        [Key]
        public int IdDoctor { get; set; }

        [Column(TypeName = "varchar(30)")]

        [Column(TypeName = "varchar(20)")]

        [Column(TypeName = "varchar(25)")]
    }
}