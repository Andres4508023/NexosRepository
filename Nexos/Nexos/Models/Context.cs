using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nexos.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }

        public DbSet<Pacientes> Pacientes { get; set; }
        public DbSet<Doctor> Doctor { get; set; }
        public DbSet<PacienteDoctor> PacienteDoctors { get; set; }

    }
}
