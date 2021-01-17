using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Nexos.Models
{
    public class PacienteDoctor
    {
        [Key]
        public int Id { get; set; }

        public int IdPaciente { get; set; }
        public Pacientes Pacientes { get; set; }

        public int IdDoctor { get; set; }
        public Doctor Doctor { get; set; }

    }
}
