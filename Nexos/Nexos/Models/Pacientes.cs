using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Nexos.Models
{
    public class Pacientes
    {
        [Key]
        public int IdPaciente { get; set; }

        [Column(TypeName = "varchar(25)")]        public string Nombres { get; set; }        public int NumeroSeguro { get; set; }

        [Column(TypeName = "varchar(15)")]        public string CodigoPostal { get; set; }        public int Telefono { get; set; }        public int IdDoctor { get; set; }

        public IList<PacienteDoctor> PacienteDoctors { get; set; }
    }
}
